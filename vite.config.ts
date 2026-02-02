import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Necessário para Docker
    strictPort: true,
    port: 3000,
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: process.env.VITE_API_TARGET || 'http://localhost:3001',
        changeOrigin: true,
      },
      '/uploads': {
        target: process.env.VITE_API_TARGET || 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  },
  build: {
    target: 'esnext', // Gera código mais moderno e leve
    minify: 'esbuild', // Minificação mais rápida e eficiente
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa bibliotecas principais do React
          vendor: ['react', 'react-dom', 'lucide-react'],
          // Separa biblioteca de gráficos (pesada)
          charts: ['recharts'],
          // Separa geração de PDF (muito pesada)
          pdf: ['jspdf', 'jspdf-autotable']
        }
      }
    }
  }
});