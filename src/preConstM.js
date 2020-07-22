/* pre-const button top left => 2 buttons taking the whole screen 
(1. regex(more complex structurally) vs simple strings structurally(regardless of subsequent ascribed meaning), 
(2. what regex is useful for, good at),
each of the buttons points to canvas animantion - again canvas is chosen of practice and way of thinking */

import React from "react";
import Draw from "./draw";

function PreConst(props) {
  let jsxPreConstM = (
    <div>
      <button id="retBtoM" onClick={(event) => props.butCb(props.retPage)}>
        &#8592; Return Back
      </button>
      <button id="regVsSsB" onClick={(event) => props.butCb(props.subP1T)}>
        1. {props.subP1T}
      </button>
      <button id="regToolForB" onClick={(event) => props.butCb(props.subP2T)}>
        2. {props.subP2T}
      </button>
      <button id="regBBBB" onClick={(event) => props.butCb(props.subP3T)}>
        3. {props.subP3T}
      </button>
    </div>
  );

  let jsxRegVsSs = (
    <div>
      <Draw
        retPage={props.subP0T}
        butCb={props.butCb}
        canvasId="regVsSsCanvas"
      />
    </div>
  );

  let jsxRegAToolFor = (
    <div>
      <Draw
        retPage={props.subP0T}
        butCb={props.butCb}
        canvasId="regToolForCanvas"
      />
    </div>
  );

  let jsxRegBBB = (
    <div>
      <Draw retPage={props.subP0T} butCb={props.butCb} canvasId="regBBBCanvas" />
    </div>
  );

  if (props.curPage === props.subP0T) {
    return jsxPreConstM;
  } else if (props.curPage === props.subP1T) {
    return jsxRegVsSs;
  } else if (props.curPage === props.subP2T) {
    return jsxRegAToolFor;
  } else if (props.curPage === props.subP3T) {
    return jsxRegBBB;
  }
}

export default PreConst;
