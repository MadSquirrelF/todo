import React from "react";
import { Text, View } from "react-native";

import ToDoItem from "./ToDoItem";

import type { ITask } from "@/types/task.interface";

interface ToDoListProps {
  tasks: ITask[];
}

const ToDoList = (props: ToDoListProps) => {
  const { tasks } = props;
  return (
    <View className="w-full flex flex-col gap-y-10 p-5 items-center">
      <Text className="text-3xl text-white font-bold">Ваши задачи</Text>

      <View className="flex flex-col relative w-full">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
      </View>
    </View>
  );
};

export default ToDoList;
