import { useContactsContext } from 'components/ContactsContext/ContactsContext';
import css from './ContactList.module.css';

export const ContactList = () => {
  const { getContacts, deleteContact } = useContactsContext();
  return (
    <ul className={css.contactList}>
      {getContacts().map(({ id, name, number }) => (
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
