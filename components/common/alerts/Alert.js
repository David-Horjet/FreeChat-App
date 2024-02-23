import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

const CustomAlert = ({ message, type }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      showAlert();
    }
  }, [message]);

  const showAlert = () => {
    Alert.alert(
      type === "success" ? "Success" : "Error",
      message,
      [{ text: "OK", onPress: () => setVisible(false) }],
      { cancelable: false }
    );
  };

  return null;
};

export default CustomAlert;
