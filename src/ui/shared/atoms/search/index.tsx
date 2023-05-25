import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface Props {
   placeholder: string
}

const Search = ({ placeholder }: Props) => {
  return (
    <InputGroup gap='15px'>
      <InputLeftElement 
        as='label' 
        htmlFor="search" 
        borderRadius='6px 0px 0px 6px' 
        cursor='pointer' 
        background='#EDF2F7'
        border='1px solid #E2E8F0'
      >
        <Search2Icon color="#1A459C" width='12px' height='12px' />
      </InputLeftElement>
      <Input id="search" type="text" placeholder={placeholder} paddingLeft='50px'/>
    </InputGroup>
  );
};
export default Search;
