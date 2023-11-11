import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "./composants/Logo";
import OrganisateurTitre from "./composants/OrganisateurTitre";
import StatistiquesBloc from "./composants/StatistiquesBloc";
import SaisieDonneesBloc from "./composants/SaisieDonneesBloc";
import AffichageDonneesBloc from "./composants/AffichageDonneesBloc";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.content}>
          <Logo />
          <OrganisateurTitre />
        </View>
        <View style={styles.bloc}>
          <StatistiquesBloc />
        </View>
        <View style={styles.bloc}>
          <SaisieDonneesBloc />
        </View>
        <View style={styles.bloc}>
          <AffichageDonneesBloc />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    backgroundColor: "rgba(234, 220, 26, 0.2)",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  bloc: {
    marginBottom: 30,
  },
});
