import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/shivagroup/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        projectDetails: resolve(__dirname, 'project-details.html'),
        notFound: resolve(__dirname, '404.html'),
        error: resolve(__dirname, 'error.html')
      }
    }
  }
});
