import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import css from './App.module.css';
import { useEffect } from 'react';
import { useContactsContext } from './ContactsContext/ContactsContext';

export const App = () => {
  const {
    contacts,
    filter,
    addContact,
    handleFilter,
    getContacts,
    deleteContact,
    getContactsFromLocalStorage,
    updateLocalStorage,
  } = useContactsContext();

  useEffect(() => {
    getContactsFromLocalStorage();
  }, []);

  useEffect(() => {
    updateLocalStorage();
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.titles}>Phonebook</h1>
      <ContactForm generateId={uuidv4()} />
      <h2 className={css.titles}>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={getContacts} onDeleteContact={deleteContact} />
    </div>
  );
};
