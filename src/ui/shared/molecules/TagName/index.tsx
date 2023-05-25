import React from 'react'
import { Tag, TagLabel } from '@chakra-ui/react'

interface Props {
  size?: string
  color?: string
  ml?: number
  bgColor: string
  borderRadius?: string
  children: React.ReactNode 
}

const TagName = ({ size, color, ml, bgColor, borderRadius, children }: Props) => {
  return (
    <Tag ml={ml} size={size} color={color} bgColor={bgColor} borderRadius={borderRadius}>
        <TagLabel as='span'>{children}</TagLabel>
    </Tag>
  )
}

export default TagName;