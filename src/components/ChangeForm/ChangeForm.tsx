import { useState } from "react";
import {Form} from "../ContactForm/Form.Styled";
import {IContact} from "../../types/contact.interface";

interface Props {
  contact: IContact;
  handleChange: (newContact: IContact) => void;
  contacts: IContact[];
};

export const ChangeForm = ({contact, contacts, handleChange}: Props) => {
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget
    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement,
      phone: HTMLInputElement
    };

    if (contacts.filter(contact => contact.name.toLowerCase() ===  formElements.name.value.toLowerCase().trim()).length > 0) {
      setNameError(true);
    } else if (contacts.filter(contact => contact.phone.toLowerCase() === formElements.phone.value.toLowerCase().trim()).length > 0) {
      setPhoneError(true);
    } else {
      setNameError(false);
      setPhoneError(false);

      const data = {
        id: contact.id,
        name: formElements.name.value !== "" ? formElements.name.value.trim() : contact.name,
        phone: formElements.phone.value !== "" ? formElements.phone.value.trim() : contact.phone,
      };

      handleChange(data);

      form.reset();
    };
  };

  return (
    <Form onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" name="name"></input>
          {nameError && <p>contact with this name is already in the phonebook</p>}
        </label>

        <label>
          Phone
          <input type="tel" name="phone"></input>
          {phoneError && <p>contact with this number is already in the phone book</p>}
        </label>

        <button type="submit">Change contact</button>
    </Form>
  );
};