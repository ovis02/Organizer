import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StatistiquesBloc = () => {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.label}> Tâches à faire</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>0</Text>
        </View>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.label}> Tâches terminées</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>0</Text>
        </View>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.label}> Total des tâches</Text>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>0</Text>
        </View>
      </View>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskContainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#EADC1A",
    borderRadius: 5,
    width: 250,
    height: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "#72953A",
    fontSize: 16,
  },
  counterContainer: {
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#72953A",
  },
});

export default StatistiquesBloc;
