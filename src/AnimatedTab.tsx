import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);

export function AnimatedTab() {
  const [selectedTab, setSelectedTab] = useState("");
  const container = useRef<HTMLDivElement | null>(null);
  const refOne = useRef<HTMLDivElement | null>(null);
  const refTwo = useRef<HTMLDivElement | null>(null);
  const refThree = useRef<HTMLDivElement | null>(null);
  const refTab = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP(() => {
    if (refTab.current) {
      refOne.current?.appendChild(refTab.current);
      setSelectedTab("one");
    }
  });

  const onClickOne = contextSafe(() => {
    const state = Flip.getState(refTab.current);
    if (refTab.current) {
      refOne.current?.appendChild(refTab.current);
    }
    Flip.from(state, {}).progress(1).progress(0);
    setSelectedTab("one");
  });

  const onClickTwo = contextSafe(() => {
    const state = Flip.getState(refTab.current);
    if (refTab.current) {
      refTwo.current?.appendChild(refTab.current);
    }
    Flip.from(state, {}).progress(1).progress(0);
    setSelectedTab("two");
  });
  const onClickThree = contextSafe(() => {
    const state = Flip.getState(refTab.current);
    if (refTab.current) {
      refThree.current?.appendChild(refTab.current);
    }
    Flip.from(state, {}).progress(1).progress(0);
    setSelectedTab("three");
  });

  return (
    <div
      id="tabs-container"
      ref={container}
      className="relative mb-2 grid h-10 grid-flow-col justify-stretch rounded-lg bg-slate-100 p-1"
    >
      <div
        ref={refOne}
        className="relative p-1 text-center text-sm font-semibold text-slate-500"
        onClick={() => {
          onClickOne();
        }}
      >
        one
      </div>
      <div
        ref={refTwo}
        className="relative p-1 text-center text-sm font-semibold text-slate-500"
        onClick={onClickTwo}
      >
        two
      </div>
      <div
        ref={refThree}
        className="relative p-1 text-center text-sm font-semibold text-slate-500"
        onClick={onClickThree}
      >
        three
        <div
          ref={refTab}
          className="box absolute left-0 top-0 z-10 h-full w-full whitespace-nowrap rounded-sm bg-white p-1 text-center text-sm font-semibold shadow-sm"
        >
          {selectedTab}
        </div>
      </div>
    </div>
  );
}
