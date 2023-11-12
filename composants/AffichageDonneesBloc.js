import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AffichageDonneesBloc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Tâches</Text>
      <Text style={styles.message}>Il n'y a pas de tâche pour le moment.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    backgroundColor: "#72953A",
    borderRadius: 5,
    padding: 10,
  },
  titre: {
    fontSize: 16,
    marginBottom: 10,
    color: "#EADC1A",
  },
  message: {
    fontSize: 14,
    color: "#EADC1A",
  },
});

export default AffichageDonneesBloc;
