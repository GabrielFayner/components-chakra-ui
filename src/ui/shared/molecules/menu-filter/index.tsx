import { Button, Menu, MenuList } from "@chakra-ui/react";
import React from "react";
import * as S from './styled'

const MenuFilter: React.FC = () => {
  return (
    <Menu>
      <S.MenuButtonCustom as={Button} leftIcon={<S.FilterIcon />}>
        Filtrar
      </S.MenuButtonCustom>
      <MenuList>
        <S.MenuItemCustom>Editar</S.MenuItemCustom>
        <S.MenuItemCustom>Ver detalhes</S.MenuItemCustom>
      </MenuList>
    </Menu>
  );
};
export default MenuFilter;
