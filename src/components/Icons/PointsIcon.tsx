import {AiOutlineMore} from "react-icons/ai";
import { IconContext } from "react-icons";

export const PointsIcon = () => {
  return (
    <IconContext.Provider value={{ color: "black", size: "1em" }}>
      <div>
        <AiOutlineMore />
      </div>
    </IconContext.Provider>
  );
};