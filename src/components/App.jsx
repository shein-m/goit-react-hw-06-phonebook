import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';
import Section from './Section/Section';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.myContacts);
  const filter = useSelector(state => state.filter);

  return (
    <>
      <ContactForm />
      <Section title="Contacts">
        <FilterContacts title="Find contacts by name" filter={filter} />
        <ContactList contacts={contacts} filter={filter} />
      </Section>
    </>
  );
}
