import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
`;
export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;
