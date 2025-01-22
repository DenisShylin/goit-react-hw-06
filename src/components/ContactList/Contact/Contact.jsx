// src/components/ContactList/Contact/Contact.jsx
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      {contact.name}: {contact.number}
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={styles.button}
      >
        Видалити
      </button>
    </li>
  );
};

export default Contact;
