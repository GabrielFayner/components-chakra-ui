import styled from "@emotion/styled";
import { Table, Box } from "@chakra-ui/react";

export const TableCustom = styled(Table)`
   tr:nth-of-type(odd) td {
      background: #EDF2F7 !important;
   }
`;

export const HeaderItem = styled(Box)`
   display: flex;
   align-items: center;
   gap: 11px;
`;

export const FooterPagination = styled(Box)`
   display: flex;
   padding: 16px 0px;
   justify-content: flex-end;
`;