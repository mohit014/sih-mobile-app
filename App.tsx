import { StatusBar, StyleSheet, View } from "react-native";

import * as React from "react";
import { WebView } from "react-native-webview";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <MainApp />
    </SafeAreaProvider>
  );
}

const MainApp = () => {
  const inset = useSafeAreaInsets();
  return (
    <WebView
      style={[styles.container, { marginTop: inset.top }]}
      source={{ uri: "https://habitrack.vercel.app/app" }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
