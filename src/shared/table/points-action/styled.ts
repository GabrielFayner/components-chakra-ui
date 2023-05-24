import { createIcon } from '@chakra-ui/icons'
import { MenuButton, MenuItem } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Points = createIcon({
  displayName: 'Points',
  viewBox:"0 0 4 16",
  d:"M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z",
})

export const MenuButtonCustom = styled(MenuButton)`
  height: 30px;
  background-color: transparent;

  :hover {
    background-color: transparent;
  }
`

export const MenuItemCustom = styled(MenuItem)`
  :hover {
    border-color: #eee;
  }
  :focus {
    --menu-bg: transparent;
    outline: 0px;
  } 
`