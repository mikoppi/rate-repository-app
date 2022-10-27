import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  button: {
    paddingBottom: 14,
  },
  text: {
    color: "white",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>something</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>something</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
