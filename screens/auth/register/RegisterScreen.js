import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import {
  BottomText,
  ButtonText,
  DescriptionContainer,
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
} from "../../../components/styles/styled";
import CustomAlert from "../../../components/common/alerts/Alert";
// import { ToastContainer, toast } from "react-native-toastify";
// import "react-native-toastify/dist/ReactToastify.css";
// import { Context } from "../context/Context";
// import axios from "axios";
// import { registerRoute } from "../utils/APIRoutes";
// import logo from "../assets/images/logo.png";
// import RoundLoader from "../components/Loaders/RoundLoader";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(values);
  const [loading, setLoading] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (handleValidation()) {
        const { password, username, email } = values;
        const { data } = await axios.post(registerRoute, {
          username,
          email,
          password,
        });
        if (data.status === false) {
          setAlertMessage(data.message);
          setAlertType("error");
          setLoading(false);
        }
        if (data.status === true) {
          setAlertMessage("Registration successful!");
          setAlertType("success");
          setLoading(false);
          navigation.navigate("SetImage");
        }
      }
    } catch (error) {
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
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      setAlertMessage("Password and Confirm password should be the same");
      setAlertType("error");
      return false;
    } else if (username.length < 4) {
      setAlertMessage("Username should be greater than 4 characters");
      setAlertType("error");
      return false;
    } else if (password.length < 4) {
      setAlertMessage("Password should be equal or greater than 4");
      setAlertType("error");
      return false;
    } else if (email === "") {
      setAlertMessage("Email is required");
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
            <HeadingText>Register</HeadingText>
          </LogoContainer>
          <DescriptionContainer>
            <DescriptionText>
              Make and chat over 100 friends per day 😎
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
            <InputLabel>Email</InputLabel>
            <Input
              placeholder="horjet@gmail.com"
              onChangeText={(text) => handleChange("email", text)}
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
          <InputContainer>
            <InputLabel>Confirm Password</InputLabel>
            <Input
              placeholder="********"
              secureTextEntry
              onChangeText={(text) => handleChange("confirmPassword", text)}
            />
          </InputContainer>
          <SubmitButton onPress={handleSubmit} disabled={loading}>
            {!loading ? (
              <ButtonText>Sign up</ButtonText>
            ) : (
              <ButtonText>Loading...</ButtonText>
            )}
          </SubmitButton>
          <BottomText>
            Already have an account ?{" "}
            <LinkText onPress={() => navigation.navigate("Login")}>
              Login
            </LinkText>
          </BottomText>
        </ScrollView>
        {/* <ToastContainer /> */}
      </FormContainer>
      <CustomAlert message={alertMessage} type={alertType} />
    </>
  );
};

export default RegisterScreen;
