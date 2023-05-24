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
          lineHeight='20px'
          fontWeight='400'
          fontSize='14px'
        >1 - 4 de 50 iniciativas</Text>
      </S.SectionText>
      <S.SectionPagination>
        <S.ButtonCustom>
          <S.LeftIcon color='#E2E8F0' />
        </S.ButtonCustom>
        <S.ButtonCustom>
          <Text fontWeight='600' color='#2D3748'>1</Text>
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
          <S.RightIcon color='#2D3748' />
        </S.ButtonCustom>
      </S.SectionPagination>
    </S.Container>
  )
}

export default Pagination
