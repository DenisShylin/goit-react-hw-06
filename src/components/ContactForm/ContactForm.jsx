import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const isExist = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} вже є в контактах!`);
      return;
    }

    dispatch(
      addContact({
        id: Date.now(),
        name: name,
        number: number,
      })
    );

    e.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Ім'я" required />
      <input type="tel" name="number" placeholder="Номер телефону" required />
      <button type="submit">Додати контакт</button>
    </form>
  );
};

export default ContactForm;
