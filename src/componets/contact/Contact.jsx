import css from './Contact.module.css';

const Contact = ({ contact }) => {
  return (
    <div className={css.contactContainer}>
      <ul>
        <li>{contact.name}</li>
        <li>{contact.number}</li>
      </ul>
      <button type="button">Delete</button>
    </div>
  );
};

export default Contact;
