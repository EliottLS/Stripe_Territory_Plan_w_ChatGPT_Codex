import {defineConfig} from '@playwright/test';
import {fileURLToPath} from 'node:url';
export default defineConfig({testDir:'./tests',use:{baseURL:'http://127.0.0.1:4174',headless:true,launchOptions:process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}},webServer:{cwd:fileURLToPath(new URL('..',import.meta.url)),command:'npx --no-install vite resonate --host 0.0.0.0 --port 4174 --strictPort',url:'http://127.0.0.1:4174',reuseExistingServer:true},workers:1});
