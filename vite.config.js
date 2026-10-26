import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Use the React plugin so Vite can process the JSX components.
export default defineConfig({
  plugins: [react()],
})
