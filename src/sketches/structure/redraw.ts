import type p5 from "p5";

let y = 0;
export const redraw = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400);
    p.stroke(255);
    p.noLoop();
    y = p.height * 0.5;
  };

  p.draw = () => {
    p.background(0);
    y = y - 4;
    if (y < 0) {
      y = p.height;
    }
    p.line(0, y, p.width, y);
  };

  // クリックするたびにdrawされる
  p.mousePressed = () => {
    p.redraw();
  };
};
