import styled from 'styled-components';

export const Container = styled.section`
  max-width: 550px;
  margin: 0 auto;
  padding: 20px;
  background-color: #e7e7e7;
  border-radius:20px;
  margin-top: 2%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

export const SelectPickUp = styled.select`
    all:unset;
    width: 95%;
    background: rgb(255, 82, 0);
    color: rgb(255, 238, 229);
    padding: 16px 12px;
    border-radius: 16px;
    margin-bottom: 12px;
    font-weight:bold;
    box-shadow: rgba(40, 44, 63, 0.15) 0px 2px 4px 0px;
    border: 1.5px solid rgb(216, 217, 222);
    cursor: pointer;
    font-size:1.2rem;
    transition: all 0.3s;
    &:hover{
      background-color:rgba(255, 81, 0, 0.596);
      transform:scale(1.2);
}
`
export const Form = styled.form`
  width:100%;
  text-align:center;
`

export const Label = styled.label`
  width:100%;
`

export const Input = styled.input`
  all:unset;
  width:100%;
  height:35px;
  background-color:#fff;
  border-radius:3px;
  border:1px solid;
  text-align:left;
`
export const SubmitInput = styled.input`
    all:unset;
    width: 95%;
    background: rgb(255, 82, 0);
    color: rgb(255, 238, 229);
    padding: 16px 12px;
    border-radius: 16px;
    margin-bottom: 12px;
    font-weight:bold;
    box-shadow: rgba(40, 44, 63, 0.15) 0px 2px 4px 0px;
    border: 1.5px solid rgb(216, 217, 222);
    cursor: pointer;
    font-size:1.2rem;
    transition: all 0.3s;
    &:hover{
      background-color:rgba(255, 81, 0, 0.596);
      transform:scale(0.9);
    }
`

export const Article = styled.article`
  width:100%;
`

export const Div = styled.div`
  width:100%;
  display: flex;
  justify-content:space-between;
  margin-top:5%;
`