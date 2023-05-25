import React from "react";
import * as S from "./styled";
import {
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Nametag from "../../atoms/nametag";
import GroupAvatar from "./group-avatar";

const CardCustom = () => {
  return (
    <S.CardContainer>
      <CardHeader display='flex' justifyContent='space-between' padding='0'>
        <Heading
          color='#171923'
          lineHeight='26.4px'
          fontFamily='Poppins'
          fontWeight='600'
          fontSize='20px'
          letterSpacing='0.04px'
        >Samarco</Heading>
        <Link href="">
          <ExternalLinkIcon width='24px' height='24px' />
        </Link>
      </CardHeader>
      <CardBody padding='0'>
        <Text 
          color='#4A5568'
          lineHeight='19.6px'
          fontFamily='Poppins'
          fontWeight='400'
          fontSize='14px'
          letterSpacing='0.4px'
        >Descritivo da iniciativa utilizando no máx. 3 linhas</Text>
        <S.SectionTag>
          <Nametag
            size="md"
            borderRadius="6px"
            bgColor="#E9D8FD"
            color="#44337A"
          >
            Portfólio
          </Nametag>
          <Nametag
            size="md"
            borderRadius="6px"
            bgColor="#C6F6D5"
            color="#22543D"
          >
            Concluído
          </Nametag>
        </S.SectionTag>
      </CardBody>
      <CardFooter padding='0' display='flex' gap='8px'>
        <GroupAvatar />
        <Text 
          color='#171923'
          lineHeight='14.4px'
          fontFamily='Poppins'
          fontWeight='400'
          fontSize='12px'
        >X colaboradores<p>nessa iniciativa</p></Text>
      </CardFooter>
    </S.CardContainer>
  );
};
export default CardCustom;
