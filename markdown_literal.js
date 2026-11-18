"use strict";

const markdownSpecials = new Set("\\`*_{}[]()#+-.!|>");
const newlinePattern = /\r\n|\r|\n/g;

function escapeMarkdown(value) {
  if (typeof value !== "string") {
    throw new TypeError("value must be a string");
  }

  const oneLine = value.replace(newlinePattern, " ");
  const htmlSafe = oneLine
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return Array.from(htmlSafe, (character) =>
    markdownSpecials.has(character) ? `\\${character}` : character
  ).join("");
}

function renderColumnName(name) {
  return escapeMarkdown(name);
}

module.exports = { escapeMarkdown, renderColumnName };
