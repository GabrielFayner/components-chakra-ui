import React from "react";
import {
  IconButton,
  Menu,
  MenuList,
} from "@chakra-ui/react";
import * as S from './styled'

const PointsAction = () => {
  return (
    <Menu>
      <S.MenuButtonCustom
        as={IconButton}
        icon={<S.Points />}
      />
      <MenuList>
        <S.MenuItemCustom>Editar</S.MenuItemCustom>
        <S.MenuItemCustom>Ver detalhes</S.MenuItemCustom>
      </MenuList>
    </Menu>
  );
};
export default PointsAction;
