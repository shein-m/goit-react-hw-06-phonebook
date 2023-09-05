import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';
import Section from './Section/Section';

export default function App() {
  return (
    <>
      <ContactForm />
      <Section title="Contacts">
        <FilterContacts title="Find contacts by name" />
        <ContactList />
      </Section>
    </>
  );
}
