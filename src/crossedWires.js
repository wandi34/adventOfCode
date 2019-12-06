"use strict";
exports.__esModule = true;
function crossedWires(wire1, wire2) {
    var cursorList_w1 = iterateWire(wire1);
    var cursorList_w2 = iterateWire(wire2);
    var crossedCursors = Array.from(getSameElements(cursorList_w1, cursorList_w2));
    var distances = crossedCursors.map(function (c) { return Math.abs(Number(c.split('|')[0])) + Math.abs(Number(c.split('|')[1])); });
    return distances.sort(function (a, b) { return a - b; })[0];
}
exports.crossedWires = crossedWires;
function getSameElements(cursorList1, cursorList2) {
    var result = new Set();
    var cursorSet1 = new Set(cursorList1);
    var cursorSet2 = new Set(cursorList2);
    cursorSet1.forEach(function (cursor) {
        if (cursorSet2.has(cursor) && cursor !== "0|0") {
            result.add(cursor);
        }
    });
    return result;
}
function iterateWire(wire) {
    var cursorList = ["0|0"];
    wire.map(function (rule) {
        var inst = rule.substring(0, 1);
        var steps = Number(rule.substring(1));
        if (inst === "R") {
            cursorList = rightAdd(steps, cursorList);
        }
        else if (inst === "L") {
            cursorList = leftAdd(steps, cursorList);
        }
        else if (inst === "U") {
            cursorList = upAdd(steps, cursorList);
        }
        else if (inst === "D") {
            cursorList = downAdd(steps, cursorList);
        }
    });
    return cursorList;
}
function addToString(string, input) {
    var stringAsNumber = string.split('|');
    var inputAsNumber = input.split('|');
    return Number(stringAsNumber[0]) + Number(inputAsNumber[0]) + "|" + (Number(stringAsNumber[1]) + Number(inputAsNumber[1]));
}
function rightAdd(steps, cursorList) {
    while (steps > 0) {
        var lastCursor = cursorList[cursorList.length - 1];
        cursorList.push(addToString(lastCursor, "1|0"));
        --steps;
    }
    return cursorList;
}
function leftAdd(steps, cursorList) {
    while (steps > 0) {
        var lastCursor = cursorList[cursorList.length - 1];
        cursorList.push(addToString(lastCursor, "-1|0"));
        --steps;
    }
    return cursorList;
}
function upAdd(steps, cursorList) {
    while (steps > 0) {
        var lastCursor = cursorList[cursorList.length - 1];
        cursorList.push(addToString(lastCursor, "0|1"));
        --steps;
    }
    return cursorList;
}
function downAdd(steps, cursorList) {
    while (steps > 0) {
        var lastCursor = cursorList[cursorList.length - 1];
        cursorList.push(addToString(lastCursor, "0|-1"));
        --steps;
    }
    return cursorList;
}
