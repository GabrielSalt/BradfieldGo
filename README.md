# BradfieldGo
🗺 [click here](https://GabrielSalt.github.io/BradfieldGo)

BradfieldGo is a custom navigation web app designed to aid new students to my college at orienting themselves around the large campus, something I had found difficult when I first joined. This project was completed as part of my EPQ Qualification, receiving 50/50 marks.

Features:
- Modular descriptions alongside the map to describe the route step-by-step
- Estimated Time, Distance & Elevation displayed, with the latter two used in conjunction as a heuristic for the A* pathfinding algorithm.
  (The values are calculated using Haversine's Formula between each pair of coordinates for every waypoint)
- Interactive map mode to select start, end (& optionally middle) points on the map
- Wheelchair option to exclude non-accessible routes with staircases
