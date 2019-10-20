import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

export default class StreamItemCard extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to WatchStreamView")}
          style={styles.button}
        >
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>Title goes here</Text>
            <Text style={styles.subtitleStyle}>Subtitle here</Text>
          </View>
          <Image
            source={require("../assets/images/cardImage2.png")}
            style={styles.cardItemImagePlace}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(179,179,179,1)",
    opacity: 1,
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#000000",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  button: {
    height: 110,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 16
  },
  cardItemImagePlace: {
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    margin: 16
  }
});
