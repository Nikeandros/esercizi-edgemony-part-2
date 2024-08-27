"use client"; 

import React from 'react';
import styled from 'styled-components';

interface CardProps {
  nome: string;
  cognome: string;
  dataNascita: string;
  luogoNascita: string;
  professione: string;
  hobby: string[];
}

const CardContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 20px;
  margin: 20px;
  max-width: 400px;
  text-align: center;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const Info = styled.p`
  font-size: 16px;
  color: #555;
  margin: 5px 0;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background: #0077b5; // Colore di LinkedIn
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;
  &:hover {
    background: #005582; // Colore scuro di LinkedIn per hover
  }
`;

const Card: React.FC<CardProps> = ({ nome, cognome, dataNascita, luogoNascita, professione, hobby }) => {
  return (
    <CardContainer>
      <Title>{nome} {cognome}</Title>
      <Info><strong>Data di nascita:</strong> {dataNascita}</Info>
      <Info><strong>Luogo di nascita:</strong> {luogoNascita}</Info>
      <Info><strong>Professione:</strong> {professione}</Info>
      <Info><strong>Hobby:</strong> {hobby.join(', ')}</Info>
      <Button href="https://www.linkedin.com/in/ivan-giuseppe-saltaformaggio-03b0a7260" target="_blank" rel="noopener noreferrer">
        Visita il mio LinkedIn
      </Button>
    </CardContainer>
  );
};

export default Card;
