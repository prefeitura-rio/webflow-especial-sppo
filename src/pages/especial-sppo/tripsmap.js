import React, { useState, useEffect } from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import DeckGL from "@deck.gl/react";
import { TripsLayer } from "@deck.gl/geo-layers";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// Source data CSV: https://jupyter.dados.rio/lab/tree/dataviz/dataviz-subsidio
const TRIPS = require("./trips.json");

// Mapbox configs
const MAP_STYLE = "mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b";
const MAPBOX_API_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";

// animation configs
const ANIMATION_SPEED = 5;
const LOOP_LENGTH = 10800;
const TRAIL_LENGTH = 600;

//initial map position
const INITIAL_VIEW_STATE = {
  longitude: -43.59276,
  latitude: -22.9347,
  zoom: 10.7,
  pitch: 10.59,
  bearing: -0.31,
};

export default function TripsMap() {
  const [time, setTime] = useState(0);
  const [animation] = useState({});

  useEffect(() => {
    const animate = () => {
      setTime((t) => (t + ANIMATION_SPEED) % LOOP_LENGTH);
      animation.id = window.requestAnimationFrame(animate);
    };
    animation.id = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animation.id);
  }, [animation]);

  const layers = [
    new TripsLayer({
      id: "trips",
      data: TRIPS,
      getPath: (d) => d.path,
      getTimestamps: (d) => d.timestamps,
      getColor: [50, 137, 169],
      widthMinPixels: 5,
      fadeTrail: true,
      currentTime: time,
      opacity: 0.6,
      rounded: true,
      trailLength: TRAIL_LENGTH,
      shadowEnabled: false,
    }),
  ];

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={false} layers={layers}>
      <Map mapStyle={MAP_STYLE} mapboxAccessToken={MAPBOX_API_TOKEN} />
    </DeckGL>
  );
}