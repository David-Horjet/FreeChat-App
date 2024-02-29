// src/components/styled.js
import styled from "styled-components/native";
import { theme } from "../../theme";

export const FormContainer = styled.View`
  font-family:"Noto-Sans";
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Container = styled.View`
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
  color: #9442fe;
  font-weight: 500;
  font-size: 32px;
`;

export const DescriptionContainer = styled.View`
  padding-bottom: 20px;
`;

export const DescriptionText = styled.Text`
  color: #7f8c8d;
  text-align: center;
  line-height: 20px;
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
  background-color: #9442fe;
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

export const Header = styled.View`
  padding: 30px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333333; /* Add your header text color */
`;

export const ContactItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-bottom-width: 1px;
  border-color: #dddddd; /* Add your border color */
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`;

export const ContactInfo = styled.View`
  flex: 1;
`;

export const ContactName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333333; /* Add your contact name color */
`;
