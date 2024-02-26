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
import { host, userRoute, usersRoute } from "../../../utils/apiRoutes";
import { Container, Header, HeaderText } from "../../../components/styles/styled";
import { AntDesign } from '@expo/vector-icons';
import BottomTabNavigator from "../../../components/shared/bottomTabNavigator/BottomTabNavigator";

const ChatScreen = () => {
  const socket = useRef();

  const [user, setUser] = useState({});
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentChat, setCurrentChat] = useState(undefined);

  useEffect(() => {
    if (user) {
      socket.current = io(host);
      socket.current.emit("add-user", user._id);
    }
  }, [user]);

  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      setLoading(true);
      const res = await axios.get(`${userRoute}/${user?.username}`);
      if (res.data.status === false) {
        setLoading(false);
      }
      if (res.data.status === true) {
        setLoading(false);
        setProfile(res.data.user);
      }
    }
    fetchUserData();
  }, []);

  useEffect(() => {
    async function allUsers() {
      try {
        if (user) {
          setIsLoading(true);
          const res = await axios.get(usersRoute);
          if (res.data.status === false) {
            setIsLoading(false);
          } else {
            setIsLoading(false);
            setContacts(res.data);
          }
        }
      } catch (error) {
        setIsLoading(false);
        handleErrors(error);
        console.log(error);
      }
    }
    allUsers();
  }, [user]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <Container>
      <Header>
        <HeaderText>Chats</HeaderText>
        <AntDesign name="profile" size={24} color="black" />
      </Header>
      {/* <FlatList
          data={contacts}
          // renderItem={renderContact}
        //   keyExtractor={(item) => item.id.toString()}
        /> */}
        <BottomTabNavigator/>
    </Container>
  );
};

export default ChatScreen;
