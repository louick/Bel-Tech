import React, { useState } from "react";
import styled from "styled-components";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Olá, meu nome é ${name} e meu email é ${email}. Gostaria de falar sobre: ${message}`;
    window.open(`https://wa.me/55199185735084?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <Wrapper>
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Entre em Contato</h1>
          <p className="font13">Preencha o formulário abaixo para enviar uma mensagem pelo WhatsApp.</p>
        </HeaderInfo>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></Textarea>
          <Button type="submit">Enviar Mensagem</Button>
        </Form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  background: #f8f9fa;
`;

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #000; /* Texto escuro */
  transition: background-color 0.2s ease;

  &:focus {
    background-color: #e0e0e0;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #000; /* Texto escuro */
  transition: background-color 0.2s ease;

  &:focus {
    background-color: #e0e0e0;
    outline: none;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;
