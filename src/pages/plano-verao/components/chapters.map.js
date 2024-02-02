import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";
import Map, { Source, Layer } from "react-map-gl";
// For some custom layers
import { buildings3d } from "../../../components/layers/buildings3d";
// import LINHAS_ANTIGAS from "./data/linhas_antigas.json";
import { isMobile } from "react-device-detect";

export const Capa = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};

export const Intro = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};

export const Prejuizo = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 0.5,
        layer: { id: "consolidado-cor" },
      },
    ],
  };
};

export const Solucao = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 0.5,
        layer: { id: "consolidado-cor" },
      },
    ],
  };
};

export const Grafico = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 0.5,
        layer: { id: "consolidado-cor" },
      },
    ],
  };
};

export const Seop1 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.30566,
          lat: -22.89716,
        },
        zoom: 17.90,
        pitch: 40.52,
        bearing: 142.28,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.30619,
          lat: -22.89748,
        },
        zoom: 17.90,
        pitch: 40.52,
        bearing: 142.28,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "bairromaravilha",
            type: "line",
            source: "composite",
            "source-layer": "bairromaravilha-ahcqjy",
            paint: {
              "line-width": 15,
              "line-color": "#003b66",
              "line-blur": 5,
              "line-opacity": 0
          }
          },
        },
      }, 
    ],
  };
};

export const Seop2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.20332,
          lat: -22.91198,
        },
        zoom: 18.89,
        pitch: 42,
        bearing: 132.80,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.20346,
          lat: -22.91219,
        },
        zoom: 18.10,
        pitch: 42,
        bearing: 132.80,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "cor",
            type: "fill",
            source: "composite",
            "source-layer": "cor-3eu3fz",
            paint: {
              "fill-color": "#003b66"
          }
          },
        },
      },
    ],
  };
};

export const Seop3 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.4885,
          lat: -23.02842,
        },
        zoom: 14.71,
        pitch: 52.5,
        bearing: -53.6,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.4785,
          lat: -23.02842,
        },
        zoom: 14.71,
        pitch: 52.5,
        bearing: -53.6,
        duration: 4000,
      },
    },
    layers: [
    ],
  };
};

export const Seop4 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.31816,
          lat: -22.99102,
        },
        zoom: 15.77,
        pitch: 59.0,
        bearing: 124.47,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.32128,
          lat: -22.99349,
        },
        zoom: 16.14,
        pitch: 52.5,
        bearing: 127.03,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 1,
        layer: { id: "demolicao-icone" },
      },
    ],
  };
};

export const Acompanhe = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};

export const Oeste = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 0.5,
        layer: {
          ...{
            id: "consolidado-cor",
            type: "circle",
            source: "composite",
            "source-layer": "consolidado1-2cgaz2",
            paint: {
              "circle-radius": [
                "match",
                ["get", "total_demolicoes"],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 16],
                isMobile ? 3 : 7,
                [21, 23, 24, 27, 25, 29, 31, 38, 44, 54, 33],
                isMobile ? 10 : 25,
                isMobile ? 20 : 50,
              ],
              "circle-color": [
                "match",
                ["get", "total_demolicoes"],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 16, 15, 20],
                "#f1d6a5",
                [21, 23, 24, 25, 27, 29, 31, 33, 38, 44, 54],
                "#d5aa5d",
                "#a96e04",
              ],
              "circle-opacity": 0,
            },
          },
        },
      },
    ],
  };
};

export const Exemplo0 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.36509,
          lat: -22.82669,
        },
        zoom: 13.18,
        pitch: 36.75,
        bearing: -8,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.32127,
          lat: -22.9864,
        },
        zoom: 15.85,
        pitch: 41.0,
        bearing: 17.2,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "rioacari1",
            type: "line",
            source: "composite",
            "source-layer": "rioacari111-9ilmw9",
            paint: {
              "line-color": "#06639d",
              "line-width": 10,
              "line-opacity": 0
          }
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: .15,
        layer: {
          ...{
            id: "bairrosrioacari",
            type: "fill",
            source: "composite",
            "source-layer": "bairrosrioacari-bmo9od",
            paint: {
              "fill-color": "#06639d",
              "fill-opacity": 0
          }
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
            id: "static-text",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.346253842506975, -22.806199873225385] // Replace with desired coordinates
                        },
                        properties: {
                            title: "TEXTO 1"
                        }
                    }]
                }
            },
            layout: {
                "text-field": "{title}",
                "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
                "text-size": 30
            },
            paint: {
                "text-color": "#ff0000",
                "text-halo-color": "#ffffff",
                "text-halo-width": 3,  // Adjust the width as needed
                "text-halo-blur": 0
            }
        },
    }
    
    ],
  };
};
export const Exemplo1 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.35420,
          lat: -22.82609,
        },
        zoom: 14.52,
        pitch: 46.50,
        bearing: -72,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.35420,
          lat: -22.82609,
        },
        zoom: 16.52,
        pitch: 46.50,
        bearing: -72,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "rioacari",
            type: "line",
            source: "composite",
            "source-layer": "rioacari-0gg46o",
            paint: {
              "line-width": 15,
              "line-blur": 3,
              "line-color": "#003b66"
          }
          },
        },
      },
    ],
  };
};

export const Exemplo2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.33714,
          lat: -22.87147,
        },
        zoom: 17.25,
        pitch: 36.52,
        bearing: -24.12,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.33620,
          lat: -22.87102,
        },
        zoom: 17.25,
        pitch: 36.52,
        bearing: -24.12,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "madureira",
            type: "fill",
            source: "composite",
            "source-layer": "madureira-dh4t8l",
            paint: {
              "fill-color": "#003b66"
          }
          },
        },
      },
    ],
  };
};

export const Exemplo3 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.33340,
          lat: -22.86250,
        },
        zoom: 14.18,
        pitch: 41.51,
        bearing: -28.37,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.22925,
          lat: -22.93012,
        },
        zoom: 15.72,
        pitch: 45.5,
        bearing: 12.4,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 1,
        layer: { id: "desabamento-icone" },
      },
    ],
  };
};

export const Zoom = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32838,
          lat: -22.98401,
        },
        zoom: 13.6,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.32838,
          lat: -22.98401,
        },
        zoom: 12.6,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
          ...{
            id: "desabamento-icone",
            type: "symbol",
            source: "composite",
            "source-layer": "desabamento1-9gi1wf",
            layout: {
              "icon-image": "hospital",
              "icon-rotate": 45,
              "icon-allow-overlap": true,
              "icon-size": 2,
            },
            paint: {
              "icon-opacity": 0,
            },
          },
        },
      },
    ],
  };
};

export const Mapa = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 0.5,
        layer: { id: "consolidado-cor" },
      },
    ],
  };
};

export const Fim = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};
