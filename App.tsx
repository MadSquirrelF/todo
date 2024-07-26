import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import ModalTask from "@/components/ModalTask/ModalTask";
import ToDoList from "@/components/screens/ToDoList/ToDoList";
import EmptyIcon from "@/shared/icons/EmptyIcon";
import useTaskStore from "@/store/tasks";

export default function App() {
  const tasks = useTaskStore(({ tasks }) => tasks);
  const modalStep = useTaskStore(({ modalStep }) => modalStep);
  const changeModalStep = useTaskStore(
    ({ changeModalStep }) => changeModalStep,
  );
  const taskToEdit = useTaskStore(({ taskToEdit }) => taskToEdit);

  return (
    <SafeAreaView className="flex-1 flex flex-col items-start h-screen w-screen bg-[#1E1C2E]">
      {tasks.length > 0 ? (
        <ToDoList tasks={tasks} />
      ) : (
        <View className="p-5 w-screen h-screen flex flex-col gap-y-5 items-center justify-center">
          <EmptyIcon
            height={230}
            width={"100%"}
          />
          <Text className="text-white font-bold text-3xl text-center">
            Добро пожаловать!
          </Text>
          <Text className="text-gray-500 font-bold text-sm text-center">
            Здесь пока пусто. Создайте задачу и она будет отображаться на вашем
            главном экране.
          </Text>
        </View>
      )}

      <Pressable
        onPress={() => changeModalStep("create")}
        className="p-6 bg-primary rounded-full absolute bottom-10 right-4 active:bg-active">
        <FontAwesome6
          name="add"
          size={24}
          color="white"
        />
      </Pressable>

      <ModalTask
        modalProps={{
          visible: modalStep !== null,
        }}
        onPress={() => changeModalStep(null)}
        task={modalStep === "update" ? taskToEdit : null}
        modalStep={modalStep}
        title={
          modalStep === "create" ? "Создание задачи" : "Редактирование задачи"
        }
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
