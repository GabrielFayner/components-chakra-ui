import styled from "@emotion/styled";
import { createIcon } from '@chakra-ui/icons'

export const UpIcon = createIcon({
  displayName: 'UpIcon',
  viewBox:"0 -6 8 10",
  d:"M3.99994 1.88667L6.11328 4L7.05328 3.06L3.99994 0L0.939941 3.06L1.88661 4L3.99994 1.88667ZM3.99994 10.1133L1.88661",
})

export const DownIcon = createIcon({
  displayName: 'DownIcon',
  viewBox:"0 6 8 10",
  d:"M3.99994 4L3.99994 1.88667ZM3.99994 10.1133L1.88661 8L0.946608 8.94L3.99994 12L7.05994 8.94L6.11328 8L3.99994 10.1133Z",
})

export const ButtonContainer = styled.button`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
`;