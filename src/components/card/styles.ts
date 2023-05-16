import styled from 'styled-components';



export const CardContainer = styled.div`

  //align-items: center;
  background: white;
  border-radius: .2rem;
  width: 100%;
  height: 5rem;
`;

export const CardContent = styled.div`
  font-size: 1.2rem;

  display: flex;
  flex-direction: row;
   
  input {
    width: 1rem;
    margin: 1.5rem;
  }

  button {
    margin: 1rem;
    padding: 1rem;
    border-radius: 5rem;
    border: none;
  } 

`;

export const Block = styled.div`
    flex: 1 1 1px;
    text-align: left;
    font-size: 1.3rem;
    margin: auto 0;
    span {
      font-size: 1rem;
      color: var(--text-title);
      padding-right: 1rem;
    }  
`;

