import { MenuButton, MenuItem, createIcon } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const FilterIcon = createIcon({
  displayName: 'FilterIcon',
  viewBox:"0 0 16 16",
  d:"M6.66667 12V10.6667H9.33333V12H6.66667ZM4 8.66667V7.33333H12V8.66667H4ZM2 5.33333V4H14V5.33333H2Z",
})

export const MenuButtonCustom = styled(MenuButton)`
  width: max-content;
  padding: 0px 30px 0px 10px;
  font-family: Poppins;
  font-weight: 700;
  font-size: 14px;
  color: #1A459C;

  background-color: #fff;
  border: 1px solid #1A459C;
  border-radius: 6px;

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