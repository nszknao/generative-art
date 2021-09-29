import type p5 from "p5";

export const sineCosine = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400, "webgl");
  };

  p.draw = () => {
    p.background(250);
    p.rotateY(p.frameCount * 0.01);

    for (let j = 0; j < 5; j++) {
      p.push();
      for (let i = 0; i < 80; i++) {
        p.translate(
          p.sin(p.frameCount * 0.001 + j) * 100,
          p.sin(p.frameCount * 0.001 + j) * 100,
          i * 0.1
        );
        p.rotateZ(p.frameCount * 0.002);
        p.sphere(8, 6, 4);
      }
      p.pop();
    }
  };
};
