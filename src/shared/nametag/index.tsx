import React from 'react'
import { Tag, TagLabel } from '@chakra-ui/react'

interface Props {
  size?: string
  color?: string
  bgColor: string
  borderRadius?: string
  children: React.ReactNode 
}

const Nametag = ({ size, color, bgColor, borderRadius, children }: Props) => {
  return (
    <Tag size={size} color={color} bgColor={bgColor} borderRadius={borderRadius}>
      <TagLabel as='span'>{children}</TagLabel>
    </Tag>
  )
}
export default Nametag