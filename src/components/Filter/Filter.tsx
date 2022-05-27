import {FilterInput} from "./Filter.Styled";
import {UpIcon} from "../Icons/UpIcon";
import {DownIcon} from "../Icons/DownIcon";
import {SubTitle} from "../SubTitle/SubTitle.Styled";
import { useState } from "react";

interface Props {
  onFilter: (query: string) => void;
} 

export const Filter = ({onFilter}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilter(e.target.value.trim().toLowerCase());
  };

  return (
    <>
      <SubTitle>
        <h3>Search contact</h3>
        <div onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? <UpIcon/> : <DownIcon/>}
        </div>
      </SubTitle>

      {isVisible && <FilterInput type="text" name="filter" onChange={onChange}></FilterInput>}
    </>
  );
};