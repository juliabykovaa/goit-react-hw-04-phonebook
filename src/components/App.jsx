import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import { ContactBook } from './ContactBook/ContactBook';
import { Filter } from './FilterContactBook/FilterContactBook';
import { nanoid } from 'nanoid';
import { Container, Header } from './App.styled';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContact = JSON.parse(localStorage.getItem('phone'));
    if (savedContact) {
      setContacts(savedContact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('phone', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const addToContacts = ({ name, number }) => {
    if (contacts.some(contact => contact.name === name)) {
      alert('This contact is already in your contact book');
    } else {
      const contactToAdd = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevContacts => [contactToAdd, ...prevContacts]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Container>
        <Header>Phonebook</Header>
        <ContactForm onSubmit={addToContacts} contacts={contacts} />

        <Header>Contacts</Header>
        <Filter value={filter} onChange={changeFilter} />
        {filteredContacts.length ? (
          <ContactBook
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          <p>No contacts</p>
        )}
      </Container>
    </>
  );
}

export default App;
