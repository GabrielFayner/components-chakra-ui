import { Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import * as S from "./styled";
import SortButton from "./sort-button";
import Nametag  from "../nametag";
import PointsAction from "./points-action";
import Pagination from "../pagination";

const TableCustom = () => {
  return (
    <TableContainer>
      <S.TableCustom variant="striped">
        <Thead>
          <Tr>
            <Th>
              <S.HeaderItem>
                INICIATIVA <SortButton onClick={() => {''}} active={null}/>
              </S.HeaderItem>
            </Th>
            <Th>
              <S.HeaderItem>
                USUÁRIO <SortButton onClick={() => {''}} active={'asc'}/>
              </S.HeaderItem>
            </Th>
            <Th>
              <S.HeaderItem>
                TIPO <SortButton onClick={() => {''}} active={'desc'}/>
              </S.HeaderItem>
            </Th>
            <Th>
              <S.HeaderItem>
                DATA/HORA <SortButton onClick={() => {''}} active={null} />
              </S.HeaderItem>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Nome_do_projeto</Td>
            <Td>Camila Rodrigues Soares</Td>
            <Td>
              <Nametag 
                size="sm" 
                color="#fff" 
                borderRadius="sm"
                bgColor="#3182CE"
              >COLETA</Nametag>
            </Td>
            <Td>09/05/22 16:26</Td>
            <Td><PointsAction/></Td>
          </Tr>
          <Tr>
            <Td>Nome_do_projeto</Td>
            <Td>João Oliveira Chaves</Td>
            <Td>
              <Nametag 
                size="sm" 
                color="#fff" 
                borderRadius="sm"
                bgColor="#319795"
              >EDIÇÃO</Nametag>
            </Td>
            <Td>09/05/22 16:26</Td>
            <Td><PointsAction/></Td>
          </Tr>
          <Tr>
            <Td>Nome_do_projeto</Td>
            <Td>Fernando Pimentel Lopes</Td>
            <Td>
              <Nametag 
                size="sm" 
                color="#fff" 
                borderRadius="sm" 
                bgColor="#E53E3E"
              >EXCLUSÃO</Nametag>
            </Td>
            <Td>09/05/22 16:26</Td>
            <Td><PointsAction/></Td>
          </Tr>
          <Tr>
            <Td>Nome_do_projeto</Td>
            <Td>Alexandre Cavalcante S.</Td>
            <Td>
              <Nametag
                size="sm" 
                color="#fff" 
                borderRadius="sm" 
                bgColor="#38A169"
              >EXPORTAÇÃO</Nametag>
            </Td>
            <Td>09/05/22 16:26</Td>
            <Td><PointsAction/></Td>
          </Tr>
        </Tbody>
      </S.TableCustom>
      <S.FooterPagination>
        <Pagination />
      </S.FooterPagination>
    </TableContainer>
  );
};
export default TableCustom;
