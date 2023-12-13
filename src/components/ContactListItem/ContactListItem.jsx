import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li key={id}>
        {name}: {number}
      </li>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;