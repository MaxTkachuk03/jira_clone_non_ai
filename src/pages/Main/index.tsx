import React from "react";
import { Box } from "@mui/material";
import CustomColumn from "../../components/CustomColumn";
import { TASK_TYPES } from "../../constants";
import MainLayout from "../../layouts/MainLayout";

const MainPage = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          direction: "column",
          alignItems: "center",
          background: (theme) => theme.palette.background.default,
        }}
      >
        {TASK_TYPES.map((taskType) => {
          return <CustomColumn key={taskType.id} taskType={taskType.label} />;
        })}
      </Box>
    </MainLayout>
  );
};

export default MainPage;
