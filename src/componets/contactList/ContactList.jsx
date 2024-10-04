import css from './ContactList.module.css';

import Contact from '../contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
