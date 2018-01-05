import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";

import styles from "./styles";

import Points from "../Points/";

const UserInfo = props => {
  const { data: currentUserData } = props.currentUser;
  return (
    <View style={styles.container}>
      <View style={styles.leftInfoContainer}>
        <View>
          <Text style={styles.userName}>
            {currentUserData ? currentUserData.name : null}
          </Text>
        </View>
        <View style={styles.pointsContainer}>
          <Points points={-3} />
          <Points points={7} />
        </View>
      </View>
      <View style={styles.photoWrapper}>
        <Image
          style={styles.photo}
          source={{
            uri: `${currentUserData ? currentUserData.photoURL : null}`
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(UserInfo);
