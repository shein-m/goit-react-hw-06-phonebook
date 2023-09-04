import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ContactButton, ContactLi } from './contact.styled';
import { removeContacts } from 'redux/contacts';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <ContactLi>
        {name}: {number}
        <ContactButton
          type="button"
          onClick={() => dispatch(removeContacts(id))}
        >
          remove
        </ContactButton>
      </ContactLi>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
