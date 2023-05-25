import { Avatar, AvatarGroup as AvatarGroupChacaraUi} from "@chakra-ui/react";

export default function AvatarGroup() {
    return (
        <AvatarGroupChacaraUi size="sm" max={3} isolation='isolate'>
          <Avatar name="T A" bgColor='gray.500' border='none'/>
          <Avatar name="A" bgColor='gray.400' border='none'/>
          <Avatar name="A" bgColor='gray.300' border='none'/>
        </AvatarGroupChacaraUi>
      );
}