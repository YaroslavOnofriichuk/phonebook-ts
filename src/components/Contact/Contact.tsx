import {IContact} from "../../types/contact.interface";
import {ContactSection} from "./Contact.Styled";
import {ChangeForm} from "../ChangeForm/ChangeForm";

interface Props {
  contact: IContact;
  handleDelete: (id: string) => void;
  handleChange: (newContact: IContact) => void;
  contacts: IContact[];
};

export const Contact = ({contact, contacts, handleDelete, handleChange}: Props) => {
  const onDelete = () => {
    handleDelete(contact.id);
  };

  return (
    <ContactSection>
      <button onClick={onDelete}>Delete contact</button>
      <ChangeForm handleChange={handleChange} contact={contact} contacts={contacts}/>
    </ContactSection>
  );
};