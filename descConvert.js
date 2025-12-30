import fs from "fs";

import {edges} from "./static/oldEdges.js";
import {vertices} from "./static/vertices.js";

const descriptions = {};
for (const [key, edge] of Object.entries(edges)) {
  if (edge.description && edge.description.length) {

    // Get edge ID in new system
    const from = Object.entries(vertices).find(([id, v]) => v.name === edge.start)[0];
    const to   = Object.entries(vertices).find(([id, v]) => v.name === edge.end)[0];

    descriptions[`${from}-${to}`] = edge.description;
  }
}

const output = `export const edgeDescriptions = ${JSON.stringify(descriptions, null, 2)};\n`;

fs.writeFileSync('./descriptions.js', output, 'utf8');
console.log('descriptions.js has been generated!');
