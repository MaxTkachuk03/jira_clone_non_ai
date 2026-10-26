import { useState } from "react";
import { tasks, columns } from "../constants";
import type { DropResult } from "@hello-pangea/dnd";
import type { CommonTypes, TaskType } from "../types/models";

export const useTaskBoard = () => {
  const [tasksList, setTasksList] = useState<TaskType[]>(tasks);
  // const result = {
  //   draggableId: "task-1",  Це звичайний рядок — унікальний ідентифікатор (id) картки, яку користувач перетягнув
  //   type: "TYPE",
  //   reason: "DROP",
  //   source: {   Це об'єкт, який описує початкову точку руху до того, як картку почали тягнути.
  //     droppableId: "column-1",
  //     index: 0,
  //   },
  //   destination: {   Це теж об'єкт, який описує місце призначення (куди користувач «кинув» картку).
  //     droppableId: "column-2",
  //     index: 2,
  //   },
  //   // Drop outside of the list
  //   // destination: null
  // };

  const onTaskFilter = (task: TaskType, taskState: string) => {
    return task.state.toLowerCase() === taskState.toLowerCase();
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    setTasksList((taskList) => {
      const newTaskList = [...taskList];

      const dragIndex = newTaskList.findIndex(
        (task) => task.id === draggableId,
      );
      if (dragIndex === -1) return;

      const [movedTask] = newTaskList.splice(dragIndex, 1);

      if (source.droppableId !== destination.droppableId) {
        const newState = columns.find(
          (column) => column.id === destination.droppableId,
        );
        console.log("newState: ", newState);
        movedTask.state = newState?.label ?? movedTask.state;
      }

      const columnList = newTaskList.filter((task) =>
        onTaskFilter(task, source.droppableId),
      );

      // console.log(`destination.index: ${destination.index}`);

      const prevTask = columnList[destination.index - 1];
      const nextTask = columnList[destination.index];

      movedTask.rank =
        prevTask && nextTask
          ? (prevTask.rank + nextTask.rank) / 2
          : prevTask
            ? prevTask.rank + 10
            : nextTask
              ? nextTask.rank / 2
              : 10;

      const targetGlobalTask = columnList[destination.index];

      const finalIndex = targetGlobalTask
        ? newTaskList.findIndex((t) => t.id === targetGlobalTask.id)
        : newTaskList.length;

      // Вставляємо таску на нову позицію
      newTaskList.splice(finalIndex, 0, movedTask);

      console.log(
        `newTaskList: ${newTaskList.map((task) => task.state.toString())}`,
      );

      return newTaskList;
    });
  };

  return {
    onTaskFilter,
    onDragEnd,
    tasksList,
  };
};
