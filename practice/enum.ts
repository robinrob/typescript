#!/usr/bin/env node

"use strict"

enum DiscFlags {
        None = 0,
        Drive = 1,
        Influence = 2,
        Steadiness = 4,
        Conscientiousness = 8
}

// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

// Testing flags

// true
var hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;

// true
var hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence;

// false
var hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness;

// false
var hasC = (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness;

console.log('hasD: ' + hasD)
console.log('hasI: ' + hasI)
console.log('hasS: ' + hasS)
console.log('hasC: ' + hasC)
