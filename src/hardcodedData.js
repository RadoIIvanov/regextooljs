let pageTree = {
  value: "main",
  children: [
    {
      value: "preConst",
      children: [
        { value: "regVsSimStr", children: null, parent: "preConst" },
        { value: "regPrimUs", children: null, parent: "preConst" },
      ],
      parent: "main",
    },
    { value: "preEngine" },
  ],
  parent: null,
};

let regVsSsEx = {
  regEx: ["^abc+"],
  ssEx: ["abc"],
};

export {pageTree};
export {regVsSsEx};

//// hardcode most of the strings immutable data, later on revise code, e.g. render using arrays of JSX (passing most of the string data from here)