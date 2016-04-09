exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    var copy = arr.slice();
    for (var i = 0; i < copy.length; i++) {
      if (copy[i] === item) {
        copy.splice(i, 1);
      }
    }
    return copy;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }

    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.forEach(function(thing, i) {
      arr[i + 1] = arr[i];
    });
    arr[0] = item;
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArr = arr1.slice();
    arr2.forEach(function(item) {
      newArr.push(item);
    });
    return newArr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var tally = 0;
    arr.forEach(function(thing) {
      if (thing === item) tally++;
    });
    return tally;
  },

  duplicates : function(arr) {
    //[ 1, 2, 4, 4, 3, 3, 1, 5, 3 ]
    var dupes = {},
        result = [];
    arr.forEach(function(item) {
      if (dupes[item]) {
        dupes[item] += 1;
      }
      else {
        dupes[item] = 1;
      }
    });
    for (var key in dupes) {
      if (dupes[key] > 1) {
        result.push(parseInt(key));
      }
    }
    return result;
  },

  square : function(arr) {
    arr.forEach(function(item, idx) {
      arr[idx] = item * item;
    });
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    arr.forEach(function(item, index) {
      if (item === target) {
        result.push(index);
      }
    });
    return result;
  }
};
