---
title: "Codebraid: Live Code in Pandoc Markdown"
description: Codebraid executes code blocks and inline code in Pandoc Markdown
  documents as part of the document build process. Code can be executed with a
  built-in system or Jupyter kernels. Either way, a single document can involve
  multiple programming languages, as well as multiple independent sessions or
  processes per language.
abstract: Codebraid executes code blocks and inline code in Pandoc Markdown
  documents as part of the document build process. Code can be executed with a
  built-in system or Jupyter kernels. Either way, a single document can involve
  multiple programming languages, as well as multiple independent sessions or
  processes per language. Because Codebraid only uses standard Pandoc Markdown
  syntax, Pandoc handles all Markdown parsing and format conversions. In the
  final output document produced by Pandoc, a code chunk can be replaced by a
  display of any combination of its original Markdown source, its code, the
  stdout or stderr resulting from execution, or rich output in the case of
  Jupyter kernels. There is also support for programmatically copying code or
  output to other parts of a document.
---

