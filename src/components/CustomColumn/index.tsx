import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const TASK_NUMBER_WIDTH = 32;
const TASK_NUMBER_HEIGHT = 24;

interface CustomColumnProps {
  taskType: string;
}

const CustomColumn = ({ taskType }: CustomColumnProps) => {
  const [numberOfTodoTasks, setNumberOfTodoTasks] = useState(0);
  const theme = useTheme();

  return (
    <Box
      sx={{
        margin: "24px",
        display: "flex",
        flexDirection: "column",
        width: "350px",
        minHeight: "400px",
        borderRadius: "16px",
        border: "1px solid #000",
        padding: "10px",
        background: theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignContent: "start",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "20px", color: "primary" }}>
          {taskType}
        </Typography>
        <Box
          sx={{
            display: "flex",
            padding: "0 4px", // Прибираємо вертикальний відступ (0 зверху/знизу), залишаємо тільки по боках
            bgcolor: theme.palette.common.black,
            minWidth: TASK_NUMBER_WIDTH,
            height: TASK_NUMBER_HEIGHT,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: 1,
              color: "white",
              opacity: 0.8,
            }}
          >
            {numberOfTodoTasks}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "8px", flexGrow: 1 }}></Box>
      <IconButton
        color="info"
        size="small"
        onClick={() => {
          return null;
        }}
        sx={{
          justifyContent: "flex-start",
          padding: 0,
          borderRadius: "8px",
          
        }}
      >
        <AddIcon sx={{ width: "24px", height: "24px" }} />
        <Typography sx={{ fontSize: "20px" }}>Create</Typography>
      </IconButton>
    </Box>
  );
};

export default CustomColumn;
