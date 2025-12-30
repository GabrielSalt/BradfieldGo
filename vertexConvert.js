// convertVertices.js
import * as vertexobj from "./static/oldVertices.js";

const original = vertexobj.vertices;

const nameToId = {};
const idToName = {};

let nextId = 0;
for (const name of Object.keys(original)) {
  nameToId[name] = nextId;
  idToName[nextId] = name;
  nextId++;
}

const vertices = {};

for (const [name, data] of Object.entries(original)) {
  const id = nameToId[name];

  vertices[id] = {
    name: data.name,
    point: data.point,
    category: data.category,
    place: data.place,
    connections: data.connections.map(c => nameToId[c])
  };
}

const slice = Object.fromEntries(
  Object.entries(vertices).slice(0, 28)
);

console.log(JSON.stringify(slice, null, 2));
