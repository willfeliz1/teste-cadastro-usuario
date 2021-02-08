import React, { ChangeEvent, useCallback, useState} from "react";
import { useHistory } from 'react-router-dom';
import { FiCamera } from 'react-icons/fi';

import api from "../../services/api";

import * as Yup from 'yup';

import { Formik, FormikValues } from 'formik';

import InputMask from "react-input-mask";

import { 
  ButtonsContainer, 
  Container, 
  Content, 
  Form,
  Input,
  InputsContainer,
  PhotoInput,
  ErrorMessage, 
} from './styles';


const SignIn: React.FC = () => {
  const history = useHistory();
  const [previewImage, setPreviewImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  );
  const [image, setImage] = useState<File>();

  const [newBirthdate, setNewBirthdate] = useState<string>();

  const handleSubmit = useCallback( 
    async (values: FormikValues) => {
      try {
        const data = new FormData();

        data.append('name', values.name);

        if(newBirthdate) {
          data.append('birthdate', newBirthdate);
        }

        data.append('email', values.email);

        if(image) {
          data.append('photo', image);          
        }

        await api.post('/users', data);
        
        history.push('/');
      } catch (error) {
        return error;
      }
     
  }, [history, image, newBirthdate]);

  const imageHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
    
    if (!e.target.files) {
      return
    }

    const selectedImage = e.target.files[0];

    setImage(selectedImage);

    const reader = new FileReader();

    reader.onload = () => {
      if(reader.readyState === 2) {
        setPreviewImage(String(reader.result));
      }
    }

    reader.readAsDataURL(e.target.files[0]);
  }, []);

  const toDashboard = () => {
    return history.push("/");
  }

  const validations = Yup.object().shape({
    name: Yup.string().required('Campo nome obrigatório'),
    birthdate: Yup.string().required(),
    email: Yup.string().email().required('Campo email obrigatório'),
    photo: Yup.string(),
  });

  return (
      <Container>
        <Content>
          <Formik
            initialValues={{
              name: "",
              birthdate: "__/__/____",
              newBirthdate: "",
              email: "",
              photo: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validations}
          >
            {({ handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <h1>Cadastro de usuario</h1>
                <PhotoInput>
                  <img src={previewImage} alt={previewImage} key={previewImage}/>
                  <label htmlFor="image">
                    <FiCamera />

                    <input type="file" id="image" onChange={imageHandler}/>
                  </label>
                </PhotoInput>

                <InputsContainer>
                    <strong>Nome:</strong>
                    <Input
                      name="name"
                      placeholder="Seu nome"
                    />
                    {errors.name && (
                      <ErrorMessage>
                        {errors.name}
                      </ErrorMessage>
                    )}

                    <strong>Data de nascimento:</strong>
                    <InputMask 
                      name="birthdate"
                      mask="99/99/9999"
                      value={newBirthdate ? newBirthdate : '__/__/____'}
                      onChange={e => setNewBirthdate(
                        e.target.value,
                      )}
                    />
                    {errors.newBirthdate && (
                      <ErrorMessage>
                        {errors.newBirthdate}
                      </ErrorMessage>
                    )}              
                  
                    <strong>E-mail:</strong>
                    <Input
                      name="email"
                      className="cadastro-professor-field"
                      placeholder="Seu e-mail"
                    />
                    {errors.email && (
                      <ErrorMessage>
                        {errors.email}
                      </ErrorMessage>
                    )}
              </InputsContainer>
              <ButtonsContainer>
                <button type="submit" className="login-btn">
                  Concluir
                </button>
                <button className="login-btn login-btn-voltar" onClick={() => toDashboard()}>
                  Voltar
                </button>
              </ButtonsContainer>          

            </Form>
            )}
          </Formik>
        </Content>
      </Container>
  );
}

export default SignIn;