import { Box } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import CustomColumn from "../../components/CustomColumn";
import { columns } from "../../constants";
import { TaskItem } from "../../components/TaskItem";
import { useTaskBoard } from "../../hooks/useTasksBoard";

const MainPage = () => {
  const { onDragEnd, tasksList, onTaskFilter, columnsList } = useTaskBoard();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" type="column" direction="horizontal">
        {(columnDropProvider) => (
          <Box
            {...columnDropProvider.droppableProps}
            ref={columnDropProvider.innerRef}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              background: (theme) => theme.palette.background.default,
            }}
          >
            {columnsList.map((taskType, index) => {
              const filteredTaskList = tasksList.filter((filter) =>
                onTaskFilter(filter, taskType.label),
              );
              return (
                <Draggable
                  key={taskType.id}
                  draggableId={taskType.id}
                  index={index}
                >
                  {(columnDragProvided) => (
                    <Box
                      ref={columnDragProvided.innerRef}
                      {...columnDragProvided.draggableProps}
                      {...columnDragProvided.dragHandleProps}
                    >
                      <Droppable
                        key={taskType.id}
                        droppableId={taskType.id}
                        type="task"
                      >
                        {(dropProvided, snapshot) => (
                          <CustomColumn
                            taskType={taskType.label}
                            {...dropProvided.droppableProps}
                            innerRef={dropProvided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}
                            numberOfTodoTasks={filteredTaskList.length}
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
                                    dragHandleProps={
                                      dragProvided.dragHandleProps
                                    }
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
                    </Box>
                  )}
                </Draggable>
              );
            })}
            {columnDropProvider.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MainPage;
