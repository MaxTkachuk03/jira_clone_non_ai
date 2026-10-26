import { Box } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import CustomColumn from "../../components/CustomColumn";
import { columns } from "../../constants";
import { TaskItem } from "../../components/TaskItem";
import { useTaskBoard } from "../../hooks/useTasksBoard";

const MainPage = () => {
  const { onDragEnd, tasksList, onTaskFilter } = useTaskBoard();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        sx={{
          display: "flex",
          direction: "column",
          alignItems: "center",
          background: (theme) => theme.palette.background.default,
        }}
      >
        {columns.map((taskType) => {
          const filteredTaskList = tasksList.filter((filter) =>
            onTaskFilter(filter, taskType.label),
          );
          return (
            <Droppable key={taskType.id} droppableId={taskType.id}>
              {(dropProvided, snapshot) => (
                <CustomColumn
                  taskType={taskType.label}
                  {...dropProvided.droppableProps}
                  innerRef={dropProvided.innerRef}
                  numberOfTodoTasks={filteredTaskList.length}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {filteredTaskList.map((task, taskIndex) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={taskIndex}
                    >
                      {(dragProvided, snapshot) => (
                        <TaskItem
                          innerRef={dragProvided.innerRef}
                          dragHandleProps={dragProvided.dragHandleProps}
                          draggableProps={dragProvided.draggableProps}
                          isDragging={snapshot.isDragging}
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
