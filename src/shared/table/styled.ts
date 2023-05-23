import styled from "@emotion/styled";
import { Table, Box } from "@chakra-ui/react";

export const TableCustom = styled(Table)`
   tr:nth-of-type(odd) td {
        background: #EDF2F7 !important;
    }
`;

export const TextStyled = styled(Box)`
   width: max-content;
   padding: 0px 4px;
   text-transform: uppercase;
   border-radius: 2px;
   background-color: red;

   color: #fff;
   font-size: 12px;
   font-weight: 700;
   font-size: 12px;
   line-height: 16px;
`;