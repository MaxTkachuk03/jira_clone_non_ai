import React from "react";
import { Box } from "@mui/material";
import CustomColumn from "../../components/CustomColumn";
import { TASK_TYPES } from "../../constants";

const MainPage = () => {
  return (
    <Box sx={{ display: "flex", direction: "column" }}>
      {TASK_TYPES.map((taskType) => {
        return <CustomColumn key={taskType.id} taskType={taskType.label} />;
      })}
    </Box>
  );
};

export default MainPage;
