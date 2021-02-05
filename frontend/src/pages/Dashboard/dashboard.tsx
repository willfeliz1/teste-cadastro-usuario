import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, TextSide, Section, ButtonsContainer } from './styles';

const Dashboard: React.FC = () => {

  return (
    <Container >
        <Content>
          <ul>
              <li>
                <Section>
                  <TextSide >
                    <img                      
                      width="48"
                      height="48"
                      src="https://avatars.githubusercontent.com/u/50719156?s=460&u=81ec30b299ffe9d9275b4e207d9c4760fcada87a&v=4"
                    />
                    <div>
                      <strong>Nome</strong>
                      <span>William Felizardo</span>                    
                    </div>
                  </TextSide>
                  <ButtonsContainer>
                    <button>Abrir</button>
                    <button>Editar</button>
                  </ButtonsContainer>
                </Section>
              </li>
              
              <li>
                <Section>
                  <TextSide >
                    <img                      
                      width="48"
                      height="48"
                      src="https://avatars.githubusercontent.com/u/50719156?s=460&u=81ec30b299ffe9d9275b4e207d9c4760fcada87a&v=4"
                    />
                    <div>
                      <strong>William Felizardo</strong>
                      <span>Nome</span>                   
                    </div>
                  </TextSide>
                  <ButtonsContainer>
                    <button>Abrir</button>
                    <button>Editar</button>
                  </ButtonsContainer>
                </Section>
              </li>      
          </ul>
          <div>
            <Link to="/cadastro">Cadastrar</Link>
          </div>

        </Content>
      </Container>
  )
}

export default Dashboard;