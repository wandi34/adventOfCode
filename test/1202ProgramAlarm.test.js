const test1 = [1,0,0,0,99]
const result1 = [2,0,0,0,99]

const test2 = [2,3,0,3,99]
const result2 = [2,3,0,6,99]

const test3 = [2,4,4,5,99,0]
const result3 = [2,4,4,5,99,9801]

const test4 = [1,1,1,4,99,5,6,0,99]
const result4 = [30,1,1,4,2,5,6,0,99]

const test5 = [1,9,10,3,2,3,11,0,99,30,40,50]
const result5 = [3500,9,10,70,2,3,11,0,99,30,40,50]

const exercise = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,6,23,2,13,23,27,1,27,13,31,1,9,31,35,1,35,9,39,1,39,5,43,2,6,43,47,1,47,6,51,2,51,9,55,2,55,13,59,1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0]

var assert = require('assert');
import {programAlarm} from '../src/1202ProgramAlarm'

describe('Array', function() {
  describe('should return an array', function() {
    it('should return an array for testinput', function() {
      assert.ok(Array.isArray(programAlarm(test1)));
    });
  });

  describe('should calculate input correctly', function() {
    it('should calculate input correctly', function() {
      assert.deepEqual(programAlarm(test5), result5);
    });
  });

  describe('exercise', function() {
    it('should calculate input correctly', function() {
      var result = programAlarm(exercise)
      console.log('Solution for exercise = ' + result[0])
    });
  });
});