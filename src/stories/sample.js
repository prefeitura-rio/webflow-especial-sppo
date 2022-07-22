import { Fragment } from "react";
import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { Tween } from "react-gsap";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import styled from "styled-components";

import ScrollMapboxGL from "../components/engine/scroll-mapbox-gl";
import busao from "../pages/especial-sppo/scroll-sppo/school-bus.png";

gsap.registerPlugin(TextPlugin);

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";
const MAP_STYLE = "mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b";
const INTERACTIVE = false;
const windowWidth = window.innerWidth;

const MAP_CSS = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  zIndex: "-1",
};

const DivChapterOne = styled.div`
  margin-top: 50vh;
  height: 1200px;
  width: 100%;
  background: #232323;
  // display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;

  font-weight: 700;
  font-size: 1.4rem;
  color: #ffffff;
`;

const Block = styled.div`
  width: 50px;
  height: 50px;
  justify-content: center;
  background: #ffffff;
  border-radius: 10px;
  display: inline-block;
  margin: 5px;
`;

const getTweenBlock = (position) => {
  return (
    <Tween
      from={{ y: 0, opacity: 0 }}
      to={{ opacity: 1 }}
      position={position}
      duration={0.1}
    >
      <Block />
    </Tween>
  );
};

const StyledText = styled.h1`
  // display: inline-block;
  justify-content: center;
  font-family: Poppins;
  font-weight: 700;
  font-size: 1.4rem;
  font-style: "normal;
  color: #FFFFFF;
`;

console.log("from sample.js", DivChapterOne);

const story = {
  chapters: [
    {
      id: "chapter-1",
      chapterType: "scrollmagic",
      text: "",
      sectionDuration: 500,
      sectionOffset: 200,
      sectionPin: true,
      sectionReverse: false,
      chapterDiv: DivChapterOne,
      animation: {
        targets: [<StyledText>1 minuto</StyledText>],
        tweens: [
          getTweenBlock(0),
          <Tween
            ease={"power4.out"}
            from={{ opacity: 0, y: 200 }}
            to={{ opacity: 1, y: 200 }}
            duration={2.5}
            target={0}
            position={0}
          ></Tween>,
        ].concat([
          // 5 minutes
          // getTweenBlock(0.1),
          // getTweenBlock(0.1),
          // getTweenBlock(0.1),
          // getTweenBlock(0.1),
          // <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} position={0.1}>
          //   <StyledText>5 minutos</StyledText>
          // </Tween>,
        ]),
      },

      //
      map: {
        desktop: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 9,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
        mobile: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 9,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
      },
    },
  ],
};

export default function StorySample() {
  return (
    <ScrollMapboxGL
      interactive={INTERACTIVE}
      indicators={true}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle={MAP_STYLE}
      mapCSS={MAP_CSS}
      scrollZoom={false}
      story={story}
    />
  );
}
