import styled from "styled-components";
import * as styles from "./chapters.style";

// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

// IMAGENS
import logo1 from "../images/logo1.png";
import riodaspedras from "../images/riodaspedras.png";
import muzema from "../images/muzema.png";
import salgueiro from "../images/salgueiro.png";
import capa from "../images/capa.gif";

// TODO: REMOVE
import LineChart from "../../../components/charts/line_chart";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Logo = styled.img`
  width: 150px;
  // background-color: #01baef;
  margin-bottom: auto;
  margin-top: 2%;
  grid-area: logo;
`;

export const NewsImage = styled.img`
  width: 100%;
  // background-color: #01baef;
  margin-bottom: auto;
  margin-top: 2%;
  grid-area: logo;
  margin-bottom: 30px;
`;

export const Capa = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 80%;

  color: #1a374d;
  // background-color: #01baef;
  font-family: "Poppins", serif;
  font-weight: 700;
  font-size: 5rem;
  line-height: 1;
  text-align: right;
  grid-area: titulo;
`;

const AuthorText = styled.div`
  width: 80%;
  color: #1a374d;
  // background-color: #01baef;
  font-family: "Poppins", serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: auto;
  margin-top: 30px;
  text-align: right;
  grid-area: subtitulo;
`;

const IntroTitle = styled.div`
  grid-area: titulo;
  color: #ffffff;
  font-family: "Redaction", sans-serif;
  font-weight: 700;
  font-size: 2.7rem;
  line-height: 1;
  text-align: right;
  opacity: 1;
  align-self: end;
`;

const BigNumber = styled.div`
  color: #6998ab;
  font-family: "Redaction", sans-serif;
  font-weight: 700;
  font-size: 8rem;
  line-height: 1;
  /* text-align: right; */
  opacity: 1;
  /* align-self: end; */
`;

const BigNumber1 = styled.div`
  color: #6998ab;
  font-family: "Redaction", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  /* line-height: 1; */
  /* text-align: right; */
  opacity: 1;
  /* align-self: end; */
`;

const IntroText = styled.div`
  grid-area: texto;
  text-align: right;
  margin-bottom: 30%;
  vertical-align: middle;
  color: #ffffff;
  font-family: "Redaction", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  opacity: 1;
`;

const TextOrange = styled.div`
  background: #c36a2d;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;

const TextBlue = styled.div`
  background: #1a374d;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;

const ContainerCard = styled.div`
  min-width: 250px;
  margin: auto;
  width: 40%;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 1;
  border-radius: 0px;
  backdrop-filter: blur(4px);
`;

const ContainerCard1 = styled.div`
  min-width: 250px;
  margin: auto 200px auto auto;
  width: 25%;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 1;
  border-radius: 0px;
  backdrop-filter: blur(4px);
`;

const TextCard = styled.div`
  color: #dbdbdb;
  font-family: "Redaction", sans-serif;
  font-size: 1.2rem;
  line-height: 1.4;
  text-align: left;
`;

const TextCard1 = styled.div`
  color: #dbdbdb;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`;

const NewsTitle = styled.div`
  color: #ffffff;
  font-family: "Redaction", sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 1;
  margin-bottom: 15px;
  /* text-align: right;
  opacity: 1;
  align-self: end; */
`;

const Grid = styled.div`
  display: flex;
  gap: 0px 30px;
`;

const Grid1 = styled.div`
  display: grid;
  grid-template-rows: 100px 100px;
  gap: 20px 0px;
`;

const GifCapa = styled.div`
  width: 100%;
  height: 100%;
`;

export function One(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterOneDiv id={props.id} ref={props.ref}>
      <Logo src={logo1}></Logo>
      <Title>
        1000 <br /> DEMO <br />
        LIÇÕES
      </Title>
      <AuthorText>
        {/* <DWChart title="Map" src="//datawrapper.dwcdn.net/AYB0f/" /> */}
        Desenvolvido por <br />
        <a
          style={{ fontSize: "1rem", fontWeight: "700", color: "#1A374D" }}
          href="https://www.dados.rio/"
          target="_blank"
          rel="noreferrer"
        >
          Escritório de Dados
        </a>{" "}
        <br />
        <a
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            color: "#1A374D",
          }}
          href="http://www.rio.rj.gov.br/web/seop"
          target="_blank"
          rel="noreferrer"
        >
          Secretaria Municipal de Ordem Pública
        </a>
      </AuthorText>
    </styles.ChapterOneDiv>
  );
}

export function Two(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterTwoDiv id={props.id}>
      <IntroTitle id={"intro"}>Introdução</IntroTitle>
      <IntroText>
        Os cariocas sabem bem quais os problemas enfrentados todos os dias no
        transporte público da cidade do Rio de Janeiro. E é preciso reconhecer
        que o sistema por ônibus está ruim e precisa de ajuda. <br />
        <br />
        Uma série de fatores levou a este colapso, o que só resultou no
        sofrimento da população que depende do transporte público da cidade para
        se locomover. Por isso,{" "}
        <TextBlue>
          a Prefeitura vai regularizar as linhas operantes,
        </TextBlue>{" "}
        <TextBlue>retomar as inoperantes</TextBlue> e{" "}
        <TextBlue>implementar serviços noturnos.</TextBlue>
      </IntroText>
    </styles.ChapterTwoDiv>
  );
}

