import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";

import useTaskStore from "@/store/tasks";
import type { ITask } from "@/types/task.interface";

const ToDoItem = (props: ITask) => {
  const { title, id, description, status } = props;

  const [isSelected, setSelection] = useState(status);

  const deleteTask = useTaskStore(({ deleteTask }) => deleteTask);
  const changeModalStep = useTaskStore(
    ({ changeModalStep }) => changeModalStep,
  );
  const setTaskToEdit = useTaskStore(({ setTaskToEdit }) => setTaskToEdit);

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  const handleEditTask = () => {
    setTaskToEdit({ id, title, description, status }); // Установите задачу для редактирования
    changeModalStep("update");
  };

  return (
    <View className="w-full py-3 px-5 bg-[#292636] mb-2 rounded-3xl flex flex-row items-center justify-between">
      <View className="flex flex-row items-center gap-x-5">
        <CheckBox
          color="#6429E4"
          value={isSelected}
          onValueChange={setSelection}
        />
        <View className="flex flex-col gap-y-1">
          <Text className="text-white text-base">{title}</Text>
          <Text className="text-gray-500 text-sm">{description}</Text>
        </View>
      </View>

      <View className="flex flex-row gap-x-4">
        <Pressable onPress={handleEditTask}>
          <AntDesign
            name={"edit"}
            size={24}
            color={"gray"}
          />
        </Pressable>

        <Pressable onPress={handleDeleteTask}>
          <AntDesign
            name={"delete"}
            size={24}
            color={"red"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ToDoItem;
