import {
  BOLD_ITALIC_STAR,
  BOLD_ITALIC_UNDERSCORE,
  BOLD_STAR,
  BOLD_UNDERSCORE,
  HEADING,
  INLINE_CODE,
  ITALIC_STAR,
  ITALIC_UNDERSCORE,
  LINK,
  ORDERED_LIST,
  QUOTE,
  STRIKETHROUGH,
  UNORDERED_LIST,
} from '@lexical/markdown'

/**
 * Markdown transformers matching RichTextEditor's supported nodes.
 *
 * Used for:
 * - Converting markdown → Lexical nodes (InitialContentPlugin)
 * - Converting Lexical nodes → markdown (OnChangePlugin)
 * - Real-time markdown shortcuts (MarkdownShortcutsPlugin)
 *
 * Supported markdown syntax:
 * - Headings: # H1, ## H2, ### H3, etc.
 * - Blockquotes: > quote text
 * - Bold: **bold** or __bold__
 * - Italic: *italic* or _italic_
 * - Bold + Italic: ***bold italic*** or ___bold italic___
 * - Strikethrough: ~~strikethrough~~
 * - Inline code: `code`
 * - Links: [text](url)
 * - Unordered lists: - item or * item
 * - Ordered lists: 1. item
 */
export const MARKDOWN_TRANSFORMERS = [
  HEADING,
  QUOTE,
  BOLD_STAR,
  BOLD_UNDERSCORE,
  ITALIC_STAR,
  ITALIC_UNDERSCORE,
  BOLD_ITALIC_STAR,
  BOLD_ITALIC_UNDERSCORE,
  STRIKETHROUGH,
  INLINE_CODE,
  LINK,
  UNORDERED_LIST,
  ORDERED_LIST,
]
