import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,Video } from "react-native";

export default class StreamViewCard extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>{this.props.title}</Text>
            <Text style={styles.subtitleStyle}>{this.props.subtitle}</Text>
          </View>
          <View style={styles.actionBody}>
            <TouchableOpacity style={styles.actionButton1} onPress={this.props.adminEvent}>
              <Text style={styles.actionText1}>
                {this.props.actionText1 || "Back to menu"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={this.props.pauseEvent}
            >
              <Text style={styles.text}>
                {this.props.paused ? "Start" : "Stop"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
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
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "rgba(74,74,74,1)",
    minHeight: 359
  },
  cardBody: {
    left: 0,
    width: 359,
    backgroundColor: "rgba(0,0,0,0.2)",
    position: "absolute",
    bottom: 0
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#FFF",
    paddingBottom: 12,
    fontSize: 24
  },
  subtitleStyle: {
    color: "#FFF",
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 16
  },
  actionBody: {
    flexDirection: "row",
    padding: 8
  },
  actionButton1: {
    height: 36,
    backgroundColor: "rgba(27,27,27,1)",
    opacity: 1,
    padding: 8,
    borderRadius: 10
  },
  actionText1: {
    color: "#FFF",
    opacity: 0.9,
    fontSize: 14
  },
  button: {
    width: 52,
    height: 36,
    backgroundColor: "rgba(27,27,27,1)",
    opacity: 1,
    marginLeft: 15,
    padding: 8,
    borderRadius: 10
  },
  text: {
    color: "#FFF",
    opacity: 0.9,
    fontSize: 14
  }
});
