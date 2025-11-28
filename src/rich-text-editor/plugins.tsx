import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import type { LexicalEditor } from 'lexical'
import { $getRoot } from 'lexical'
import { useEffect, useRef } from 'react'

export interface OnChangePluginProps {
  onChange?: (html: string) => void
}

export function OnChangePlugin({ onChange }: OnChangePluginProps) {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    if (!onChange) return

    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const html = $generateHtmlFromNodes(editor)
        onChange(html)
      })
    })
  }, [editor, onChange])

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
}

export function InitialContentPlugin({ content }: InitialContentPluginProps) {
  const [editor] = useLexicalComposerContext()
  const isInitialized = useRef(false)

  useEffect(() => {
    if (!content || isInitialized.current) return

    isInitialized.current = true
    editor.update(() => {
      const parser = new DOMParser()
      const dom = parser.parseFromString(content, 'text/html')
      const nodes = $generateNodesFromDOM(editor, dom)
      $getRoot()
        .clear()
        .append(...nodes)
    })
  }, [content, editor])

  return null
}
