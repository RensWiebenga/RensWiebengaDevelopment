import rensImage from "../../../../assets/rens.png";
import { Stack } from "@mantine/core";

const Avatar = () => {
  return (
    <Stack justify="center" align="center">
      <img src={rensImage} alt="Avatar" width="350px" />
    </Stack>
  );
};

export default Avatar;
