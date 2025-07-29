// components/DynamicThreeBackground.jsx
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
  ssr: false,
  loading: () => null, // Show nothing while loading
});

export default ThreeBackground;
