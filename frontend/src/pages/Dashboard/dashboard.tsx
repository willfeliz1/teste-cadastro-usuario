import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Content, TextSide, Section, ButtonsContainer } from './styles';


interface User {
  id: string;
  name: string;
  birthdate: string;
  email: string;
  photo: string;
  photo_url: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Container >
        <Content>
          <ul>
              {users.map(user => (              
                <li key={user.id}>
                  <Section >                    
                    <TextSide>
                      <img                      
                        width="48"
                        height="48"
                        src={user.photo_url}
                        alt={user.photo}
                      />
                      <div>
                        <strong>Nome:</strong>
                        <span>{user.name}</span>                    
                      </div>
                    </TextSide>
                    <ButtonsContainer>
                      <Link to={`/show/${user.id}`}>
                        <button>
                          Abrir
                        </button>
                      </Link>
                      <Link to={`/edit/${user.id}`}>
                        <button>
                          Editar
                        </button>
                      </Link>
                    </ButtonsContainer>
                  </Section>
                </li>
              ))}                                 
          </ul>
          <div>
            <Link to="/cadastro">Cadastrar</Link>
          </div>

        </Content>
      </Container>
  )
}

export default Dashboard;