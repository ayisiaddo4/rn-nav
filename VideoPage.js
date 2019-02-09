import React from "react";
import { TouchableOpacity, View, StyleSheet, WebView } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

//import Video from 'react-native-video';

import { Video } from "expo";

class VideoPage extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 5,
          backgroundColor: "#eee"
        }}
      >
        <WebView
          style={{ flex: 1, padding: 20 }}
          javaScriptEnabled={true}
          source={{
            uri:
              "https://www.youtube.com/embed/fAoMjiFPKUw?rel=0&autoplay=0&showinfo=0&controls=0"
          }}
        />
       
      </View>
    );
  }
}



export default (VideoStack = createStackNavigator({
  VideoPage: {
    screen: VideoPage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Video",
      headerLeft: (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Ionicons name="md-menu" size={35} />
          </TouchableOpacity>
        </View>
      )
    })
  }
}));