export function Three(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard>
        <TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an <TextBlue>unknown printer</TextBlue> took a
          galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </TextCard>
      </ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Four(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard>
        <Grid>
          <Grid1>
            <BigNumber id="numbers">0</BigNumber>
            <BigNumber1>milhões</BigNumber1>
          </Grid1>
          <TextCard>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an <TextBlue>unknown printer</TextBlue>{" "}
            took a galley of type and scrambled it to make a type specimen book.
          </TextCard>
        </Grid>
      </ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Five(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard>
        {/* <iframe
          title="1000 demolições desde o início da gestão"
          aria-label="Gráfico de coluna"
          id="datawrapper-chart-RNXfM"
          src="https://datawrapper.dwcdn.net/RNXfM/1/"
          scrolling="no"
          frameborder="0"
          style="width: 0; min-width: 100% !important; border: none;"
          height="416"
        ></iframe> */}
        {/* <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script> */}
        <TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an <TextBlue>unknown printer</TextBlue> took a
          galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </TextCard>
      </ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Six(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterTwoDiv id={props.id}>
      <IntroTitle id={"intro"}>Exemplos</IntroTitle>
      <IntroText>
        Os cariocas sabem bem quais os problemas enfrentados todos os dias no
        transporte público da cidade do Rio de Janeiro. E é preciso reconhecer
        que o sistema por ônibus está ruim e precisa de ajuda. <br />
        <br />
        Uma série de fatores levou a este colapso, o que só resultou no
        sofrimento da população que depende do transporte público da cidade para
        se locomover. Por isso,{" "}
        <TextBlue>
          a Prefeitura vai regularizar as linhas operantes,
        </TextBlue>{" "}
        <TextBlue>retomar as inoperantes</TextBlue> e{" "}
        <TextBlue>implementar serviços noturnos.</TextBlue>
      </IntroText>
    </styles.ChapterTwoDiv>
  );
}

export function Seven(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard>
        <TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an <TextBlue>unknown printer</TextBlue> took a
          galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </TextCard>
      </ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Eight(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard1>
        <NewsImage src={riodaspedras}></NewsImage>
        <NewsTitle>
          <a
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#ffffff",
            }}
            href="https://veja.abril.com.br/brasil/predio-desaba-em-comunidade-dominada-por-milicianos-no-rio-de-janeiro/"
            target="_blank"
            rel="noreferrer"
          >
            Prédio desaba em comunidade dominada por milicianos no Rio de
            Janeiro
          </a>
        </NewsTitle>
        <TextCard1>
          Criança e pai foram localizados mortos sob escombros após nove horas
          de buscas em Rio das Pedras, na Zona Oeste; quatro adultos foram
          resgatados.
        </TextCard1>
      </ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Nine(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard1>
        <NewsImage src={muzema}></NewsImage>
        <NewsTitle>
          <a
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#ffffff",
            }}
            href="https://g1.globo.com/rj/rio-de-janeiro/noticia/2019/04/22/morre-a-24a-vitima-do-desabamento-na-muzema.ghtml"
            target="_blank"
            rel="noreferrer"
          >
            Morre a 24ª vítima do desabamento na Muzema
          </a>
        </NewsTitle>
        <TextCard1>
          Adilma Rodrigues, de 35 anos, era casada com o pastor Cláudio,
          primeira vítima da queda dos prédios. Os dois prédios que caíram dia
          12 após fortes chuvas eram irregulares.
        </TextCard1>
      </ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Ten(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard1>
        <NewsImage src={salgueiro}></NewsImage>
        <NewsTitle>
          <a
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#ffffff",
            }}
            href="https://www1.folha.uol.com.br/cotidiano/2021/11/predio-de-4-andares-desaba-no-rio-e-deixa-um-morto-e-tres-feridos.shtml"
            target="_blank"
            rel="noreferrer"
          >
            Prédio de 4 andares desaba no Rio e deixa um morto e três feridos
          </a>
        </NewsTitle>
        <TextCard1>
          Um prédio de quatro andares desabou no Morro do Salgueiro, na zona
          norte do Rio de Janeiro, nesta quarta-feira (17) e deixou um morto e
          três feridos, de acordo com o Corpo de Bombeiros
        </TextCard1>
      </ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Eleven(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterTwoDiv id={props.id}>
      <IntroTitle id={"intro"}>Fim</IntroTitle>
      <IntroText>
        Os cariocas sabem bem quais os problemas enfrentados todos os dias no
        transporte público da cidade do Rio de Janeiro. E é preciso reconhecer
        que o sistema por ônibus está ruim e precisa de ajuda. <br />
        <br />
        Uma série de fatores levou a este colapso, o que só resultou no
        sofrimento da população que depende do transporte público da cidade para
        se locomover. Por isso,{" "}
        <TextBlue>
          a Prefeitura vai regularizar as linhas operantes,
        </TextBlue>{" "}
        <TextBlue>retomar as inoperantes</TextBlue> e{" "}
        <TextBlue>implementar serviços noturnos.</TextBlue>
      </IntroText>
    </styles.ChapterTwoDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
