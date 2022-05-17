import { FC } from "react";
import { InView } from "react-intersection-observer";

interface ObserverValues {
  callApi: () => void;
}

export const IntersectionObservers: FC<ObserverValues> = ({ callApi }) => (
  <InView
    onChange={() => {
      callApi();
    }}
    trackVisibility={true}
    delay={200}
    initialInView={false}
    triggerOnce={true}
  >
    {({ inView, ref, entry }) => (
      <div ref={ref}>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div>
    )}
  </InView>
);
