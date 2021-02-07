import React, { ChangeEvent, useCallback, useEffect, useState} from "react";
import { useHistory, useParams } from 'react-router-dom';
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

interface User {
  name: string;
  birthdate: Date;
  email: string;
  photo: string;
}

interface UserParams {
  id: string;
}


const EditUser: React.FC = () => {
  const history = useHistory();
  const [previewImage, setPreviewImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  );
  const [image, setImage] = useState<File>();
  
  const params = useParams<UserParams>();
  const [user, setUser] = useState<User>({} as User);
  const [newBirthdate, setNewBirthdate] = useState<string>();
  
  useEffect(() => {
    api.get(`/users/${params.id}`).then(response => {
      const { photo_url, birthdate } = response.data;
      
      setUser(response.data);   

      setNewBirthdate(birthdate);
      
      setPreviewImage(photo_url);
    });
  }, [params.id]);

  const handleSubmit = useCallback( 
    async (values: FormikValues) => {
      try {
            
        values.birthdate = newBirthdate;


        await api.put(`/users/${params.id}`, values);
        
        history.push('/');
      } catch (error) {
        throw error;
      }
     
  }, [history, params.id, newBirthdate]);

  const updatePhoto = useCallback((data: FormData) => {
    api.patch(`/users/${params.id}/photo`, data).then((response) => {
      const { photo_url, photo } = response.data

      setPreviewImage(photo_url);

      setImage(photo);
    });
  }, [params.id]);

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

    const data = new FormData();

    data.append('photo', e.target.files[0]);

    updatePhoto(data);

  }, [updatePhoto]);

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
            enableReinitialize
            initialValues={{
              id: params.id,
              name: user.name !== undefined ? user.name : "",
              birthdate: user.birthdate !== undefined ? user.birthdate : new Date(),
              email: user?.email !== undefined ? user.email : "",
              photo: user?.photo !== undefined ? user.photo : "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validations}

          >
            {({ handleSubmit, errors, setFieldValue, values }) => (
            <Form onSubmit={handleSubmit}>
              <h1>Editar</h1>
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
                      value={newBirthdate}
                      onChange={e => setNewBirthdate(
                        e.target.value,
                      )}
                    />
                    {errors.birthdate && (
                      <ErrorMessage>
                        {errors.birthdate}
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

export default EditUser;