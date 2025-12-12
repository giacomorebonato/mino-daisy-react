import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html'
import { $convertFromMarkdownString, $convertToMarkdownString } from '@lexical/markdown'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { MarkdownShortcutPlugin as LexicalMarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  type LexicalCommand,
  type LexicalEditor,
} from 'lexical'
import { useEffect, useRef } from 'react'
import { $createImageNode, type ImagePayload } from './image-node'
import { MARKDOWN_TRANSFORMERS } from './markdown-transformers'

export const INSERT_IMAGE_COMMAND: LexicalCommand<ImagePayload> =
  createCommand('INSERT_IMAGE_COMMAND')

export interface OnChangePluginProps {
  onChange?: (content: string) => void
  contentFormat?: 'html' | 'markdown'
}

export function OnChangePlugin({ onChange, contentFormat = 'html' }: OnChangePluginProps) {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    if (!onChange) return

    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        if (contentFormat === 'markdown') {
          const markdown = $convertToMarkdownString(MARKDOWN_TRANSFORMERS)
          onChange(markdown)
        } else {
          const html = $generateHtmlFromNodes(editor)
          onChange(html)
        }
      })
    })
  }, [editor, onChange, contentFormat])

  return null
}

export interface RefPluginProps {
  editorRef?: React.Ref<LexicalEditor>
}

export function RefPlugin({ editorRef }: RefPluginProps) {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    if (!editorRef) return

    if (typeof editorRef === 'function') {
      editorRef(editor)
    } else if (editorRef && 'current' in editorRef) {
      ;(editorRef as React.MutableRefObject<LexicalEditor>).current = editor
    }
  }, [editor, editorRef])

  return null
}

export interface InitialContentPluginProps {
  content?: string
  contentFormat?: 'html' | 'markdown'
}

export function InitialContentPlugin({
  content,
  contentFormat = 'html',
}: InitialContentPluginProps) {
  const [editor] = useLexicalComposerContext()
  const isInitialized = useRef(false)

  useEffect(() => {
    if (!content || isInitialized.current) return

    isInitialized.current = true
    editor.update(() => {
      if (contentFormat === 'markdown') {
        $convertFromMarkdownString(content, MARKDOWN_TRANSFORMERS)
      } else {
        const parser = new DOMParser()
        const dom = parser.parseFromString(content, 'text/html')
        const nodes = $generateNodesFromDOM(editor, dom)
        $getRoot()
          .clear()
          .append(...nodes)
      }
    })
  }, [content, contentFormat, editor])

  return null
}

export interface MarkdownShortcutsPluginProps {
  enabled?: boolean
}

export function MarkdownShortcutsPlugin({ enabled = false }: MarkdownShortcutsPluginProps) {
  if (!enabled) return null

  return <LexicalMarkdownShortcutPlugin transformers={MARKDOWN_TRANSFORMERS} />
}

export function ImagePlugin() {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    return editor.registerCommand<ImagePayload>(
      INSERT_IMAGE_COMMAND,
      (payload) => {
        const imageNode = $createImageNode(payload)
        const selection = $getSelection()
        if ($isRangeSelection(selection)) {
          selection.insertNodes([imageNode])
        }
        return true
      },
      COMMAND_PRIORITY_EDITOR,
    )
  }, [editor])

  return null
}
