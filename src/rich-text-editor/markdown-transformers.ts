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
  type TextMatchTransformer,
  UNORDERED_LIST,
} from '@lexical/markdown'
import { $createImageNode, $isImageNode, ImageNode } from './image-node'

/**
 * Image transformer for markdown format: ![alt](src)
 */
export const IMAGE: TextMatchTransformer = {
  dependencies: [ImageNode],
  export: (node) => {
    if (!$isImageNode(node)) {
      return null
    }
    return `![${node.getAlt() || ''}](${node.getSrc()})`
  },
  importRegExp: /!(?:\[([^\]]*)\])(?:\(([^)]+)\))/,
  regExp: /!(?:\[([^\]]*)\])(?:\(([^)]+)\))$/,
  replace: (textNode, match) => {
    const [, alt, src] = match
    const imageNode = $createImageNode({ src, alt: alt || '' })
    textNode.replace(imageNode)
  },
  trigger: ')',
  type: 'text-match',
}

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
 * - Images: ![alt](src)
 * - Unordered lists: - item or * item
 * - Ordered lists: 1. item
 */
export const MARKDOWN_TRANSFORMERS = [
  IMAGE,
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
