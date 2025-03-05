import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const envsName = [
  "VITE_APP_EMAIL",
  "VITE_APP_TEMPLATE",
  "VITE_APP_SERVICE",
];


// https://vite.dev/config/
export default defineConfig(({mode}) =>{

  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  envsName.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
  }
})
