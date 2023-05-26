import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    hep: {
      100: "#1A459C",
    },
    brand: {
      100: "#f2f2f2",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
