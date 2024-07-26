import React from "react";
import type { TextInputProps } from "react-native";
import { TextInput, View } from "react-native";

interface InputProps extends TextInputProps {
  placeholder: string;
  value: string;
  autofocus?: boolean;
  onChangeInput: (value: string) => void;
}

const Input = (props: InputProps) => {
  const { value, placeholder, onChangeInput, autofocus, ...rest } = props;

  return (
    <View className={`bg-[#292636] rounded-lg p-4 w-full mb-5`}>
      <TextInput
        value={value}
        autoFocus={autofocus}
        onChangeText={onChangeInput}
        autoCapitalize="none"
        placeholder={placeholder}
        selectionColor={"#6429E4"}
        className="text-white "
        {...rest}
      />
    </View>
  );
};

export default Input;
