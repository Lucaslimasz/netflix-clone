import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 65px;

  position: absolute;
  top: 0;


  >img{
      
      height: 35px;
  }
`;


export const Entrar = styled.button`
    padding: 8px 20px;
    background: #e50914;
    color: #fff;
    font-size: 17px;
    border-radius: 5px;
`;