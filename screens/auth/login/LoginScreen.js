import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  BottomText,
  ButtonText,
  DescriptionText,
  HeadingText,
  Input,
  InputContainer,
  InputLabel,
  LinkText,
  LogoContainer,
  FormContainer,
  LogoText,
  SubmitButton,
  DescriptionContainer,
} from "../../../components/styles/styled";
import CustomAlert from "../../../components/common/alerts/Alert";
import axios from "axios";
import { loginRoute } from "../../../utils/apiRoutes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  console.log(values);
  const [loading, setLoading] = useState(false);
  console.log(loading);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.navigate("ChatScreen");
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (handleValidation()) {
        const { password, username, email } = values;
        const { data } = await axios.post(loginRoute, {
          username,
          password,
        });
        console.log(data)
        if (data.status === false) {
          setAlertMessage(data.message);
          setAlertType("error");
          setLoading(false);
        }
        if (data.status === true) {
          await AsyncStorage.setItem("token", data.token);
          await AsyncStorage.setItem("user", JSON.stringify(data.user));
          setAlertMessage("Login successful!");
          setAlertType("success");
          setLoading(false);
          navigation.navigate("ChatScreen");
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error?.response?.data?.message) {
        setAlertMessage(error?.response?.data?.message);
      } else if (error.message) {
        setAlertMessage(error?.response?.data?.message);
      } else {
        setAlertMessage("Internal server error occurred");
      }
      setAlertType("error");
    }
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (username === "") {
      setLoading(false);
      setAlertMessage("Username is required");
      setAlertType("error");
      return false;
    } else if (password === "") {
      setLoading(false);
      setAlertMessage("Password is required");
      setAlertType("error");
      return false;
    }
    return true;
  };

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <FormContainer>
        <ScrollView>
          <LogoContainer>
            <HeadingText>Welcome Back</HeadingText>
          </LogoContainer>
          <DescriptionContainer>
            <DescriptionText>
              You must be missing your friends, Connect back with them now 😍
            </DescriptionText>
          </DescriptionContainer>
          <InputContainer>
            <InputLabel>Username</InputLabel>
            <Input
              placeholder="Horjet"
              onChangeText={(text) => handleChange("username", text)}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>Password</InputLabel>
            <Input
              placeholder="********"
              secureTextEntry
              onChangeText={(text) => handleChange("password", text)}
            />
          </InputContainer>

          <SubmitButton onPress={handleSubmit} disabled={loading}>
            {!loading ? (
              <ButtonText>Login</ButtonText>
            ) : (
              <ButtonText>Loading..</ButtonText>
            )}
          </SubmitButton>

          <BottomText>
            Don't have an account ?{" "}
            <LinkText onPress={() => navigation.navigate("RegisterScreen")}>
              Create account
            </LinkText>
          </BottomText>
        </ScrollView>
      </FormContainer>
      <CustomAlert message={alertMessage} type={alertType} />
    </>
  );
};

export default LoginScreen;
