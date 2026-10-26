import { Box, Card, Typography, useTheme } from "@mui/material";
import type {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";

interface TaskItemProps {
  id: string;
  title: string;
  type: string;
  state: string;
  label?: string;
  priority: string;
  assignee: string;
  // drag-drop libruary
  innerRef: (element?: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
  isDragging: boolean;
}

export const TaskItem = ({
  id,
  title,
  type,
  priority,
  assignee,
  innerRef,
  draggableProps,
  dragHandleProps,
  isDragging,
}: TaskItemProps) => {
  const theme = useTheme();
  const initials = assignee
    .split(" ")
    .map((word) => word[0])
    .join("");
  return (
    <Card
      key={id}
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        background: isDragging ? theme.palette.kanban.taskDragging : "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{type}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="h6">{priority}</Typography>
        <Box
          sx={{
            padding: "4px",
            border: "1px, solid",
            borderRadius: 100,
          }}
        >
          {initials}
        </Box>
      </Box>
    </Card>
  );
};
