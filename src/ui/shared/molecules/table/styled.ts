import styled from "@emotion/styled";
import { Table, Box } from "@chakra-ui/react";

export const TableCustom = styled(Table)`
   th {
      text-transform: none;
      font-family: Poppins;
      font-weight: 600;
      font-size: 18px;
      line-height: 22.4px;
      letter-spacing: 0.3px;
      color: #1A202C;

      padding-left: 0px;
   }

   td {
      font-family: Poppins;
      font-weight: 400;
      font-size: 14px;
      line-height: 19.6px;
      letter-spacing: 0.4px;
      color: #2D3748;

      padding-left: 0px;
   }
`;

export const HeaderItem = styled(Box)`
   display: flex;
   align-items: center;
   gap: 8px;
`;

export const HeaderActions = styled(Box)`
   display: flex;
   align-items: center;
   gap: 11px;
`;

export const FooterPagination = styled(Box)`
   display: flex;
   padding-top: 24px;
   justify-content: flex-end;
`;