import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
// import SkeletonContent from "react-native-skeleton-content";
import styled from "styled-components/native";

const Contact = ({
  item,
  //   changeCurrentChat,
  //   currentSelected,
  //   searchText,
  contactLoading,
}) => {
  console.log("real contacts", item);
  //   const rowSkelotons = 8;

  //   const truncate = (input) =>
  //     input?.length > 40 ? `${input.substring(0, 40)}...` : input;

  if (contactLoading) {
    //     let skelotonRows = [];
    //     for (let index = 0; index < rowSkelotons; index++) {
    //       skelotonRows.push(
    //         <TouchableOpacity key={index} disabled={true}>
    //           <View style={{ flexDirection: "row", alignItems: "center" }}>
    //             <View>
    //               <SkeletonContent
    //                 containerStyle={{ width: 40, height: 40, borderRadius: 20 }}
    //                 isLoading={true}
    //               />
    //             </View>
    //             <View style={{ paddingHorizontal: 2 }}>
    //               <SkeletonContent
    //                 containerStyle={{ width: 230, height: 25 }}
    //                 isLoading={true}
    //               />
    //               <SkeletonContent
    //                 containerStyle={{ width: 180, height: 25 }}
    //                 isLoading={true}
    //               />
    //             </View>
    //           </View>
    //         </TouchableOpacity>
    //       );
    //     }
    return (
      <View>
        <Text>Loading....</Text>
      </View>
      //       <SkeletonContainer>
      //         <SkeletonContent
      //           containerStyle={{ flex: 1, width: "100%" }}
      //           isLoading={true}
      //         >
      //           {skelotonRows}
      //         </SkeletonContent>
      //       </SkeletonContainer>
    );
  } else {
    return (
      <>
        <TouchableOpacity
          //   onPress={() => changeCurrentChat(index, contact)}
        >
          <View
            style={[
              styles.contact,
              //   index === currentSelected && styles.selected,
            ]}
          >
            <View style={styles.avatarContainer}>
              <Image source={{ uri: item.image }} style={styles.avatar} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.username}>{item.username}</Text>
              {item.about ? (
                <Text style={styles.about}>
                  {
                    // truncate(
                        item.about
                    // )
                  }
                </Text>
              ) : (
                <Text style={styles.about}>
                  Hey there 🤗, I'm on freechat 😍
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  }
};

const styles = {
  contact: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    // paddingHorizontal: 16,
  },
  selected: {
    backgroundColor: "#eee", // Adjust as needed
  },
  avatarContainer: {
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
  avatar: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  about: {
    fontSize: 12,
    color: "grey",
  },
};

// const SkeletonContainer = styled.View``;

export default Contact;
