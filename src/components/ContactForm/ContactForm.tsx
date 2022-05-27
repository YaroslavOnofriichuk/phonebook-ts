import { useState } from "react";
import { nanoid } from 'nanoid';
import {IContact} from "../../types/contact.interface";
import {Form} from "./Form.Styled";
import {SubTitle} from "../SubTitle/SubTitle.Styled";
import {UpIcon} from "../Icons/UpIcon";
import {DownIcon} from "../Icons/DownIcon";

interface Props {
  createContact: (contact: IContact) => void;
  contacts: IContact[];
};

export const ContactForm = ({createContact, contacts}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);


  const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget
    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement,
      phone: HTMLInputElement
    };

    if (contacts.filter(contact => contact.name.toLowerCase() === formElements.name.value.toLowerCase().trim()).length > 0) {
      setNameError(true);
    } else if (contacts.filter(contact => contact.phone.toLowerCase() === formElements.phone.value.toLowerCase().trim()).length > 0) {
      setPhoneError(true);
    } else {
      setNameError(false);
      setPhoneError(false);

      createContact({
        name: formElements.name.value.trim(),
        phone: formElements.phone.value.trim(),
        id: nanoid(),
      });

      form.reset();
    };
  };

  return (
    <>
      <SubTitle >
        <h3>Create contact</h3>
        <div onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <UpIcon/> : <DownIcon/>}
        </div>
      </SubTitle>

      {isVisible && (<Form onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" name="name" required></input>
          {nameError && <p>contact with this name is already in the phonebook</p>}
        </label>

        <label>
          Phone
          <input type="tel" name="phone" required></input>
          {phoneError && <p>contact with this number is already in the phone book</p>}
        </label>

        <button type="submit">Create</button>
      </Form>)}
    </>
  );
};