import { Box, useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileIcon from "@mui/icons-material/Person2Rounded";

const DEFAULT_SIZE = 32;

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
        border: `1px solid ${theme.palette.header.border}`
      }}
    >
      <SettingsIcon sx={{ width: DEFAULT_SIZE, height: DEFAULT_SIZE }} />
      <ProfileIcon sx={{ width: DEFAULT_SIZE, height: DEFAULT_SIZE }} />
    </Box>
  );
};

export default CustomHeader;
