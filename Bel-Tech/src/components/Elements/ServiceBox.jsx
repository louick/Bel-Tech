import React from "react";
import styled from "styled-components";

export default function ServiceBox({ img, title, subtitle }) {
  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>
        <img src={img} alt={title} />
      </IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: center; /* Adicionado para centralizar o conteúdo */
`;

const IconStyle = styled.div`
  margin: 0 auto; /* Centraliza o ícone */
  img {
    width: 50px; /* Ajuste conforme necessário */
    height: 50px; /* Ajuste conforme necessário */
  }
`;

const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;

const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
