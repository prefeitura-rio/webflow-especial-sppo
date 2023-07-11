// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";
import { Controller, Scene } from "react-scrollmagic";

// Chapters
import * as chapterDiv from "./components/chapters";

// Scroll and animation  stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Enchentes() {
  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);

  useEffect(() => {
    gsap.defaults({ ease: "none" });
    ScrollTrigger.defaults({
      start: "top center",
      end: "bottom center",
      markers: true,
      scrub: true,
      toggleActions: "play reverse play reverse",
    });

    ScrollTrigger.create({
      trigger: "#quadro_um",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video");
        let frameNumber = Math.floor(self.progress * 121) + 1;
        if (frameNumber > 121) {
          frameNumber = 121;
        }
        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/${frameNumber}.jpg`;
        video.src = imageUrl;
      },
    });

    const tl_parte_um = gsap.timeline();
    tl_parte_um
      .set("#quadro_video", { opacity: 1 })
      .to("#quadro_video", { opacity: 1, duration: 49 })
      .to("#quadro_video", { opacity: 0, duration: 1 })
      .to("#quadro_video", { opacity: 0, duration: 50 });

    ScrollTrigger.create({
      animation: tl_parte_um,
      trigger: "#parte_um",
    });

    const tl_animation_um = gsap.timeline();
    tl_animation_um
      .set("#animacao_image_1", { opacity: 1 })
      .to("#animacao_image_2", { opacity: 1, duration: 13 })
      .to("#animacao_image_2", { opacity: 1, duration: 1 })
      .to("#animacao_image_21", { opacity: 1, duration: 13 })
      .to("#animacao_image_21", { opacity: 0, duration: 1 })
      .to("#animacao_image_3", { opacity: 1, duration: 13 })
      .to("#animacao_image_3", { opacity: 1, duration: 1 })
      .to("#animacao_image_31", { opacity: 1, duration: 13 })
      .to("#animacao_image_31", { opacity: 0, duration: 1 })
      .to("#animacao_image_4", { opacity: 1, duration: 13 })
      .to("#animacao_image_4", { opacity: 1, duration: 1 })
      .to("#animacao_image_41", { opacity: 1, duration: 13 })
      .to("#animacao_image_41", { opacity: 1, duration: 1 })
      .to("#test_animation", { opacity: 0, duration: 13 });

    // .to("#animacao_image_4", { opacity: 0, duration: 25 });

    ScrollTrigger.create({
      animation: tl_animation_um,
      start: "-=300",
      trigger: "#animation_um",
      pin: "#test_animation",
    });
  }, []);

  return (
    <>
      <div className="fixed -z-[100] flex flex-col items-center justify-center h-[100vh] w-[100vw]  bg-[#fbfaef]">
        <img
          id={"quadro_video"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/1.jpg"
          }
          className="object-cover w-full h-screen "
        ></img>
      </div>
      <chapterDiv.Capa id={"capa"} />
      <chapterDiv.ContextoHistorico id={"contexto_historico"} />
      <div className="h-[95vh] w-full bg-transparent"></div>
      <chapterDiv.QuadroUm id={"quadro_um"} />
      <chapterDiv.ParteUm id={"parte_um"} />
      <chapterDiv.CepImages id={"animation_um"} />
      <chapterDiv.ParteDois id={"parte_dois"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
