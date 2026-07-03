import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const indexPath = path.join(root, 'index.html');

let html = fs.readFileSync(indexPath, 'utf8');

function extractSection(id) {
  const token = `<section id="${id}"`;
  const start = html.indexOf(token);
  if (start === -1) return null;
  let depth = 0;
  for (let i = start; i < html.length; i++) {
    if (html.startsWith('<section', i)) depth++;
    if (html.startsWith('</section>', i)) {
      depth--;
      if (depth === 0) return html.slice(start, i + 10);
    }
  }
  return null;
}

function removeSection(id) {
  const block = extractSection(id);
  if (!block) return;
  html = html.replace(block, '');
}

const training = extractSection('training');
const project = extractSection('project');
['course-projects', 'strengths', 'training', 'project'].forEach(removeSection);

const acadStart = html.indexOf('<section id="academics"');
let acadEnd = acadStart;
let depth = 0;
for (let i = acadStart; i < html.length; i++) {
  if (html.startsWith('<section', i)) depth++;
  if (html.startsWith('</section>', i)) {
    depth--;
    if (depth === 0) {
      acadEnd = i + 10;
      break;
    }
  }
}

const featured = fs.readFileSync(path.join(root, '_featured_projects.html'), 'utf8');
const contact = fs.readFileSync(path.join(root, '_contact.html'), 'utf8');
const footerIdx = html.indexOf('  <footer class="footer">');

const before = html.slice(0, acadEnd);
const after = html.slice(footerIdx);
const middle = `\n\n${training}\n\n${project}\n\n${featured}\n\n${contact}\n\n`;

fs.writeFileSync(indexPath, before + middle + after);
console.log('Sections reordered.');
