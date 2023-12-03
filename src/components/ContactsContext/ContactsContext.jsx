import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ContactsContext = createContext();

export const useContactsContext = () => useContext(ContactsContext);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Franek', number: '123456789' },
  ]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = () => {
    const lowerCaseName = name.toLowerCase();
    let isAdded = false;
    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === lowerCaseName) {
        alert(`${name} is already in your contact list.`);
        isAdded = true;
      }
      if (contact.number === number) {
        alert(`${name} cannot have the same number as your other contact.`);
        isAdded = true;
      }
    });
    if (isAdded) {
      return;
    }
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    setContacts(contacts.push(contact));
    console.log(contacts);
  };

  const handleFilter = event => setFilter(event.currenTarget.value);

  const getContacts = () => {
    const lowerCaseFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
    return filterContacts;
  };

  const deleteContact = delId => {
    setContacts(contacts.filter(contact => contact.id !== delId));
  };

  const getContactsFromLocalStorage = () => {
    const storage = localStorage.getItem('state.contacts');
    const parsedStorage = JSON.parse(storage);
    // console.log(parsedStorage);
    if (parsedStorage) {
      setContacts(parsedStorage);
    }
  };

  const updateLocalStorage = () => {
    localStorage.setItem('state.contacts', JSON.stringify(contacts));
  };

  const handleNameChange = () => event => setName(event.target.value);
  const handleNumberChange = () => event => setNumber(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    addContact();
    setName('');
    setNumber('');
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        filter,
        name,
        number,
        addContact,
        handleFilter,
        getContacts,
        deleteContact,
        getContactsFromLocalStorage,
        updateLocalStorage,
        handleNameChange,
        handleNumberChange,
        handleSubmit,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
