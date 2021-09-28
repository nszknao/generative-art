import type p5 from "p5";

export const multipleLights = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400, "webgl");
  };

  p.draw = () => {
    p.background(0);

    const locX = p.mouseX - p.height / 2;
    const locY = p.mouseY - p.width / 2;

    p.ambientLight(50);
    // 太陽光
    p.directionalLight(255, 0, 0, 0.25, 0.25, 0);
    // 特定の場所からの光源
    p.pointLight(0, 0, 255, locX, locY, 250);

    p.push();
    p.translate(-p.width / 4, 0, 0);
    p.rotateZ(p.frameCount * 0.02);
    p.rotateX(p.frameCount * 0.02);
    p.specularMaterial(250);
    p.box(100, 100, 100);
    p.pop();

    p.translate(p.width / 4, 0, 0);
    p.ambientMaterial(250);
    p.sphere(120, 64);
  };
};
