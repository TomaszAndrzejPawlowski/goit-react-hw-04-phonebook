import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './ContactForm.module.css';
import { useContactsContext } from 'components/ContactsContext/ContactsContext';

export const ContactForm = () => {
  const { name, number, handleSubmit, handleNameChange, handleNumberChange } =
    useContactsContext();

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label htmlFor={uuidv4()}>Name</label>
      <input
        className={css.contactForm__input}
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange()}
        pattern="^[a-zA-Zа-яА-Я]+([ -'][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={uuidv4()}
        required
      />
      <label htmlFor={uuidv4()}>Number </label>
      <input
        className={css.contactForm__input}
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange()}
        pattern="^[+]?[0-9 \u0028\u0029\u002D]*$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id={uuidv4()}
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
};
