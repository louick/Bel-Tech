import React from "react";
import styled from "styled-components";
// Assets
import Icon1 from "../../assets/png/prices/1.png";
import Icon6 from "../../assets/png/prices/6.png";
import Icon12 from "../../assets/png/prices/12.png";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  const handleWhatsAppClick = (message) => {
    window.open(`https://wa.me/5591985735084?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Escolha o Seu Plano</h1>
            <p className="font13">
              Oferecemos planos flexíveis que se adequam às suas necessidades. Todos os planos incluem todas as funcionalidades para garantir o melhor serviço.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon={Icon1}
                price="Plano Mensal"
                title="R$ 199,99"
                text="Economia de 0%"
                offers={[
                  { name: "Gestão de catálogo de produtos", checked: true },
                  { name: "Definição de valor de frete para bairros", checked: true },
                  { name: "Registro de pedidos recebidos", checked: true },
                  { name: "Opção de pagamento em dinheiro na entrega", checked: true },
                ]}
                action={() => handleWhatsAppClick("Estou interessado no Plano Mensal de R$ 199,99")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon={Icon6}
                price="Plano Semestral"
                title="R$ 1.079,94"
                text="Economia de R$ 119,94"
                offers={[
                  { name: "Gestão de catálogo de produtos", checked: true },
                  { name: "Definição de valor de frete para bairros", checked: true },
                  { name: "Registro de pedidos recebidos", checked: true },
                  { name: "Listagem de PIX recebidos", checked: true },
                  { name: "Pagamentos em PIX automatizados pela api da EfiPay", checked: true },
                  { name: "Opção de pagamento em dinheiro na entrega", checked: true },
                  { name: "Suporte prioritário", checked: true },
                  { name: "Relatórios avançados de vendas", checked: true },
                ]}
                action={() => handleWhatsAppClick("Estou interessado no Plano Semestral de R$ 1.079,94")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon={Icon12}
                price="Plano Anual"
                title="R$ 1.919,88"
                text="Economia de R$ 479,88"
                offers={[
                  { name: "Gestão de catálogo de produtos", checked: true },
                  { name: "Definição de valor de frete para bairros", checked: true },
                  { name: "Registro de pedidos recebidos", checked: true },
                  { name: "Listagem de PIX recebidos", checked: true },
                  { name: "Pagamentos em PIX automatizados pela api da EfiPay", checked: true },
                  { name: "Opção de pagamento em dinheiro na entrega", checked: true },
                  { name: "Suporte prioritário", checked: true },
                  { name: "Relatórios avançados de vendas", checked: true },
                ]}
                action={() => handleWhatsAppClick("Estou interessado no Plano Anual de R$ 1.919,88")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;
