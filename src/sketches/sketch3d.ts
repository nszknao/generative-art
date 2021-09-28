import type p5 from "p5";

export const sketch3d = (p: p5) => {
  p.setup = () => {
    p.createCanvas(300, 300, "webgl");
  };
  p.draw = () => {
    p.background(220);

    //左側のトーラス マテリアル指定なし
    p.push();
    p.translate(-50, 0, -50);
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.torus(30, 10);
    p.pop();

    //右側のトーラス マテリアル指定あり
    p.push();
    p.translate(50, 0, 0);
    // マテリアルをつける
    p.normalMaterial();
    p.rotateZ(p.frameCount * 0.01);
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.torus(30, 10);
    p.pop();
  };
};
