# Markdown Literal Names

An original, dependency-free Node.js utility that makes column names display as
literal text in Markdown headings and bold labels.

## Problem context

Markdown renderers can interpret characters in column names as emphasis, code
spans, links, headings, or HTML. This implementation escapes Markdown
metacharacters and collapses line breaks so a name cannot create unintended
formatting.

## Setup

Node.js 18 or newer is required. No third-party packages are needed.

```powershell
cd markdown-literal-names
node --test
```

## Usage

```javascript
const { escapeMarkdown, renderColumnName } = require("./markdown_literal");

console.log(escapeMarkdown("gross *sales*"));
console.log(renderColumnName("value `count`"));
```

## Verification

Run the built-in Node.js test runner:

```powershell
node --test
```

The tests cover plain names, emphasis characters, backticks, line breaks,
markup characters, and invalid input types.

## Limitations

- This utility is not a full Markdown AST renderer.
- CR, LF, and CRLF are converted to spaces.
- It is intended for inline text such as headings and bold labels, not raw HTML
  or arbitrary Markdown block generation.

## Source attribution

Problem statement: [Escape column names in Markdown reports](https://github.com/samhoon000/Oribi/issues/39),
licensed public issue on the MIT-licensed [Oribi repository](https://github.com/samhoon000/Oribi).
This repository is an original minimal implementation; no source project code
was copied.
