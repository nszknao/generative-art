import p5 from "p5";
import React, { createRef, useEffect, useState } from "react";

interface Props {
  sketch: any;
}

export const P5Wrapper: React.VFC<Props> = (props) => {
  const [instance, setInstance] = useState<p5>();
  const wrapper = createRef<HTMLDivElement>();

  useEffect(() => {
    if (wrapper.current === null) return;
    setInstance(new p5(props.sketch, wrapper.current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.sketch]);

  return <div ref={wrapper} />;
};

export default P5Wrapper;
