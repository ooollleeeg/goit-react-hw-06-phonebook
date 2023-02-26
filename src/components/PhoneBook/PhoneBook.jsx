import { useSelector, useDispatch } from 'react-redux';

import ContactsList from './ContactsList/ContactsList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import {
  getAllContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selecrors';
import { getFilter } from 'redux/filter/filter-selectors';

import styles from './phoneBooks.module.scss';

const PhoneBook = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div>
      <h1 className={styles.title}>PhoneBook</h1>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Add contact</h3>
          <ContactForm onSubmit={handleAddContact} />
        </div>
        <div className={styles.block}>
          <ContactFilter value={filter} handleChange={handleFilter} />
          {isContacts && (
            <ContactsList
              removeContact={handleDeleteContact}
              contacts={filteredContacts}
            />
          )}
          {!isContacts && <p>No contacts in list</p>}
        </div>
      </div>
    </div>
  );
};
export default PhoneBook;
