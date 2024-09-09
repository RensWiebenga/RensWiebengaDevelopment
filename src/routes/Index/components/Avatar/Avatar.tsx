import rensImage from "../../../../assets/rens.png";
import { Stack, Image } from "@mantine/core";

const Avatar = () => {
  return (
    <Stack justify="center" align="center">
      <Image src={rensImage} alt="Avatar" w="350px" maw="90vw"/>
    </Stack>
  );
};

export default Avatar;
