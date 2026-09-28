import { Box } from "@mui/material";
import CustomHeader from "../../components/CustomHeader";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100hv",
        minWidth: "100%",
      }}
    >
      <CustomHeader />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: (theme) => theme.palette.background.default,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
