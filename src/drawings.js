const drawRegVsSs = function (id) {
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
    `${id}`
  ));
  let cs = canvas.getContext("2d");

  canvas.height = canvas.clientHeight;
  canvas.width = canvas.clientWidth;

  cs.beginPath();
  cs.moveTo(100, 100);
  cs.lineTo(500, 500);
  cs.stroke();
};

const drawRegToolFor = function (id) {
    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
        `${id}`
      ));
      let cs = canvas.getContext("2d");
    
      canvas.height = canvas.clientHeight;
      canvas.width = canvas.clientWidth;
    
      cs.beginPath();
      cs.moveTo(100, 100);
      cs.lineTo(500, 500);
      cs.stroke();
}

const drawRegBBB = function (id) {
    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
        `${id}`
      ));
      let cs = canvas.getContext("2d");
    
      canvas.height = canvas.clientHeight;
      canvas.width = canvas.clientWidth;
    
      cs.beginPath();
      cs.moveTo(100, 100);
      cs.lineTo(500, 500);
      cs.stroke();
}

const draw = function (id) {
    if (id === 'regVsSsCanvas') {
        drawRegVsSs(id);
    } else if (id === 'regToolForCanvas') {
        drawRegToolFor(id);
    } else if (id === 'regBBBCanvas') {
        drawRegBBB(id);
    }
}

export {draw};
export { drawRegVsSs };
