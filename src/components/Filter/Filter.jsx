import { useContactsContext } from 'components/ContactsContext/ContactsContext';
import css from './Filter.module.css';

export const Filter = () => {
  const { filter, handleFilter } = useContactsContext();
  return (
    <div className={css.filterDiv}>
      <label className={css.filterDiv__label}>
        Find contacts by name
        <input
          className={css.filterDiv__input}
          type="name"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};
