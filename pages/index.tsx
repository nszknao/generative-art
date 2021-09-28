import dynamic from "next/dynamic";
import type { NextPage } from "next";

const P5Wrapper = dynamic(() => import("src/P5Wrapper"), { ssr: false });
import { sketch } from "src/sketches/sketch";

const Home: NextPage = () => {
  return (
    <div>
      <P5Wrapper sketch={sketch} />
    </div>
  );
};

export default Home;
