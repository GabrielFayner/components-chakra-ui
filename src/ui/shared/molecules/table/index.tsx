import { Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import * as S from "./styled";
import SortButton from "./sort-button";
import Nametag  from "../../atoms/nametag";
import Pagination from "../../atoms/pagination";

const TableCustom = () => {
  return (
    <TableContainer>
      <S.TableCustom variant="simple">
        <Thead>
          <Tr>
            <Th>
              <S.HeaderItem>
                Iniciativa <SortButton onClick={() => {''}} active={null}/>
              </S.HeaderItem>
            </Th>
            <Th>
              <S.HeaderItem>
                Usuário <SortButton onClick={() => {''}} active={'asc'}/>
              </S.HeaderItem>
            </Th>
            <Th>
              <S.HeaderItem>
                Tipo <SortButton onClick={() => {''}} active={'desc'}/>
              </S.HeaderItem>
            </Th>
            <Th>
              <S.HeaderItem>
                Data/Hora <SortButton onClick={() => {''}} active={null} />
              </S.HeaderItem>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Nome_do_projeto</Td>
            <Td>Nome do Usuário 1</Td>
            <Td>
              <Nametag 
                size="sm" 
                color="#2A4365" 
                borderRadius="6px"
                bgColor="#BEE3F8"
              >Coleta</Nametag>
            </Td>
            <Td>09/05/22 16:26</Td>
          </Tr>
          <Tr>
            <Td>Nome_do_projeto</Td>
            <Td>Nome do Usuário 2</Td>
            <Td>
              <Nametag 
                size="sm" 
                color="#234E52" 
                borderRadius="6px"
                bgColor="#B2F5EA"
              >Edição</Nametag>
            </Td>
            <Td>09/05/22 16:26</Td>
          </Tr>
          <Tr>
            <Td>Nome_do_projeto</Td>
            <Td>Nome do Usuário 3</Td>
            <Td>
              <Nametag 
                size="sm" 
                color="#822727" 
                borderRadius="6px"
                bgColor="#FED7D7"
              >Exclusão</Nametag>
            </Td>
            <Td>09/05/22 16:26</Td>
          </Tr>
          <Tr>
            <Td>Nome_do_projeto</Td>
            <Td>Nome do Usuário 4</Td>
            <Td>
              <Nametag
                size="sm" 
                color="#1A202C" 
                borderRadius="6px"
                bgColor="#E2E8F0"
              >Exportação</Nametag>
            </Td>
            <Td>09/05/22 16:26</Td>
          </Tr>
        </Tbody>
      </S.TableCustom>
      <S.FooterPagination>
        <Pagination/>
      </S.FooterPagination>
    </TableContainer>
  );
};
export default TableCustom;
