import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts); //Отримуємо масив, передаючи функцію тепер з глобальним state Redux
  const filter = useSelector(getFilter);

  // Філтруємо контакти для повернення імені з нормалізованого фільтру в рядку нижнього регістру
  const getVisibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  return (
    <>
      <ul>
        {getVisibleContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;






