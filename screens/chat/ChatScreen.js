import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import { io } from "socket.io-client";
import { host, userRoute, usersRoute } from "../../utils/apiRoutes";
import { Container, Header, HeaderText } from "../../components/styles/styled";
import { AntDesign } from "@expo/vector-icons";
import LoginScreen from "../auth/login/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const socket = useRef();
  const navigation = useNavigation();

  const [user, setUser] = useState({});
  const [userToken, setUserToken] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contactLoading, setContactLoading] = useState(false);
  const [currentChat, setCurrentChat] = useState(undefined);

  // console.log("user", user);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((storedUserString) => {
        if (storedUserString) {
          const storedUser = JSON.parse(storedUserString);
          setUser(storedUser);
          // console.log("Retrieved user:", storedUser);
        } else {
          console.log("User not found in AsyncStorage");
        }
      })
      .catch((error) => console.error("Error retrieving user:", error));
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("token")
      .then((userToken) => {
        if (userToken) {
          setUserToken(userToken);
          console.log("Retrieved userToken:", userToken);
        } else {
          console.log("userToken not found in AsyncStorage");
        }
      })
      .catch((error) => console.error("Error retrieving userToken:", error));
  }, []);

  useEffect(() => {
    if (user) {
      socket.current = io(host);
      socket.current.emit("add-user", user._id);
    }
  }, [user]);

  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("userloading", loading);
  console.log("contactLoading", contactLoading);

  useEffect(() => {
    async function fetchUserData() {
      setLoading(true);
      try {
        console.log("userToken", userToken);
        const res = await axios.get(`${userRoute}/${user?.username}`, {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        });

        if (res.data.status === true) {
          setProfile(res.data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [user]);

  useEffect(() => {
    async function allUsers() {
      try {
        if (user) {
          setContactLoading(true);
          const res = await axios.get(usersRoute, {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          });

          if (res.data.status === true) {
            setContacts(res.data);
          }
        }
      } catch (error) {
        console.error("Error fetching all users:", error);
      } finally {
        setContactLoading(false);
      }
    }

    allUsers();
  }, [user]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("LoginScreen");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderText>Chats</HeaderText>
        <AntDesign
          onPress={handleLogout}
          name="profile"
          size={24}
          color="black"
        />
      </Header>
      {/* <FlatList
          data={contacts}
          // renderItem={renderContact}
        //   keyExtractor={(item) => item.id.toString()}
        /> */}
    </Container>
  );
};

export default ChatScreen;
