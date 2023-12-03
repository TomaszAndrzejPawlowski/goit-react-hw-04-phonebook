import { useContactsContext } from 'components/ContactsContext/ContactsContext';
import css from './ContactList.module.css';

export const ContactList = () => {
  const { contacts, deleteContact } = useContactsContext();
  console.log(contacts.length);
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          <p>
            {name}____{number}
          </p>
          <button type="submit" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
