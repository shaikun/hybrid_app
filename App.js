import React, { Component } from "react";
import { NodeCameraView } from "react-native-nodemediaclient";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from "react-native";
import Video from "react-native-video";
import StreamViewCard from "./components/StreamViewCard";
import StreamItemCard from "./components/StreamItemCard";

const deviceWidth = Dimensions.get("window").width;

const settings = {
  camera: { cameraId: 1, cameraFrontMirror: true },
  audio: { bitrate: 32000, profile: 1, samplerate: 44100 },
  video: {
    preset: 24,
    bitrate: 400000,
    profile: 2,
    fps: 30,
    videoFrontMirror: true
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center"
  },
  nodePlayerView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  nodeCameraView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  playBtn: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#333",
    borderColor: "#333",
    borderWidth: 3,
    borderRadius: 2,
    height: 50,
    width: deviceWidth / 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 4,
    marginVertical: 10
  },
  playBtnContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    marginVertical: 20
  },
  goLive: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#d1a667",
    borderColor: "#d1a667",
    borderWidth: 3,
    borderRadius: 2,
    height: 50,
    width: deviceWidth / 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 4,
    marginVertical: 10
  },
  adminBtnContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 30,
    marginTop: 60
  },
  adminBtn: {
    backgroundColor: "#006D9E",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 4
  },
  btnText: { color: "#FFF", fontSize: 18 },
  StreamOverviewContainer: {
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
      height: 80
    },
    startStreamButton: {
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
    },
    StreamItemCardContainer: {
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
    },
    materialCardWithTextOverImage: {
      height: 740,
      backgroundColor: "rgba(74,74,74,1)",
      marginTop: 0
    }
});

export default class App extends Component {
  state = {
    admin: false,
    isPublishing: false,
    userComment: "",
    hasPermission: false,
    paused: false,
    streaming: false
  };

  changeStreamingTrue = () => {
    const { streaming } = this.state;
    this.setState({ streaming: true });
    this.onPressAdminBtn();
  }

  changeStreamingFalse = () => {
    const { streaming } = this.state;
    this.setState({ streaming: false });
    this.onPressAdminBtn();
  }

  onPressAdminBtn = async () => {
    const { admin: adminState, hasPermission } = this.state;
    this.setState({ admin: !adminState });
    if (!adminState) {
      if (Platform.OS === "android") {
        if (!hasPermission) {
          await this.checkPermissions();
        }
      }
    }
  };

  onPressPlayBtn = () => {
    const { paused: pausedState } = this.state;
    this.setState({ paused: !pausedState });
  };

  renderPlayerView = () => {
    const { paused } = this.state;
    const source = {
      uri: "https://stream.mux.com/aU2z61KYKRRB4p4AqgUgMK00GKTdOjVRP.m3u8"
    };
    return (
      <Video
        source={source} // Can be a URL or a local file.
        /* eslint-disable */
        ref={ref => {
          this.player = ref;
        }} // Store reference
        /* eslint-enable */
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.onError} // Callback when video cannot be loaded
        style={styles.nodePlayerView}
        fullscreen={false}
        resizeMode="cover"
        paused={paused}
      />
    );
  };

  onBuffer = buffer => {
    console.log("onBuffer: ", buffer);
  };

  onError = error => {
    console.log("onError: ", error);
  };

  renderCameraView = () => {
    const { hasPermission } = this.state;
    if (Platform.OS === "android" && !hasPermission) {
      return <View />;
    }
    
    return (
      <NodeCameraView
        style={styles.nodeCameraView}
        /* eslint-disable */
        ref={vb => {
          this.vb = vb;
        }}
        /* eslint-enable */
        outputUrl="rtmp://live.mux.com/app/556e2ad0-f801-9aa7-7579-0d481d6a646c"
        camera={settings.camera}
        audio={settings.audio}
        video={settings.video}
        autopreview
      />
    );
  };

  renderViewer = () => {
    const {streaming} = this.state;

    if(streaming){
      return this.getPublishStreamView();
    }else{
      return this.getWatchStreamView();
    }
  }
  getWatchStreamView = () => {
    return (
      <View style="flex:1">
        <StreamViewCard
        actionText1={""}
        title={"Watching"}
        subtitle={"1 viewers"}
        style={styles.materialCardWithTextOverImage}
        adminEvent={this.onPressAdminBtn}
        pauseEvent={this.onPressPlayBtn}
        paused={this.state.paused}
        >
        {this.renderPlayerView()}
        </StreamViewCard>
      </View>
    )
  }
  getPublishStreamView = () => {
    return (
      <View style="flex:1">
        <StreamViewCard
        actionText1={""}
        title={"Publishing"}
        subtitle={"0 viewers"}
        style={styles.materialCardWithTextOverImage}
        adminEvent={this.onPressAdminBtn}
        pauseEvent={this.onPressPublishBtn}
        paused={!this.state.isPublishing}
        >
        {this.renderCameraView()}
        </StreamViewCard>
      </View>
    )
  }
  getStreamOverview = () => {
    return (
      <View style={styles.StreamOverviewContainer}>
        <View
          style={{
            width: 360,
            marginTop: 36
          }}
        >
          <Text style={styles.text}>Hybrid Streamer</Text>
          <StreamItemCard title="Watch Stream" subtitle="0 viewers" press={this.changeStreamingFalse}></StreamItemCard>

        </View>
        <View
          style={{
            flex: 1
          }}
        />
        <TouchableOpacity style={styles.startStreamButton} onPress={this.changeStreamingTrue}>
            <Text style={styles.caption}>Start Stream</Text>
        </TouchableOpacity>
      </View>
    );
  }

  checkPermissions = async () => {
    console.log("Checking Permissions Android");
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ]);
      let hasAllPermissions = true;
      Object.keys(granted).forEach(key => {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        if (granted[key] !== "granted") {
          console.log("Does not have permission for: ", granted[key]);
          hasAllPermissions = false;
        }
      });
      console.log("hasAllPermissions: ", hasAllPermissions);
      this.setState({ hasPermission: hasAllPermissions });
    } catch (err) {
      console.warn(err);
    }
  };

  onPressPublishBtn = async () => {
    const { isPublishing: publishingState, hasPermission } = this.state;
    if (Platform.OS === "android") {
      if (!hasPermission) {
        this.checkPermissions();
        return;
      }
    }

    if (publishingState) {
      this.vb.stop();
    } else {
      this.vb.start();
    }

    this.setState({ isPublishing: !publishingState });
  };


  render() {
    const { admin, paused, isPublishing, streaming } = this.state;
    return (
       <View style={styles.container}>
       {admin ? this.renderViewer() : this.getStreamOverview()}
       {streaming}
       </View>

      //this.getStreamOverview("Hallo")

     /* <View style={styles.container}>
        {admin ? this.renderCameraView() : this.renderPlayerView()}

        {admin ? (
          <TouchableOpacity onPress={this.onPressPublishBtn}>
            <View style={styles.goLive}>
              <Text style={styles.btnText}>
                {isPublishing ? "END STREAM" : "START STREAM"}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.playBtnContainer}
            onPress={this.onPressPlayBtn}
          >
            <View style={styles.playBtn}>
              <Text style={styles.btnText}>{paused ? "PLAY" : "PAUSE"}</Text>
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.adminBtnContainer}
          onPress={this.onPressAdminBtn}
        >
          <View style={styles.adminBtn}>
            <Text style={styles.btnText}>
              {admin ? "LEECH VIEW" : "SEED VIEW"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>*/
    );
  }
}
