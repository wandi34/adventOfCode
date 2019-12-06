"use strict";
exports.__esModule = true;
function crossedWires(wire1, wire2) {
    var cursorList_w1 = iterateWire(wire1);
    var cursorList_w2 = iterateWire(wire2);
    var crossedCursors = Array.from(getSameElements(new Set(cursorList_w1), new Set(cursorList_w2)));
    var distances = crossedCursors.map(function (c) { return Math.abs(Number(c.split('|')[0])) + Math.abs(Number(c.split('|')[1])); });
    return distances.sort(function (a, b) { return a - b; })[0];
}
exports.crossedWires = crossedWires;
function getSameElements(cursorSet1, cursorSet2) {
    var result = new Set();
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
        cursorList = calculate(steps, inst, cursorList);
    });
    return cursorList;
}
function calcNewCursor(cursor, addition) {
    var cursorSplitted = cursor.split('|');
    var additionSplittet = addition.split('|');
    return Number(cursorSplitted[0]) + Number(additionSplittet[0]) + "|" + (Number(cursorSplitted[1]) + Number(additionSplittet[1]));
}
function calculate(steps, inst, cursorList) {
    while (steps > 0) {
        var lastCursor = cursorList[cursorList.length - 1];
        cursorList.push(calcNewCursor(lastCursor, getCalculation(inst)));
        --steps;
    }
    return cursorList;
}
function getCalculation(instruction) {
    switch (instruction) {
        case "R": return "1|0";
        case "L": return "-1|0";
        case "U": return "0|1";
        case "D": return "0|-1";
        default: throw new Error("Given instruction " + instruction + " is not valid.");
    }
}
