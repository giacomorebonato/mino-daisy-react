import { LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { clsx } from 'clsx'
import type { LexicalEditor } from 'lexical'
import type { HTMLAttributes } from 'react'
import { ImageNode } from './image-node'
import {
  ImagePlugin,
  InitialContentPlugin,
  MarkdownShortcutsPlugin,
  OnChangePlugin,
  RefPlugin,
} from './plugins'
import { Toolbar } from './toolbar'

export interface RichTextEditorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Initial content for the editor.
   * Format depends on contentFormat prop.
   * For empty state, use empty string or undefined.
   */
  initialContent?: string

  /**
   * Callback fired when editor content changes.
   * Receives content string in format specified by contentFormat prop.
   */
  onChange?: (content: string) => void

  /**
   * Content format for initialContent and onChange output.
   * - 'html': Accept/export HTML (default, backwards compatible)
   * - 'markdown': Accept/export markdown while editing in WYSIWYG mode
   *
   * Note: When using 'markdown', complex HTML styling may be lost during conversion.
   * The editor always displays in WYSIWYG mode regardless of format.
   *
   * @default 'html'
   */
  contentFormat?: 'html' | 'markdown'

  /**
   * Enable real-time markdown shortcut conversion while typing.
   * Works independently of contentFormat - you can use markdown shortcuts
   * even when outputting HTML.
   *
   * Supported shortcuts:
   * - Headings: # H1, ## H2, ### H3, etc.
   * - Blockquotes: > quote text
   * - Bold: **text** or __text__
   * - Italic: *text* or _text_
   * - Strikethrough: ~~text~~
   * - Inline code: `code`
   * - Links: [text](url)
   * - Unordered lists: - item or * item
   * - Ordered lists: 1. item
   *
   * @default false
   */
  enableMarkdownShortcuts?: boolean

  /**
   * If true, editor is read-only and toolbar is hidden.
   */
  disabled?: boolean

  /**
   * Placeholder text when editor is empty.
   */
  placeholder?: string

  /**
   * Additional className for the toolbar wrapper.
   */
  toolbarClassName?: string

  /**
   * Additional className for the editor content area.
   */
  editorClassName?: string

  /**
   * Ref to the Lexical editor instance for advanced use cases.
   */
  ref?: React.Ref<LexicalEditor>
}

const editorTheme = {
  heading: {
    h1: 'text-4xl font-bold my-4',
    h2: 'text-3xl font-bold my-3',
    h3: 'text-2xl font-bold my-3',
    h4: 'text-xl font-bold my-2',
    h5: 'text-lg font-bold my-2',
    h6: 'text-base font-bold my-2',
  },
  list: {
    ul: 'list-disc list-inside my-2',
    ol: 'list-decimal list-inside my-2',
    listitem: 'ml-4',
    nested: {
      listitem: 'list-none',
    },
  },
  link: 'link link-primary',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
    code: 'font-mono bg-base-200 px-1 rounded',
  },
  paragraph: 'my-2',
  image: 'my-4',
}

export function RichTextEditor({
  initialContent,
  onChange,
  contentFormat = 'html',
  enableMarkdownShortcuts = false,
  disabled = false,
  placeholder = 'Start typing...',
  toolbarClassName,
  editorClassName,
  className,
  ref,
  ...props
}: RichTextEditorProps) {
  const initialConfig = {
    namespace: 'RichTextEditor',
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, LinkNode, ImageNode],
    onError: (error: Error) => {
      console.error('Lexical error:', error)
    },
    theme: editorTheme,
    editable: !disabled,
  }

  return (
    <div className={clsx('rich-text-editor', className)} {...props}>
      <LexicalComposer initialConfig={initialConfig}>
        {!disabled && <Toolbar className={toolbarClassName} />}

        <div className="relative">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className={clsx(
                  'prose max-w-none p-4 min-h-[200px] focus:outline-none',
                  editorClassName,
                )}
                style={{ cursor: 'text' }}
              />
            }
            placeholder={
              <div className="absolute top-4 left-4 text-base-content/50 pointer-events-none select-none">
                {placeholder}
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>

        <HistoryPlugin />
        <ListPlugin />
        <LinkPlugin />
        <ImagePlugin />
        <OnChangePlugin onChange={onChange} contentFormat={contentFormat} />
        <RefPlugin editorRef={ref} />
        {initialContent && (
          <InitialContentPlugin content={initialContent} contentFormat={contentFormat} />
        )}
        <MarkdownShortcutsPlugin enabled={enableMarkdownShortcuts} />
      </LexicalComposer>
    </div>
  )
}

RichTextEditor.displayName = 'RichTextEditor'
