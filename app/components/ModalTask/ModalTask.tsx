import React, { useEffect, useState } from "react";
import type { ModalProps } from "react-native";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

import Input from "@/components/ui/Input/Input";
import ModalUI from "@/components/ui/ModalUI/ModalUI";
import ModalWrapper from "@/components/ui/ModalWrapper/ModalWrapper";
import useTaskStore from "@/store/tasks";
import type { ITask } from "@/types/task.interface";

interface ModalTaskProps {
  onPress: () => void;
  title: string;
  modalProps?: ModalProps;
  modalStep: "create" | "update" | null;
  task: ITask | null;
}

const ModalTask = (props: ModalTaskProps) => {
  const { title, task, onPress, modalStep, modalProps = {} } = props;

  const [taskTitle, setTaskTitle] = useState("");

  const [description, setDescription] = useState("");

  const [isSelected, setSelection] = useState(false);

  const createTask = useTaskStore(({ createTask }) => createTask);
  const updateTask = useTaskStore(({ updateTask }) => updateTask);
  const setTaskToEdit = useTaskStore(({ setTaskToEdit }) => setTaskToEdit);
  useEffect(() => {
    if (task) {
      setTaskTitle(task.title);
      setDescription(task.description);
      setSelection(task.status);
    } else {
      setTaskTitle("");
      setDescription("");
      setSelection(false);
    }
  }, [task]);

  const generateId = () => {
    return Math.random().toString(36).slice(2, 9);
  };

  const handeChangeTaskTitle = (value: string) => {
    setTaskTitle(value);
  };

  const handeChangeDescription = (value: string) => {
    setDescription(value);
  };

  const handleClearForm = () => {
    setTaskTitle("");
    setDescription("");
    setSelection(false);
  };

  const handleTask = () => {
    if (taskTitle.trim()) {
      if (modalStep === "update" && task) {
        const updatedTask = {
          title: taskTitle,
          description: description,
          status: isSelected,
        };
        updateTask(task.id, updatedTask);
        setTaskToEdit(null);
        handleClearForm();
        onPress();
      } else if (modalStep === "create") {
        const newTask = {
          id: generateId(),
          title: taskTitle,
          description: description,
          status: isSelected,
        };
        createTask(newTask);
        handleClearForm();
        onPress();
      }
    }
  };

  return (
    <ModalUI
      animationType="slide"
      onRequestClose={onPress}
      {...modalProps}>
      <ModalWrapper>
        <SafeAreaView className="flex-1">
          <View className="flex px-4 py-1 flex-row items-center justify-between">
            <Pressable
              onPress={onPress}
              className="p-2 flex-none">
              <AntDesign
                name="close"
                size={24}
                color="white"
              />
            </Pressable>

            <Text className="text-white text-base flex-1 text-center">
              {title}
            </Text>

            <Pressable
              onPress={handleClearForm}
              className="p-2 flex-none">
              <MaterialIcons
                name="refresh"
                size={24}
                color="white"
              />
            </Pressable>
          </View>
          <View className="pt-4 px-5 flex flex-col justify-between flex-grow">
            <View className="flex flex-col">
              <Input
                placeholder={"Введите название задачи"}
                value={taskTitle}
                autofocus={true}
                onChangeInput={handeChangeTaskTitle}
              />

              <Input
                placeholder={"Введите описание задачи"}
                value={description}
                multiline={true}
                numberOfLines={3}
                className="h-28"
                onChangeInput={handeChangeDescription}
              />

              <View className="flex flex-row gap-x-4 items-center">
                <Checkbox
                  color="#6429E4"
                  value={isSelected}
                  onValueChange={setSelection}
                />

                <Text className="text-white text-base">
                  Отметить задачу выполненой?
                </Text>
              </View>
            </View>

            <Pressable
              disabled={!taskTitle || taskTitle.length === 0}
              onPress={handleTask}
              className="w-full flex items-center justify-between p-3 bg-primary rounded-lg mb-3 active:bg-active">
              <Text className="text-white text-base">
                {modalStep === "create"
                  ? " Добавить новую задачу"
                  : "Обновить задачу"}
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ModalWrapper>
    </ModalUI>
  );
};

export default ModalTask;
