import { Box } from "@mui/material";
import type { SxProps } from "@mui/material";

type Props = {
  src: string;
  alt?: string;
  sx?: SxProps;
};

export default function UniversalImage({ src, alt = "", sx }: Props) {
  return (
    <Box className="universal-img-container" sx={sx}>
      <img src={src} alt={alt} className="universal-img" />
    </Box>
  );
}