import React from "react";
import { Image, Stack } from "tamagui";

import Logo from "../assets/icons/logo.png";
import NotificationIcon from "../assets/icons/notification.png";
import MicrophoneIcon from "../assets/icons/microhone.png";
import MessageIcon from "../assets/icons/message.png";
// Header component
const Header = () => {
  return (
    <Stack
      flexDirection={"row"}
      paddingVertical={4}
      paddingHorizontal={6}
      alignItems="center"
    >
      <Stack flex={1}>
        <Image
          source={Logo}
          style={{ height: 80, width: 85 , marginLeft: 12}}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </Stack>

      <Stack flexDirection="row">
        <Image
          source={MicrophoneIcon}
          resizeMethod="resize"
          resizeMode="contain"
          marginRight={10}
          height={40}
          width={40}
        />
        <Image
          source={NotificationIcon}
          resizeMethod="resize"
          resizeMode="contain"
          marginRight={10}
          height={40}
          width={40}
        />
        <Image
          source={MessageIcon}
          resizeMethod="resize"
          resizeMode="contain"
          marginRight={10}
          height={40}
          width={40}
        />
      </Stack>
    </Stack>
  );
};

export default Header;
