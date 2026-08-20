/**
 * Flatten Lexical rich text JSON into plain text for card previews.
 */
export const lexicalToPlaintext = (lexical: unknown): string => {
  if (!lexical || typeof lexical !== 'object') {
    return ''
  }

  const root = (lexical as { root?: { children?: unknown[] } }).root
  if (!root?.children) {
    return ''
  }

  const parts: string[] = []

  const walk = (nodes: unknown[]) => {
    for (const node of nodes) {
      if (!node || typeof node !== 'object') {
        continue
      }

      const n = node as { children?: unknown[]; text?: string; type?: string }

      if (typeof n.text === 'string' && n.text.length > 0) {
        parts.push(n.text)
      }

      if (Array.isArray(n.children)) {
        walk(n.children)
      }
    }
  }

  walk(root.children)

  return parts.join(' ').replace(/\s+/g, ' ').trim()
}
