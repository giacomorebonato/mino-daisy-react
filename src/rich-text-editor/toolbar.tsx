import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link'
import {
  $isListNode,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListNode,
} from '@lexical/list'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $createHeadingNode, $isHeadingNode, type HeadingTagType } from '@lexical/rich-text'
import { $setBlocksType } from '@lexical/selection'
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils'
import { clsx } from 'clsx'
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import { Divider } from '../divider'
import { Dropdown } from '../dropdown'
import { Select } from '../select'
import {
  BoldIcon,
  BulletListIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  NumberedListIcon,
  UnderlineIcon,
} from './icons'
import { INSERT_IMAGE_COMMAND } from './plugins'

export interface ToolbarProps {
  className?: string
}

const blockTypeToBlockName = {
  paragraph: 'Normal',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
  bullet: 'Bullet List',
  number: 'Numbered List',
}

export function Toolbar({ className }: ToolbarProps) {
  const [editor] = useLexicalComposerContext()
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isLink, setIsLink] = useState(false)
  const [blockType, setBlockType] = useState<keyof typeof blockTypeToBlockName>('paragraph')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const updateToolbar = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat('bold'))
      setIsItalic(selection.hasFormat('italic'))
      setIsUnderline(selection.hasFormat('underline'))

      // Update link
      const node = selection.anchor.getNode()
      const parent = node.getParent()
      setIsLink($isLinkNode(parent) || $isLinkNode(node))

      // Update block type
      const anchorNode = selection.anchor.getNode()
      const element =
        anchorNode.getKey() === 'root' ? anchorNode : anchorNode.getTopLevelElementOrThrow()

      const elementKey = element.getKey()
      const elementDOM = editor.getElementByKey(elementKey)

      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode)
          const type = parentList ? parentList.getTag() : element.getTag()
          setBlockType(type === 'ol' ? 'number' : 'bullet')
        } else {
          const type = $isHeadingNode(element) ? element.getTag() : element.getType()
          setBlockType(type as keyof typeof blockTypeToBlockName)
        }
      }
    }
  }, [editor])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar()
        })
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar()
          return false
        },
        1,
      ),
    )
  }, [editor, updateToolbar])

  const formatText = useCallback(
    (format: 'bold' | 'italic' | 'underline') => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, format)
    },
    [editor],
  )

  const formatHeading = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value as keyof typeof blockTypeToBlockName

      if (blockType !== value) {
        editor.update(() => {
          const selection = $getSelection()
          if ($isRangeSelection(selection)) {
            if (value === 'paragraph') {
              $setBlocksType(selection, () => $createParagraphNode())
            } else if (value.startsWith('h')) {
              $setBlocksType(selection, () => $createHeadingNode(value as HeadingTagType))
            }
          }
        })
      }
    },
    [editor, blockType],
  )

  const insertLink = useCallback(() => {
    if (!isLink) {
      const url = prompt('Enter URL:')
      if (url) {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, url)
      }
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)
    }
  }, [editor, isLink])

  const insertImageFromUrl = useCallback(() => {
    const url = prompt('Enter image URL:')
    if (url) {
      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
        src: url,
        alt: 'Image',
      })
    }
  }, [editor])

  const insertImageFromFile = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const resizeImage = useCallback((file: File, maxWidth: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          // Calculate new dimensions
          let width = img.width
          let height = img.height

          if (width > maxWidth) {
            height = (height * maxWidth) / width
            width = maxWidth
          }

          // Create canvas and resize
          const canvas = document.createElement('canvas')
          canvas.width = width
          canvas.height = height

          const ctx = canvas.getContext('2d')
          if (!ctx) {
            reject(new Error('Could not get canvas context'))
            return
          }

          ctx.drawImage(img, 0, 0, width, height)

          // Convert to data URL with quality setting
          const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.9)
          resolve(resizedDataUrl)
        }
        img.onerror = () => reject(new Error('Failed to load image'))
        img.src = e.target?.result as string
      }
      reader.onerror = () => reject(new Error('Failed to read file'))
      reader.readAsDataURL(file)
    })
  }, [])

  const handleFileUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return

      try {
        const resizedDataUrl = await resizeImage(file, 800)
        editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
          src: resizedDataUrl,
          alt: file.name,
        })
      } catch (error) {
        console.error('Error resizing image:', error)
        // Fallback to original if resize fails
        const reader = new FileReader()
        reader.onload = (event) => {
          const dataUrl = event.target?.result as string
          if (dataUrl) {
            editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
              src: dataUrl,
              alt: file.name,
            })
          }
        }
        reader.readAsDataURL(file)
      } finally {
        // Reset input
        e.target.value = ''
      }
    },
    [editor, resizeImage],
  )

  return (
    <>
      <div className={clsx('flex gap-2 p-2 border-b border-base-300 flex-wrap', className)}>
        {/* Text formatting group */}
        <div className="join">
          <Button
            type="button"
            className={clsx('join-item btn-sm btn-ghost', { 'btn-active': isBold })}
            onClick={() => formatText('bold')}
            title="Bold (Ctrl+B)"
          >
            <BoldIcon />
          </Button>
          <Button
            type="button"
            className={clsx('join-item btn-sm btn-ghost', { 'btn-active': isItalic })}
            onClick={() => formatText('italic')}
            title="Italic (Ctrl+I)"
          >
            <ItalicIcon />
          </Button>
          <Button
            type="button"
            className={clsx('join-item btn-sm btn-ghost', { 'btn-active': isUnderline })}
            onClick={() => formatText('underline')}
            title="Underline (Ctrl+U)"
          >
            <UnderlineIcon />
          </Button>
        </div>

        <Divider className="divider-horizontal mx-0" />

        {/* Heading selector */}
        <Select
          className="join-item select-sm select-bordered w-32"
          value={blockType}
          onChange={formatHeading}
        >
          <option value="paragraph">Normal</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="h5">Heading 5</option>
          <option value="h6">Heading 6</option>
        </Select>

        <Divider className="divider-horizontal mx-0" />

        {/* List group */}
        <div className="join">
          <Button
            type="button"
            className={clsx('join-item btn-sm btn-ghost', {
              'btn-active': blockType === 'bullet',
            })}
            onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)}
            title="Bullet List"
          >
            <BulletListIcon />
          </Button>
          <Button
            type="button"
            className={clsx('join-item btn-sm btn-ghost', {
              'btn-active': blockType === 'number',
            })}
            onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)}
            title="Numbered List"
          >
            <NumberedListIcon />
          </Button>
        </div>

        <Divider className="divider-horizontal mx-0" />

        {/* Link/Image group */}
        <div className="join">
          <Button
            type="button"
            className={clsx('join-item btn-sm btn-ghost', { 'btn-active': isLink })}
            onClick={insertLink}
            title="Insert Link"
          >
            <LinkIcon />
          </Button>
          <Dropdown
            className="join-item [&>summary]:list-none [&>summary::-webkit-details-marker]:hidden"
            trigger={
              <div className="btn btn-sm btn-ghost" title="Insert Image">
                <ImageIcon />
              </div>
            }
            content={
              <ul className="menu bg-base-200 rounded-box z-10 w-48 p-2 shadow">
                <li>
                  <button type="button" onClick={insertImageFromUrl}>
                    Insert from URL
                  </button>
                </li>
                <li>
                  <button type="button" onClick={insertImageFromFile}>
                    Upload File
                  </button>
                </li>
              </ul>
            }
          />
        </div>
      </div>

      {/* Hidden file input for image upload */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileUpload}
      />
    </>
  )
}
