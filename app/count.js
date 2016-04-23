exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var obj = {},
        counter = start;

    var interval = setInterval(function() {
        console.log(counter);
        counter++;
    }, 100);

    obj.cancel = function() {
      clearInterval(interval)
    };

    if (counter === end) {
      obj.cancel();
    }

    return obj;
  }
};
