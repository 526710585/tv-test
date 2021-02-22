(function (window) {
  // 判断是否为异形屏
  function isSpecialShaped() {
    console.log('screen.width / (screen.height / 9) : ', screen.width / (screen.height / 9));
    console.log('screen.height: ', screen.height);
    console.log('screen.width : ', screen.width);
    var x = screen.width / (screen.height / 9);
    return (x >= 17.5 && x <= 21) || (x >= 4 && x < 5);
  }
  var fontSize = parseFloat(getComputedStyle(document.getElementsByTagName('html')[0], null)['font-size']);

  function reset() {
    // var size = document.documentElement.clientWidth / 1280 * 10 / fontSize * 1000;
    var size = document.documentElement.clientWidth / 1280 * 100;
    // size = size > 371 ? 371 : size;
    document.documentElement.style.fontSize = `${size}px`;
    console.log('size', size);

    var realsize = ~~(window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize.replace('px', '') * 10000) / 10000;
    console.log('realsize', realsize);
    if (size != realsize) {
      console.log('size * (Math.min(realsize, size) / Math.max(realsize, size))', size * (Math.min(realsize, size) / Math.max(realsize, size)));
      document.documentElement.style.fontSize = `${size * (Math.min(realsize, size) / Math.max(realsize, size))}px`;
    }
  }

  function iphoneX() {
    reset();
    if (isSpecialShaped()) {
      var ele = document.getElementsByTagName('body');
      // ele[0].setAttribute("class", "iphonex");
      var u = navigator.userAgent;
      ele[0].setAttribute('class', 'iphonex overall');
      // if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
      //     ele[0].setAttribute("class", "iphonex overall");
      // }
      if (document.body.clientWidth < 770) {
        ele[0].setAttribute('class', 'overall scale');
      }
    }
  }

  var timer = null;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(iphoneX, 300);
  }, !1);
  iphoneX();
})(window)
