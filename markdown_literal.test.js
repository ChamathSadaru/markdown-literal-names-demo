"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");

const { escapeMarkdown, renderColumnName } = require("./markdown_literal");

test("names without Markdown formatting characters are unchanged", () => {
  assert.equal(escapeMarkdown("customerName"), "customerName");
});

test("emphasis characters are escaped", () => {
  assert.equal(escapeMarkdown("gross *sales*"), "gross \\*sales\\*");
});

test("backticks are escaped", () => {
  assert.equal(escapeMarkdown("value `count`"), "value \\`count\\`");
});

test("newlines cannot create new blocks", () => {
  assert.equal(escapeMarkdown("name\r\nheading"), "name heading");
  assert.equal(escapeMarkdown("name\nnext"), "name next");
});

test("markup characters are literal", () => {
  assert.equal(
    escapeMarkdown("<tag> [x] & 1"),
    "&lt;tag&gt; \\[x\\] &amp; 1"
  );
});

test("column-name helper has no extra formatting", () => {
  assert.equal(renderColumnName("# amount"), "\\# amount");
});

test("non-string values are rejected", () => {
  assert.throws(() => escapeMarkdown(null), {
    name: "TypeError",
    message: "value must be a string",
  });
});
