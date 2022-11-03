import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ backgroundColor: "green", padding: 16 }}>
          <Text>search</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "blue", padding: 16 }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
