import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { content } from './src/content'

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]!)

export default defineConfig({
  // Relative assets work on both username.github.io and repository project pages.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'capability-brief-metadata',
      transformIndexHtml: (html) => html
        .replace('%BRIEF_TITLE%', () => escapeHtml(content.metadata.title))
        .replace('%BRIEF_DESCRIPTION%', () => escapeHtml(content.metadata.description)),
    },
  ],
})
