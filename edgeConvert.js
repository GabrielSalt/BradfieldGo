// buildEdges.js
const fs = require('fs');
const { vertices } = require('./static/vertices.js');
const { edges } = require('./static/oldEdges.js');

const nameToId = {};
for (const [id, v] of Object.entries(vertices)) {
  nameToId[v.name] = Number(id);
}

const newEdges = {};
const edgeDescriptions = {};

for (const edge of Object.values(edges)) {
  const fromId = nameToId[edge.start];
  const toId   = nameToId[edge.end];

  if (fromId === undefined || toId === undefined) {
    console.warn("Missing vertex for edge:", edge.start, edge.end);
    continue;
  }

  const key = `${fromId}-${toId}`;

  newEdges[key] = {
    from: fromId,
    to: toId,
    points: edge.points,
    length: edge.length,
    elevation: edge.elevation,
    distance: edge.distance,
    time: edge.time,
    wheelchair: edge.wheelchair
  };

  // Add descriptions
  if (edge.description && edge.description.length) {
    edgeDescriptions[key] = edge.description;
  }
}

const edgesOutput = `export const edges = ${JSON.stringify(newEdges, null, 2)};\n`;
fs.writeFileSync('./static/edges.js', edgesOutput, 'utf8');

const descOutput = `export const edgeDescriptions = ${JSON.stringify(edgeDescriptions, null, 2)};\n`;
fs.writeFileSync('./static/descriptions.js', descOutput, 'utf8');

console.log('edgesProcessed.js and descriptions.js have been generated!');
