import styled from 'styled-components';

export const Button = styled.button`
width: 90px;
height: 25px;
border-radius: 10px;
cursor: pointer;
border: none;
margin-right: 20px;
font-size: 18px;
background-color: #f5f777;
  &:first-child {
    background-color: #a2fc83;
  }
    &:last-child {
    background-color: #fa6a5c;
  }
:hover {
    background-color: #00e5ff;
    box-shadow: 0 0 10px #c6cccced;
}
`;