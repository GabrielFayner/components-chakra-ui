import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  gap: 24px;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 24px;
`

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SectionHeader = styled(Box)`
  display: flex;
  gap: 8px;
  max-width: 288px;
`

export const Content = styled(Box)`

`