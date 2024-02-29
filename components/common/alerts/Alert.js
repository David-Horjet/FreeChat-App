import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

const CustomAlert = ({ message, type }) => {
  console.log(type)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message && type) {
      setVisible(true);
      showAlert();
    }
  }, [message, type]);

  const showAlert = () => {
    Alert.alert(
      type,
      message,
      [{ text: "OK", onPress: () => setVisible(false) }],
      { cancelable: false }
    );
  };

  return null;
};

export default CustomAlert;
