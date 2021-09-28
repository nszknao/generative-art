import type p5 from "p5";

let y = 100;
export const loop = (p: p5) => {
  // The statements in the setup() function
  // execute once when the program begins
  p.setup = () => {
    // createCanvas must be the first statement
    p.createCanvas(720, 400);
    p.stroke(255);
    p.frameRate(30);
  };

  // The statements in draw() are executed until the
  // program is stopped. Each statement is executed in
  // sequence and after the last line is read, the first
  // line is executed again.
  p.draw = () => {
    p.background(0);
    y = y - 1;
    if (y < 0) {
      y = p.height;
    }
    p.line(0, y, p.width, y);
  };
};
