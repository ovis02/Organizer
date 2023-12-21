import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const OrganisateurTitre = () => {
  const [fontsLoaded] = useFonts({
    "IngridDarling-Regular": require("../assets/fonts/IngridDarling-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Organisateur</Text>
      <Text style={styles.text}>de</Text>
      <Text style={styles.text}>tâches</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "#72953A",
    fontFamily: "IngridDarling-Regular",
  },
});

export default OrganisateurTitre;
