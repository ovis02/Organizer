import React from "react";
import { Image } from "react-native";

const Logo = () => {
  return (
    <Image
      source={require("../assets/images/stylo.png")}
      style={{ width: 150, height: 150 }}
    />
  );
};

export default Logo;
