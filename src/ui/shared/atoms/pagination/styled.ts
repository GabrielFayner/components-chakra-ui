import { Box, Button, createIcon, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const LeftIcon = createIcon({
  displayName: 'LeftIcon',
  viewBox:"0 0 6 12",
  defaultProps: { width: '7.4px', height: '8px'},
  d:"M5.78033 0.96967C6.07322 1.26256 6.07322 1.73744 5.78033 2.03033L1.81066 6L5.78033 9.96967C6.07322 10.2626 6.07322 10.7374 5.78033 11.0303C5.48744 11.3232 5.01256 11.3232 4.71967 11.0303L0.21967 6.53033C-0.0732233 6.23744 -0.0732233 5.76256 0.21967 5.46967L4.71967 0.96967C5.01256 0.676777 5.48744 0.676777 5.78033 0.96967Z",
})

export const RightIcon = createIcon({
  displayName: 'RightIcon',
  viewBox:"0 0 6 12",
  defaultProps: { width: '7.4px', height: '8px'},
  d:"M0.21967 11.0303C-0.0732235 10.7374 -0.0732235 10.2626 0.21967 9.96967L4.18934 6L0.219671 2.03033C-0.0732228 1.73744 -0.0732227 1.26256 0.219671 0.969669C0.512564 0.676776 0.987438 0.676776 1.28033 0.969669L5.78033 5.46967C6.07322 5.76256 6.07322 6.23744 5.78033 6.53033L1.28033 11.0303C0.987437 11.3232 0.512563 11.3232 0.21967 11.0303Z",
})

export const Container = styled(Box)`
  padding: 1px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`

export const SectionText = styled(Box)``

export const SectionPagination = styled(Box)`
  button:first-child {
    border: 1px solid #CBD5E0;
    border-radius: 12px 0px 0px 12px; 
  }
  button:last-child {
    border: 1px solid #CBD5E0;
    border-radius: 0px 12px 12px 0px; 
  }
`

export const ButtonCustom = styled(Button)`
  width: 28px;
  height: 28px;
  min-width: 28px;
  padding: 0px;
  border: 1px solid #CBD5E0;
  border-radius: 0px;
  background-color: #FFFFFF;

  :hover {
    background-color: #f7f7f7;
    border-color: #CBD5E0;
    transform: scale(1.1);
  }
 
  :focus {
    --menu-bg: transparent;
    outline: 0px;
  } 
`

export const TextCustom = styled(Text)`
  color: #171923;
  font-family: Poppins;
  font-size: 14px;
  line-height: 19.6px;
  letter-spacing: 0.45px;
`

