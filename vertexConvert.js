// convertVertices.js
const fs = require('fs');
const {vertices} = require('./static/oldVertices.js');

const original = vertices;

const nameToId = {};
const idToName = {};

let nextId = 0;
for (const name of Object.keys(original)) {
  nameToId[name] = nextId;
  idToName[nextId] = name;
  nextId++;
}

const newVertices = {};

for (const [name, data] of Object.entries(original)) {
  const id = nameToId[name];

  newVertices[id] = {
    name: data.name,
    point: data.point,
    category: data.category,
    place: data.place,
    connections: data.connections.map(c => nameToId[c])
  };
}

const verticesOutput = `export const vertices = ${JSON.stringify(newVertices, null, 2)};\n`;
fs.writeFileSync('./static/vertices.js', verticesOutput, 'utf8');

console.log('vertices.js has been generated!');
