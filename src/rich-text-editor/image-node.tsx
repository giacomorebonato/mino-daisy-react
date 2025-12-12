import type {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical'
import { $applyNodeReplacement, DecoratorNode } from 'lexical'
import type { ReactNode } from 'react'

export interface ImagePayload {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  key?: NodeKey
}

export type SerializedImageNode = Spread<
  {
    src: string
    alt?: string
    width?: number | string
    height?: number | string
  },
  SerializedLexicalNode
>

function convertImageElement(domNode: Node): null | DOMConversionOutput {
  if (domNode instanceof HTMLImageElement) {
    const { src, alt, width, height } = domNode
    const node = $createImageNode({ src, alt, width, height })
    return { node }
  }
  return null
}

export class ImageNode extends DecoratorNode<ReactNode> {
  __src: string
  __alt?: string
  __width?: number | string
  __height?: number | string

  static getType(): string {
    return 'image'
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(node.__src, node.__alt, node.__width, node.__height, node.__key)
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    const { src, alt, width, height } = serializedNode
    return $createImageNode({ src, alt, width, height })
  }

  exportJSON(): SerializedImageNode {
    return {
      src: this.__src,
      alt: this.__alt,
      width: this.__width,
      height: this.__height,
      type: 'image',
      version: 1,
    }
  }

  static importDOM(): DOMConversionMap | null {
    return {
      img: () => ({
        conversion: convertImageElement,
        priority: 0,
      }),
    }
  }

  constructor(
    src: string,
    alt?: string,
    width?: number | string,
    height?: number | string,
    key?: NodeKey,
  ) {
    super(key)
    this.__src = src
    this.__alt = alt
    this.__width = width
    this.__height = height
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('img')
    element.setAttribute('src', this.__src)
    if (this.__alt) {
      element.setAttribute('alt', this.__alt)
    }
    if (this.__width) {
      element.setAttribute('width', String(this.__width))
    }
    if (this.__height) {
      element.setAttribute('height', String(this.__height))
    }
    return { element }
  }

  createDOM(config: EditorConfig): HTMLElement {
    const span = document.createElement('span')
    const theme = config.theme
    const className = theme.image
    if (className) {
      span.className = className
    }
    return span
  }

  updateDOM(): false {
    return false
  }

  getSrc(): string {
    return this.__src
  }

  getAlt(): string | undefined {
    return this.__alt
  }

  decorate(): ReactNode {
    return (
      <img
        src={this.__src}
        alt={this.__alt || ''}
        width={this.__width}
        height={this.__height}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    )
  }
}

export function $createImageNode({ src, alt, width, height, key }: ImagePayload): ImageNode {
  return $applyNodeReplacement(new ImageNode(src, alt, width, height, key))
}

export function $isImageNode(node: LexicalNode | null | undefined): node is ImageNode {
  return node instanceof ImageNode
}
