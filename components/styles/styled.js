// src/components/styled.js
import styled from "styled-components/native";
import { theme } from "../../theme";

export const FormContainer = styled.View`
  /* font-family:"NotoSans-VariableFont_wdth,wght"; */
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
`;

export const LogoImage = styled.Image`
  width: 35px;
  height: 35px;
`;

export const HeadingText = styled.Text`
  padding-top: 70px;
  color: #000;
  font-weight: 500;
  font-size: 32px;
`;

export const DescriptionContainer = styled.View`
  padding-bottom: 20px;
`;

export const DescriptionText = styled.Text`
  color: #7f8c8d;
  text-align: center;
`;

export const InputContainer = styled.View`
  margin-bottom: 15px;
`;

export const InputLabel = styled.Text`
  color: #7f8c8d;
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Input = styled.TextInput`
  background-color: #ecf0f1;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: #2c3e50;
  font-size: 14px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #3498db;
  padding: 12px;
  margin: 20px 0;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

export const BottomText = styled.Text`
  color: #2c3e50;
  font-size: 14px;
  text-align: center;
`;

export const LinkText = styled.Text`
  color: #4e0eff;
  font-weight: bold;
`;
