import {AiOutlineDown} from "react-icons/ai";
import { IconContext } from "react-icons";

export const DownIcon = () => {
  return (
    <IconContext.Provider value={{ color: "black", size: "1em" }}>
      <div>
        <AiOutlineDown />
      </div>
    </IconContext.Provider>
  );
}; 