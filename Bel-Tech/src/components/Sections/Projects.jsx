import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  const whatsappNumber = "5591985735084";
  const whatsappMessage = "Olá, gostaria de saber mais sobre as soluções de e-commerce da Bel Tech.";

  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nossas Soluções de E-commerce</h1>
            <p className="font13">
              Descubra como nossas plataformas oferecem vantagens únicas para diversos setores.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="E-commerce para Pets"
                text="Descomplicação total com pagamento automatizado e gestão de produtos intuitiva. Acesso fácil a preços justos e uma experiência de compra sem complicações para os amantes de pets."
                action={() => window.location.href = "https://bel-pets-production.up.railway.app/"}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="E-commerce para Restaurantes"
                text="Automatização de processos de pagamento, garantindo transações seguras e rápidas. Oferecemos preços competitivos e uma interface que torna a compra de alimentos online simples e acessível."
                action={() => window.location.href = "https://bel-foods-production.up.railway.app/"}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="E-commerce para Mercados"
                text="Soluções de pagamento automatizado que facilitam o checkout. Garantimos preços justos e uma experiência de compra descomplicada, aumentando a acessibilidade para todos os consumidores."
                action={() => alert("A plataforma de compras ainda não está pronta, mas fique atento para futuras atualizações!")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">Sobre a Bel Tech</h4>
              <h2 className="font40 extraBold">Inovação em E-commerce</h2>
              <p className="font12">
                Na Bel Tech, revolucionamos a experiência de compra online com soluções de e-commerce rápidas, intuitivas e sem complicações. Nossa equipe especializada está dedicada a fornecer plataformas robustas e eficientes, garantindo a satisfação do cliente em cada setor que atendemos.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>

                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton
                    title="Entre em Contato"
                    action={() => window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`}
                    border
                  />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
