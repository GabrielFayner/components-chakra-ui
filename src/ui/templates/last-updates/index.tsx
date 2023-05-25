import React from "react";
import * as S from "./styled";

import { Button, Text } from "@chakra-ui/react";
import Search from "../../shared/atoms/search";
import TableCustom from "../../shared/molecules/table";
import MenuFilter from "../../shared/molecules/menu-filter";

const LastUpdates = () => {
  return (
      <S.Container>
        <S.Header>
          <Text
            color='#171923'
            fontFamily='Poppins'
            lineHeight='23.76px'
            fontWeight='600'
            fontSize='18px'
            letterSpacing='0.06px'
          >Últimas atualizações</Text>
          <S.SectionHeader>
            <Search placeholder="Pesquisar" />
            <MenuFilter/>
          </S.SectionHeader>
        </S.Header>
        <S.Content><TableCustom /></S.Content>
      </S.Container>
  );
};

export default LastUpdates
