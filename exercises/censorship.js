"use strict";
/*
Create a function `censor` which takes an array of sentences and a forbidden word as argument, then returns the array with the word censored.

A censored word is replaced with asterisks, e.g: "tacos" -> "*****".

Only a full word should be censored.

sentences: [
  "I love the smell of tacos in the morning.",
  "Where is my umbrella?",
  "The test is not a diagnosis of the disease psittacosis.",
  "Eat tacos every day."
]
forbidden word: "tacos"

result: [
  "I love the smell of ***** in the morning.",
  "Where is my umbrella?",
  "The test is not a diagnosis of the disease psittacosis.",
  "Eat ***** every day."
]

You can't use a loop!

Do not mutate the parameter.

*/

// TODO your code:

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof censor, "function");
assert.strictEqual(censor.length, 2);
assert.strictEqual(
  censor.toString().includes("for "),
  false,
  "Do not use a loop"
);
assert.strictEqual(
  censor.toString().includes("while "),
  false,
  "Do not use a loop"
);
assert.deepStrictEqual(censor([], "test"), []);
assert.deepStrictEqual(censor(["schnibble"], "schnibble"), ["*********"]);
assert.deepStrictEqual(
  censor(
    [
      "I love the smell of tacos in the morning.",
      "Where is my umbrella?",
      "The test is not a diagnosis of the disease psittacosis.",
      "Eat tacos every day.",
    ],
    "tacos"
  ),
  [
    "I love the smell of ***** in the morning.",
    "Where is my umbrella?",
    "The test is not a diagnosis of the disease psittacosis.",
    "Eat ***** every day.",
  ]
);
let test = ["this test is awesome"];
censor(test);
assert.deepStrictEqual(
  test,
  ["this test is awesome"],
  "Do not mutate the parameter"
);

// End of tests