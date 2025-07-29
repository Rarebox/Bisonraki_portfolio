import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window === "undefined") return;

    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Particle Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: new THREE.Color(0x6366f1), // Indigo color
      transparent: true,
      opacity: 0.8,
    });

    // Particle Mesh
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Create floating cubes
    const cubes = [];
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(`hsl(${225 + Math.random() * 50}, 70%, 60%)`),
        transparent: true,
        opacity: 0.3,
        wireframe: true,
      });
      const cube = new THREE.Mesh(geometry, material);

      cube.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      cube.userData = {
        velocity: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
      };

      cubes.push(cube);
      scene.add(cube);
    }

    // Create connecting lines
    const connections = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particlesCount * 6);
    connections.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(0x14b8a6), // Teal color
      transparent: true,
      opacity: 0.1,
    });

    const lines = new THREE.LineSegments(connections, lineMaterial);
    scene.add(lines);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      // Animate cubes
      cubes.forEach((cube) => {
        cube.position.x += cube.userData.velocity.x;
        cube.position.y += cube.userData.velocity.y;
        cube.position.z += cube.userData.velocity.z;

        cube.rotation.x += cube.userData.rotationSpeed.x;
        cube.rotation.y += cube.userData.rotationSpeed.y;
        cube.rotation.z += cube.userData.rotationSpeed.z;

        // Boundary check
        ["x", "y", "z"].forEach((axis) => {
          if (Math.abs(cube.position[axis]) > 10) {
            cube.userData.velocity[axis] *= -1;
          }
        });
      });

      // Update raycaster
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      // Mouse interaction effect
      if (intersects.length > 0) {
        const target = intersects[0].point;
        camera.lookAt(target.x * 0.1, target.y * 0.1, camera.position.z);
      }

      // Update dynamic connections
      const positions = lines.geometry.attributes.position.array;
      let vertexIndex = 0;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        for (let j = i + 1; j < particlesCount; j++) {
          const j3 = j * 3;

          const dx = posArray[i3] - posArray[j3];
          const dy = posArray[i3 + 1] - posArray[j3 + 1];
          const dz = posArray[i3 + 2] - posArray[j3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 1.5 && vertexIndex < positions.length - 6) {
            positions[vertexIndex] = posArray[i3];
            positions[vertexIndex + 1] = posArray[i3 + 1];
            positions[vertexIndex + 2] = posArray[i3 + 2];

            positions[vertexIndex + 3] = posArray[j3];
            positions[vertexIndex + 4] = posArray[j3 + 1];
            positions[vertexIndex + 5] = posArray[j3 + 2];

            vertexIndex += 6;
          }
        }
      }

      lines.geometry.setDrawRange(0, vertexIndex / 3);
      lines.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      // Clean up Three.js objects
      scene.clear();
      particlesGeometry.dispose();
      particlesMaterial.dispose();

      cubes.forEach((cube) => {
        cube.geometry.dispose();
        cube.material.dispose();
      });

      connections.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ThreeBackground;
