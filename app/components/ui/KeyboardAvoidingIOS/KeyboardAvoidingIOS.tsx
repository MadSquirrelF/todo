import type { ReactNode } from "react";
import React from "react";
import { KeyboardAvoidingView } from "react-native";

import { IS_IOS } from "@/constants/constants";

interface KeyboardAvoidingIOSProps {
  children: ReactNode;
}

const KeyboardAvoidingIOS = ({ children }: KeyboardAvoidingIOSProps) => {
  //? empty wrapper
  if (!IS_IOS) {
    return <>{children}</>;
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex-grow"
      keyboardVerticalOffset={0}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default React.memo(KeyboardAvoidingIOS);
