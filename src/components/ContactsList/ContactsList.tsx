import {useState} from "react";
import {IContact} from "../../types/contact.interface";
import {List} from "./ContactsList.Styled";
import {UpIcon} from "../Icons/UpIcon";
import {DownIcon} from "../Icons/DownIcon";
import {Contact} from "../Contact/Contact";

interface Props {
  contacts: IContact[];
  handleDelete: (id: string) => void;
  handleChange: (newContact: IContact) => void;
}

interface State {
  [id: string]: boolean;
}

export const ContactsList = ({contacts, handleDelete, handleChange}: Props) => {
  const [isVisible, setIsVisible] = useState<State>(
    contacts.reduce((acc, contact) => {
      return {
        ...acc,
        [contact.id]: false,
      }
    }, {})
  );

  const onClick = (id: string) => {
    setIsVisible(previousState => {
      return {
        ...previousState,
        [id]: !previousState[id],
      };
    });
  }; 

  return (
    <List>
      {contacts.map(contact => {
        return (
        <li key={contact.id} >
          <div>

            <p> 
              <span>{contact.name}</span>
              <span>{contact.phone}</span>
            </p>

            <div onClick={() => onClick(contact.id)}>
              {isVisible[contact.id] ? <UpIcon/> : <DownIcon/>}
            </div>

          </div>

          {isVisible[contact.id] && <Contact contact={contact} contacts={contacts} handleDelete={handleDelete} handleChange={handleChange}/>}
        </li>)
      })}
    </List>
  );
}