import styled from 'styled-components';

export const Container = styled.main`
  max-width: 100%;
	padding: 40px 0px;
`;

export const Content = styled.div`
  max-width: 85%;
	margin: 0 auto;
  opacity: 0.9;
  
  li {
    margin-top: 10px;
    background: #834a12;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 1px 1px 2px #814508;
    list-style-type: none;
  }
  
 > div {
    display: flex;
    justify-content: center;

    a {
      margin-top: 20px;
      color: white;
      font-size: 16px;
      line-height: 22px;
      padding: 17px 50px;
      background: #814508;
      border: 0;
      border-radius: 20px;
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }  
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
`;

export const TextSide = styled.div`
	display: flex;
  flex-direction: row;
	min-height: 50px;
  align-items: center;
  
  img {
    width: 56px;
    height: 56px;
    margin-right: 15px;
    border-radius: 50%;  
    border: 2px solid #a35c15;
    box-shadow: 1px 1px 5px #814508;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 22px;
    letter-spacing: 0.03em;    
  }
`;

export const ButtonsContainer = styled.div`
  button {
    width: 110px;
    font-size: 14px;
    line-height: 22px;
    margin-left: 10px;
    padding: 7px;
    background: #a35c15;
    color: white;
    border: 0;
    border-radius: 20px;
    box-shadow: 1px 1px 2px #814508;
  }
`;

