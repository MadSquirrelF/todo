import React from "react";
import type { ModalProps } from "react-native";
import { Modal } from "react-native";

export type ModalUIProps = Required<Pick<ModalProps, "onRequestClose">> &
  Omit<ModalProps, "onRequestClose">;

const ModalUI = ({ children, ...modalProps }: ModalUIProps) => {
  return (
    <Modal
      supportedOrientations={["portrait"]}
      {...modalProps}>
      {children}
    </Modal>
  );
};

export default React.memo(ModalUI);
