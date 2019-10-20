import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default class StreamViewCard extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          source={require("../assets/images/galaxy__free_phone_background_by_roguewinds_dbl2cxq-fullview.jpg")}
          resizeMode="contain"
          style={styles.cardItemImagePlace}
        />
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>Title goes here</Text>
            <Text style={styles.subtitleStyle}>Subtitle here</Text>
          </View>
          <View style={styles.actionBody}>
            <TouchableOpacity style={styles.actionButton1}>
              <Text style={styles.actionText1}>
                {this.props.actionText1 || "Back to menu"}
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
  }
});
