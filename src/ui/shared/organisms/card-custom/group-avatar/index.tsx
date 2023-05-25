import { Avatar, AvatarGroup } from "@chakra-ui/react";
import React from "react";

const GroupAvatar = () => {
  return (
    <AvatarGroup size="sm" max={3} isolation='isolate'>
      <Avatar name="T A" bgColor='#718096'/>
      <Avatar name="T A" bgColor='#A0AEC0'/>
      <Avatar name="T A" bgColor='#CBD5E0'/>
    </AvatarGroup>
  );
};
export default GroupAvatar;
