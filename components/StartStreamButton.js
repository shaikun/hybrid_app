import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class StartStreamButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <Text style={styles.caption}>Start Stream</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    flex: 1,
    color: "#fff",
    fontSize: 14,
    textAlign: "center"
  }
});
