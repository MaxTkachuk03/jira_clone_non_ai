import { Box, Card, useTheme } from "@mui/material";
import type { TASK_TYPES, TASK_STATE } from "../../constants";
import type {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "@hello-pangea/dnd";

interface TaskItemProps {
  id: string;
  title: string;
  type: TASK_TYPES;
  state: TASK_STATE;
  label?: string;
  priority: string;
  assignee: string;
  // drag-drop libruary
  innerRef: (element?: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
}

export const TaskItem = ({
  id,
  title,
  type,
  innerRef,
  draggableProps,
  dragHandleProps,
}: TaskItemProps) => {
  const theme = useTheme();
  return (
    <Card ref={innerRef} {...dragHandleProps} {...draggableProps}>
      fffff
    </Card>
  );
};
