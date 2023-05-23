import {
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import * as S from './styled'

const TableCustom = () => {
  return (
    <TableContainer>
        <S.TableCustom variant='striped'>
            <Thead>
                <Tr>
                    <Th>INICIATIVA</Th>
                    <Th>USUÁRIO</Th>
                    <Th>TIPO</Th>
                    <Th>DATA/HORA</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Nome_do_projeto</Td>
                    <Td>Camila Rodrigues Soares</Td>
                    <Td><S.TextStyled>COLETA</S.TextStyled></Td>
                    <Td>09/05/22 16:26</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Nome_do_projeto</Td>
                    <Td>João Oliveira Chaves</Td>
                    <Td><S.TextStyled>EDIÇÃO</S.TextStyled></Td>
                    <Td>09/05/22 16:26</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Nome_do_projeto</Td>
                    <Td>Fernando Pimentel Lopes</Td>
                    <Td><S.TextStyled>EXCLUSÃO</S.TextStyled></Td>
                    <Td>09/05/22 16:26</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Nome_do_projeto</Td>
                    <Td>Alexandre Cavalcante S.</Td>
                    <Td><S.TextStyled>EXPORTAÇÃO</S.TextStyled></Td>
                    <Td>09/05/22 16:26</Td>
                    <Td></Td>
                </Tr>
            </Tbody>
        </S.TableCustom>
    </TableContainer>
  )
}
export default TableCustom