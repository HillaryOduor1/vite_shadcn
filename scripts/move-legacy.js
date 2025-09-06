// scripts/move-legacy.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const legacyDir = path.resolve(__dirname, "../dist-legacy");
const targetDir = path.resolve(__dirname, "../dist/legacy");

// Ensure target exists
fs.rmSync(targetDir, { recursive: true, force: true });
fs.mkdirSync(targetDir, { recursive: true });

// Copy files
fs.cpSync(legacyDir, targetDir, { recursive: true });

console.log("✅ Legacy build moved into dist/legacy");
