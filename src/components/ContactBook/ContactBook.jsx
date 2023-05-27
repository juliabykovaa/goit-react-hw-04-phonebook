import React from 'react';
import { ContactList, ContactItem, DeleteButton } from './ContactBook.styled';
import PropTypes from 'prop-types';

export const ContactBook = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ContactList>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <DeleteButton onClick={() => onDeleteContact(contact.id)}>
              X
            </DeleteButton>
          </ContactItem>
        ))}
      </ContactList>
    </>
  );
};

ContactBook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
