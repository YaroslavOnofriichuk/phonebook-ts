import {useState, useEffect} from 'react';
import {getContacts, addContact, deleteContact, changeContact} from "../localStorage/localStorageAPI"
import {IContact} from "../types/contact.interface";
import {MainSection} from "./Section/Section.Styled";
import {Title} from "./Title/Title.Styled";
import {ContactForm} from "./ContactForm/ContactForm";
import {ContactsList} from "./ContactsList/ContactsList";
import {Filter} from "./Filter/Filter";

export function App() {
  const [contacts, setContacts] = useState<IContact[]>(getContacts());
  const [filteredContacts, setFilteredContacts] = useState<IContact[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const filterContacts = () => {
      setFilteredContacts(contacts.filter(contact => contact.name.toLowerCase().includes(filter) || contact.phone.includes(filter)));
    };

    filterContacts()
  }, [contacts, filter]);
  
  const onFilter = (query: string) => {
    setFilter(query);
  };

  const createContact = (contact: IContact) => {
    addContact(contact);
    setContacts(getContacts());
  };

  const handleDelete = (id: string) => {
    deleteContact(id);
    setContacts(getContacts());
  };

  const handleChange = (newContact: IContact) => {
    changeContact(newContact);
    setContacts(getContacts());
  };

  return (
    <MainSection>
      <Title>Phone book</Title>
      <ContactForm createContact={createContact} contacts={contacts}/>
      <Filter onFilter={onFilter}/>
      <ContactsList contacts={filteredContacts} handleDelete={handleDelete} handleChange={handleChange}/>
    </MainSection>
  );
};
