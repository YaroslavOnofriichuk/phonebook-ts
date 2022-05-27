import {IContact} from "../types/contact.interface";

const KEY = "contacts";

export const getContacts = () => {
  try {
    const contacts = localStorage.getItem(KEY);
    if (contacts) {
      return JSON.parse(contacts);
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addContact = (contact: IContact) => {
  const contacts = getContacts();
  contacts.push(contact);
  localStorage.setItem(KEY, JSON.stringify(contacts));
};

export const deleteContact = (id: string) => {
  const contacts = getContacts();
  const newContacts = contacts.filter((contact: IContact) => contact.id !== id);
  localStorage.setItem(KEY, JSON.stringify(newContacts));
};

export const changeContact = (newContact: IContact) => {
  const contacts = getContacts();
  const index = contacts.findIndex((contact: IContact) => contact.id === newContact.id);
  contacts.splice(index, 1, newContact);
  localStorage.setItem(KEY, JSON.stringify(contacts));
};