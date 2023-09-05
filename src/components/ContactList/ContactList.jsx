import Contact from 'components/Contact/Contact';
import { ContactListUl } from './contactList.styled';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.myContacts);
  const filter = useSelector(state => state.filter);

  const filterContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactListUl>
        {filterContacts.map(el => (
          <Contact key={el.id} id={el.id} name={el.name} number={el.number} />
        ))}
      </ContactListUl>
    </>
  );
}
