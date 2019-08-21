const mixin = {
	methods: {
    getWindowDimensions() {
      let doc = document;
      let win = window;
      let w,h,o,m;
      if (doc && doc.documentElement) {
        w = doc.documentElement.clientWidth;
        h = doc.documentElement.clientHeight;
      } else if (win) {
        w = win.innerWidth;
        h = win.innerHeight;
      }
      if (w>0 && h>0) {
        if (w > h) {
          o = "landscape";
          m = w;
        } else {
          o = "portrait";
          m = h;
        }
      }
      return {
        width: w,
        height: h,
        orientation: o,
        ratio: h/w,
        max: m
      };
    },
    debounce(func,wait,immediate) {
      //Borrowed from underscore.js.
      // For frequently firing listener functions like scroll or resize.
      // Returns a function, that, as long as it continues to be invoked, 
      // will not be triggered. The function `func` will be called after
      // this stops being invoked for `wait` milliseconds. 
      // If `immediate` is passed, trigger the function `func` on the
      // leading edge, instead of the trailing.
      var timeout;
      return function() {
        var context = this;
        var args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    addResizeListener(cb) {
      if (window.addEventListener) {
        window.addEventListener(
          'resize', 
          this.debounce(cb, 200),
          false
        );
      }
    },
    removeResizeListener(cb) {
      if (window.removeEventListener) {
        window.removeEventListener('resize', cb);
      }
    },
  }
}

export default mixin