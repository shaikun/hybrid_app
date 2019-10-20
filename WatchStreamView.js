import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import StreamViewCard from "../components/StreamViewCard";

export default class WatchStreamView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StreamViewCard
          actionText1={""}
          style={styles.materialCardWithTextOverImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCardWithTextOverImage: {
    height: 740,
    backgroundColor: "rgba(74,74,74,1)",
    marginTop: 0
  }
});
