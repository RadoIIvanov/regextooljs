import React from "react";
import PreConst from "./preConstM";

class RegexToolJsApp extends React.Component {
  constructor(props) {
    super(props); /* use strs for values if simple enough */
    /* align navigation and structure (i.e. preconst calling draw conditionally on state) */

    this.state = {
      curPage: "main",
    };
  }

  butCb = (newS) => {
    this.setState({ curPage: newS });
  };

  render() {
    let jsxMain = (
      <div>
        <h1 id="titleM">A Tool to Construct Regexes</h1>
        <button
          id="preConsB"
          onClick={(event) => this.butCb("Pre Construction - Regex Basics")}
        >
          Pre Construction - Regex Basics
        </button>
      </div>
    );

    let jsxPreConst = (
      <div>
        <PreConst
          retPage="main"
          butCb={this.butCb}
          curPage={this.state.curPage}
          subP0T="Pre Construction - Regex Basics"
          subP1T="Regex vs Simple Strings"
          subP2T="Regex - a Tool Good for..."
          subP3T="Regex - Basic Building Blocks"
        />
      </div>
    );

    if (this.state.curPage === "main") {
      return jsxMain;
    } else {
      return jsxPreConst;
    }
  }
}

export default RegexToolJsApp;
