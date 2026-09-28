import { Box, useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileIcon from "@mui/icons-material/Person2Rounded";
import { CustomIconButton } from "../CustomIconButton";

const CustomHeader = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "24px",
        height: "15%",
        width: "100%",
        background: theme.palette.header.background,
        justifyContent: "flex-end",
        gap: "16px",
        border: `1px solid ${theme.palette.header.border}`,
      }}
    >
      <SettingsIcon />
      <ProfileIcon />
      <CustomIconButton path="/settings">
        <SettingsIcon />
      </CustomIconButton>
    </Box>
  );
};

export default CustomHeader;
