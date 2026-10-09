import { Box } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import CustomColumn from "../../components/CustomColumn";
import { COLUMN_TYPES, TASK_STATE } from "../../constants";
import { TaskItem } from "../../components/TaskItem";
import { TASK_TYPES } from "../../constants";

const MainPage = () => {
  const tasks = [
    {
      id: "1",
      title: "Piss",
      type: TASK_TYPES.BUG,
      priority: "High",
      assignee: "Me",
      state: TASK_STATE.done,
    },
    {
      id: "2",
      title: "Poop",
      type: TASK_TYPES.BUG,
      priority: "High",
      assignee: "Me",
      state: TASK_STATE.in_Progress,
    },
    {
      id: "3",
      title: "Gym",
      type: TASK_TYPES.BUG,
      priority: "High",
      assignee: "Me",
      state: TASK_STATE.done,
    },
    {
      id: "4",
      title: "Sleep",
      type: TASK_TYPES.BUG,
      priority: "High",
      assignee: "Me",
      state: TASK_STATE.done,
    },
  ];
  return (
    <DragDropContext
      onDragEnd={() => {
        return "";
      }}
    >
      <Box
        sx={{
          display: "flex",
          direction: "column",
          alignItems: "center",
          background: (theme) => theme.palette.background.default,
        }}
      >
        {COLUMN_TYPES.map((taskType) => {
          return (
            <Droppable key={taskType.id} droppableId={taskType.id}>
              {(dropProvided) => (
                <CustomColumn
                  taskType={taskType.label}
                  {...dropProvided.droppableProps}
                  innerRef={dropProvided.innerRef}
                >
                  {tasks
                    .filter(
                      (taskFilter) =>
                        taskFilter.state.toLocaleLowerCase() ===
                        taskType.label.toLocaleLowerCase(),
                    )
                    .map((task, taskIndex) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={taskIndex}
                      >
                        {(dragProvided) => (
                          <TaskItem
                            innerRef={dragProvided.innerRef}
                            dragHandleProps={dragProvided.dragHandleProps}
                            draggableProps={dragProvided.draggableProps}
                            id={task.id}
                            title={task.title}
                            type={task.type}
                            priority={task.priority}
                            assignee={task.assignee}
                            state={task.state}
                          />
                        )}
                      </Draggable>
                    ))}
                  {dropProvided.placeholder}
                </CustomColumn>
              )}
            </Droppable>
          );
        })}
      </Box>
    </DragDropContext>
  );
};

export default MainPage;
