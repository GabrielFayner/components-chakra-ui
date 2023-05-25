import React from 'react'
import * as S from './styled'

interface Props {
  active: 'asc' | 'desc' | null
  onClick: () => void
}

const SortButton = ({ active, onClick }: Props) => {
  return (
    <S.ButtonContainer onClick={onClick}>
      <S.UpIcon color={active === 'asc' ? '#3182CE' : '#1A202C'}/>
      <S.DownIcon color={active === 'desc' ? '#3182CE' : '#1A202C'} />
    </S.ButtonContainer>
  )
}
export default SortButton