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






{/* const ContactList = ({ filteredContacts, onDeleteContact }) => {  
  // const { todo } = useSelector((state) => {})
  const data = useSelector((state) => state.todo)
  const dispatch = useDispatch()
  
  const onAddContact = (todo) => {
    const newTodo = {
      ...todo,
      id: nanoid(),
    }
    dispatch({type: 'addTodo', payload: newTodo})
  }

  return (
    <Section>
      <>
        <Header>
          <p>Name</p>
          <p></p>
          <p>Phone Number</p>
          <p></p>
        </Header>

        <hr style={{ margin: '20px 0' }}></hr>

        <Title>Contacts ({filteredContacts.length})</Title>
        {filteredContacts.length > 0 ? (
          <>
          <ContactForm onAddContact={onAddContact}/>
          <List>
            {data.map((contact) => (
              <ContactItem
                key={contact.id}
                //onDeleteContact={onDeleteContact}
                {...contact}
              />
            ))}
          </List>
          </>
        ) : (
          <h2>Contacts not found</h2>
        )}
      </>
    </Section>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      bgColor: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
 */}
