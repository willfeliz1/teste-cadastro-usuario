import { Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
	margin-top: 40px;
`;

export const Content = styled.div`
  max-width: 1200px;
	margin: 0 auto;
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	line-height: 22px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;  

  h1 {
    align-self: center;
    margin-bottom: 20px;
  }
`;

export const PhotoInput = styled.div`
  margin-bottom: 20px;
  position: relative;
  align-self: center;
  padding-top: 20px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #1b75bb;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 300px;  
  
  strong {
    margin-right: auto;
    padding-bottom: 10px;
  }

  input {
    width: 100%;
    margin-bottom: 30px;

    border: 2px solid #1b75bb;
    border-radius: 4px;
    line-height: 1.5rem;
    margin-bottom: 25px;
    padding: 10px 10px;

    &:focus, &:active {
      box-shadow: 0 0 1px 2px rgba(0, 123, 255, .5);
      outline: 0;
    }
  }
`;

export const Input = styled(Field)`
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px 10px;

  &:focus, &:active {
    box-shadow: 0 0 1px 2px rgba(0, 123, 255, .5);
    outline: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 25px;

  button {
    width: 30%;
    font-size: 16px;
    line-height: 22px;
    padding: 10px;
    margin: 7px 0px;
    background: #1b75bb;
    color: white;
    border: 0;
    border-radius: 20px;
    box-shadow: 1px 1px 2px #1286de;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ErrorMessage = styled.div`
  background-color: #f7ffff;
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin: -20px auto 0 -10px;
  white-space: pre-line;
`;

