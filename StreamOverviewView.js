import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import StreamItemCard from "../components/StreamItemCard";
import StartStreamButton from "../components/StartStreamButton";

export default class StreamOverviewView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: 360,
            marginTop: 36
          }}
        >
          <Text style={styles.text}>Hybrid Streamer</Text>
          <StreamItemCard style={styles.materialCardWithImageAndTitle} />
        </View>
        <View
          style={{
            flex: 1
          }}
        />
        <StartStreamButton style={styles.materialButtonDark3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(74,74,74,1)"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 16
  },
  materialCardWithImageAndTitle: {
    width: 360,
    marginTop: 15
  },
  materialButtonDark3: {
    height: 50
  }
});
