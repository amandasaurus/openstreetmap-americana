var layerMotorwayLink = {
  id: "road_motorway_link",
  type: "line",
  paint: {
    "line-color": colorMotorway,
    "line-width": {
      base: 1.2,
      stops: [
        [12.5, 0],
        [13, 1.5],
        [14, 2.5],
        [20, 11.5],
      ],
    },
  },
  filter: [
    "all",
    ["!in", "brunnel", "bridge", "tunnel"],
    ["==", "class", "motorway"],
    ["==", "ramp", 1],
  ],
  minzoom: 12,
  layout: layoutRoad,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerMotorway = {
  id: "road_motorway",
  type: "line",
  paint: {
    "line-color": colorMotorway,
    "line-width": {
      base: 1.2,
      stops: [
        [4, 0],
        [7, 1],
        [20, 18],
      ],
    },
  },
  filter: [
    "all",
    ["!in", "brunnel", "bridge", "tunnel"],
    ["==", "class", "motorway"],
    ["!=", "ramp", 1],
  ],
  layout: layoutRoad,
  source: "openmaptiles",
  minzoom: 5,
  metadata: {},
  "source-layer": "transportation",
};

var layerMotorwayLabel = {
  id: "road_label",
  type: "symbol",
  paint: {
    "text-color": "#333",
    "text-halo-color": "#fff",
    "text-halo-blur": 0.5,
    "text-halo-width": 1,
  },
  filter: ["all", ["==", "class", "motorway"]],
  layout: {
    "text-font": ["Metropolis Light"],
    "text-size": 20,
    "text-field": [
      "format",
      ["image", ["concat", "shield_", ["get", "route_1"]]],
      " ",
      ["image", ["concat", "shield_", ["get", "route_2"]]],
      " ",
      ["image", ["concat", "shield_", ["get", "route_3"]]],
      " ",
      ["image", ["concat", "shield_", ["get", "route_4"]]],
      " ",
      ["image", ["concat", "shield_", ["get", "route_5"]]],
      " ",
      ["image", ["concat", "shield_", ["get", "route_6"]]],
      " ",
    ],
    "text-anchor": "center",
    //    "text-rotation-alignment": "viewport",
    //    "text-offset": [0, 0],
    "symbol-placement": "line",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation_name",
};
