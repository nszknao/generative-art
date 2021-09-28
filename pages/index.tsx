import dynamic from "next/dynamic";
import type { NextPage } from "next";

const P5Wrapper = dynamic(() => import("src/P5Wrapper"), { ssr: false });
import { sketch } from "src/sketches/sketch";
import { sketch3d } from "src/sketches/sketch3d";

const Home: NextPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <P5Wrapper sketch={sketch} />
      <div style={{ width: 10 }} />
      <P5Wrapper sketch={sketch3d} />
    </div>
  );
};

export default Home;
