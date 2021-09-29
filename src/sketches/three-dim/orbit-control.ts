import type p5 from "p5";

export const orbitControl = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400, p.WEBGL);
  };

  p.draw = () => {
    p.background(250);
    let radius = p.width * 1.5;

    // drag to move the world.
    p.orbitControl();

    p.normalMaterial();
    p.translate(0, 0, -600);
    for (let i = 0; i <= 12; i++) {
      for (let j = 0; j <= 12; j++) {
        p.push();
        const a = (j / 12) * p.PI;
        const b = (i / 12) * p.PI;
        p.translate(
          p.sin(2 * a) * radius * p.sin(b),
          (p.cos(b) * radius) / 2,
          p.cos(2 * a) * radius * p.sin(b)
        );
        if (j % 2 === 0) {
          p.cone(30, 30);
        } else {
          p.box(30, 30, 30);
        }
        p.pop();
      }
    }
  };
};
