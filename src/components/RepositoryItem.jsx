import React from "react";
import { Image, StyleSheet } from "react-native";
import { View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  logo: {
    width: 46,
    height: 42,
    borderRadius: 5,
  },
  upperContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-evenly",
  },
  lowerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: "white",
    borderRadius: 20,
    overflow: "hidden",
    padding: 50,
  },
  languageContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
  numberContainer: {
    display: "flex",
    alignItems: "center",
  },
});

const RepositoryItem = ({
  name,
  desc,
  language,
  stars,
  forks,
  reviews,
  rating,
  url,
}) => {
  return (
    <View>
      <View style={styles.upperContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: `${url}`,
          }}
        />
        <View style={{ marginLeft: 5, width: "70%" }}>
          <Text style={{ marginBottom: 5 }} fontWeight="bold">
            {name}
          </Text>
          <Text style={{ color: theme.colors.textSecondary, marginBottom: 5 }}>
            {desc}
          </Text>
          <View style={styles.languageContainer}>
            <Text
              style={{
                padding: 3,
                backgroundColor: theme.colors.primary,
                borderRadius: 8,
              }}>
              <Text style={styles.language}>{language}</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.numberContainer}>
          <Text fontWeight="bold">
            {stars > 1000 ? `${Math.trunc(stars / 100) / 10}k` : stars}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text fontWeight="bold">
            {forks > 1000 ? `${Math.trunc(forks / 100) / 10}k` : forks}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text fontWeight="bold">{reviews}</Text>
          <Text>Reviews</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text fontWeight="bold">{rating}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
