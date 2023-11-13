import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AffichageDonneesBloc = ({ taches, onSupprimerTache }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Tâches</Text>
      {taches.length === 0 ? (
        <Text style={styles.message}>
          Il n'y a pas de tâche pour le moment.
        </Text>
      ) : (
        taches.map((tache) => (
          <View key={tache.id} style={styles.tacheContainer}>
            <Text>{tache.texte}</Text>
            <TouchableOpacity onPress={() => onSupprimerTache(tache.id)}>
              <Text style={styles.boutonSupprimer}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
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
  tacheContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  boutonSupprimer: {
    color: "red",
  },
});

export default AffichageDonneesBloc;
