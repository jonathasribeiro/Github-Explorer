import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input type="text" placeholder="Digite o nome do Repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54040740?s=460&u=c7aeee6a165deaaadcc6d4e958a299910ec685cb&v=4"
            alt="Jonathas Ribeiro"
          />
          <div />
        </a>
      </Repositories>
    </Container>
  );
};

export default Dashboard;
