import { Box } from "@mui/material";
import CustomHeader from "../../components/CustomHeader";
import type React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
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
        sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
