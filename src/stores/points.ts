import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

interface Point {
  id: String;
  x: Number;
  y: Number;
  d: String;
}

function encryptStringWithXORtoHex(input,key) {
    var c = '';
    while (key.length < input.length) {
         key += key;
    }
    for(var i=0; i<input.length; i++) {
        var value1 = input[i].charCodeAt(0);
        var value2 = key[i].charCodeAt(0);

        var xorValue = value1 ^ value2;

        var xorValueAsHexString = xorValue.toString("16");

        if (xorValueAsHexString.length < 2) {
            xorValueAsHexString = "0" + xorValueAsHexString;
        }

        c += xorValueAsHexString;
    }
    return c;
}

export const usePointsStore = defineStore('points', () => {
  const points = reactive<Point[]>([])

  function addPoint(x,y,d) {
      const BASIC = ' '+Date.now()+x+y+d;
      const POINT_ID = encryptStringWithXORtoHex(BASIC, 'key')
      const point = {
        id: POINT_ID,
        x: x,
        y: y,
        d: d
      }
      point.id = POINT_ID
      points.push(point);
  }

  function clearPoints() {
    points.length = 0;
  }

  function removePoint(id) {
    const LENGTH = points.length;
    console.log(LENGTH)
    points.filter(function(el) {
      return el.id != id
    });
    console.log(points.length)
    if (points.length === LENGTH) {
      console.log('NOTHING REMOVED')
    }
  }

  return { points, addPoint, clearPoints, removePoint}
})
