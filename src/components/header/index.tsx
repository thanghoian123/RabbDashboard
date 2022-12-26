import { Box, Typography, useTheme } from "@mui/material";
import { memo } from "react";
import { EMode, tokens } from "../../theme";
interface IHeader {
  title: string;
  subTitle?: string;
}
const Header = memo(({ title, subTitle }: IHeader) => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode as EMode);
  return (
    <Box>
      <Typography variant="h2" color={colors.blueAccent[600]} fontWeight="bold">
        {title}
      </Typography>
      <Typography color={colors.greenAccent[400]}>{subTitle}</Typography>
    </Box>
  );
});

export default Header;
