import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";

const SaisieDonneesBloc = () => {
  const [nouvelleTache, setNouvelleTache] = useState("");

  const ajouterTache = () => {
    // Vous pouvez utiliser la valeur de "nouvelleTache" comme bon vous semble
    console.log("Nouvelle tâche:", nouvelleTache);
    // Ajoutez ici la logique pour traiter la nouvelle tâche
    // Par exemple, vous pouvez mettre à jour l'état global des tâches
  };
  const [fontsLoaded] = useFonts({
    "IngridDarling-Regular": require("../assets/fonts/IngridDarling-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Entrer votre prochaine tâche:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Saisissez votre tâche"
          value={nouvelleTache}
          onChangeText={(text) => setNouvelleTache(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={ajouterTache}>
        <Text style={styles.buttonText}>Ajouter une tâche</Text>
      </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
  titre: {
    fontSize: 20,
    marginBottom: 5,
    color: "white",
    fontFamily: "IngridDarling-Regular",
  },
  inputContainer: {
    backgroundColor: "white",
    width: 250,
    height: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#EADC1A",
    width: 250,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#72953A",
  },
});

export default SaisieDonneesBloc;
