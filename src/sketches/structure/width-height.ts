import type p5 from "p5";

export const widthHeight = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400);
  };

  p.draw = () => {
    p.background(127);
    p.noStroke();
    for (let i = 0; i < p.height; i += 20) {
      p.fill(129, 206, 15);
      p.rect(0, i, p.width, 10);
      p.fill(255);
      p.rect(i, 0, 10, p.height);
    }
  };
};
