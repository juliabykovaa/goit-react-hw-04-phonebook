import styled from '@emotion/styled';

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
`;

export const ContactItem = styled.li`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
`;

export const DeleteButton = styled.button`
  background-color: #fff;
  color: red;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: fit-content;
  cursor: pointer;
`;
