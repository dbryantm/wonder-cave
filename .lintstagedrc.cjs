module.exports = {
  '*.{ts,tsx}': 'bun run lint:code',
  '*.css': 'bun run lint:style',
  '*.{css,html,json,md,mdx,ts,tsx}': 'bun run lint:format',
}
