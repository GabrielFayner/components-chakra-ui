import { Box, Card } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const CardContainer = styled(Card)`
  width: max-content;
  max-width: 233.5px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 24px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const SectionTag = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-top: 16px;

  span {
    text-align: center;
    flex: 1;
  }
`;
