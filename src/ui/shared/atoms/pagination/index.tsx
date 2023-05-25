import React from 'react'
import * as S from './styled'
import { Text } from '@chakra-ui/react'

const Pagination = () => {
  return (
    <S.Container>
      <S.SectionText>
        <Text
          as='span'
          color='#2D3748'
          lineHeight='14.4px'
          fontWeight='400'
          fontSize='12px'
        >1 - 4 de 50 iniciativas</Text>
      </S.SectionText>
      <S.SectionPagination>
        <S.ButtonCustom>
          <S.LeftIcon color='#1C1B1F' />
        </S.ButtonCustom>
        <S.ButtonCustom>
          <Text fontWeight='600' color='#1C1B1F'>1</Text>
        </S.ButtonCustom>
        <S.ButtonCustom>
          <Text fontWeight='400' color='#E2E8F0'>2</Text>
        </S.ButtonCustom>
        <S.ButtonCustom>
          <Text fontWeight='400' color='#E2E8F0'>3</Text>
        </S.ButtonCustom>
        <S.ButtonCustom>
          <Text fontWeight='400' color='#E2E8F0'>4</Text>
        </S.ButtonCustom>
        <S.ButtonCustom>
          <S.RightIcon color='#1C1B1F' />
        </S.ButtonCustom>
      </S.SectionPagination>
    </S.Container>
  )
}

export default Pagination
