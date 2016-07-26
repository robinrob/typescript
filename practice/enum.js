#!/usr/bin/env node
"use strict";
var DiscFlags;
(function (DiscFlags) {
    DiscFlags[DiscFlags["None"] = 0] = "None";
    DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
    DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
    DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
    DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
})(DiscFlags || (DiscFlags = {}));
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
