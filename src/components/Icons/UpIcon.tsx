import {AiOutlineUp} from "react-icons/ai";
import { IconContext } from "react-icons";

export const UpIcon = () => {
  return (
    <IconContext.Provider value={{ color: "black", size: "1em" }}>
      <div>
        <AiOutlineUp />
      </div>
    </IconContext.Provider>
  );
};