"use client";

import ActionBar from "./Components/ActionBar/ActionBar";
import OverallSummary from "./Components/OverallSummary/OverallSummary";

export default function Groups() {
  return (
    <>
      <ActionBar />
      <OverallSummary />
      {/* <div
        onScrollCapture={(e) => {
          console.log(e);
        }}
      >
        GROUPS
      </div> */}
    </>
  );
}
