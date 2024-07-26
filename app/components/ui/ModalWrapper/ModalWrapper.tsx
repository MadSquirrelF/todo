import type { ReactNode } from "react";
import React from "react";
import { View } from "react-native";

import KeyboardAvoidingIOS from "../KeyboardAvoidingIOS/KeyboardAvoidingIOS";

interface ModalWrapperProps {
  children: ReactNode;
}

const ModalWrapper = (props: ModalWrapperProps) => {
  const { children } = props;

  return (
    <View className="bg-[#1E1C2E] flex-1 flex-grow">
      <KeyboardAvoidingIOS>{children}</KeyboardAvoidingIOS>
    </View>
  );
};

export default React.memo(ModalWrapper);
