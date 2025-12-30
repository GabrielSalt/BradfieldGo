import { vertices } from "./static/vertices.js";
import {edges} from "./static/edges.js";

const nameToId = {};

for (const [id, v] of Object.entries(vertices)) {
  nameToId[v.name] = Number(id);
}

const newEdges = {};

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
}

const slice = Object.fromEntries(
  Object.entries(newEdges).slice(140, 150)
);

console.log(JSON.stringify(slice, null, 2));

// console.log(JSON.stringify(newEdges, null, 2));
