import { Box, Typography } from "@mui/material";
import { useState } from "react";

const TASK_NUMBER_WIDTH = 24;
const TASK_NUMBER_HEIGHT = 16;

interface CustomColumnProps {
  taskType: string;
}

const CustomColumn = ({ taskType }: CustomColumnProps) => {
  const [numberOfTodoTasks, setNumberOfTodoTasks] = useState(0);

  return (
    <Box
      sx={{
        margin: "24px",
        display: "flex",
        direction: "column",
        maxWidth: "250px",
        height: "90hv",
        borderRadius: "16px",
        border: "1px solid #000",
        padding: "10px",
      }}
    >
      <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Segoe UI",
          }}
        >
          {taskType}
        </Typography>
        <Box
          sx={{
            display: "flex",
            padding: "4px",
            bgcolor: "gray",
            width: TASK_NUMBER_WIDTH,
            height: TASK_NUMBER_HEIGHT,
            alignContent: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Segoe UI",
              lineHeight: 1,
              color: "black",
            }}
          >
            {numberOfTodoTasks}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomColumn;
