import type p5 from "p5";

export const coordinates = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400);
  };

  p.draw = () => {
    // Set the background to black and turn off the fill color
    p.background(0);
    p.noFill();

    // The two parameters of the point() method each specify
    // coordinates.
    // The first parameter is the x-coordinate and the second is the Y
    p.stroke(255);
    p.point(p.width * 0.5, p.height * 0.5);
    p.point(p.width * 0.5, p.height * 0.25);

    // Coordinates are used for drawing all shapes, not just points.
    // Parameters for different functions are used for different
    // purposes. For example, the first two parameters to line()
    // specify the coordinates of the first endpoint and the second
    // two parameters specify the second endpoint
    p.stroke(0, 153, 255);
    p.line(0, p.height * 0.33, p.width, p.height * 0.33);

    // By default, the first two parameters to rect() are the
    // coordinates of the upper-left corner and the second pair
    // is the width and height
    p.stroke(255, 153, 0);
    p.rect(p.width * 0.25, p.height * 0.1, p.width * 0.5, p.height * 0.8);
  };
};
