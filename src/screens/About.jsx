import { Text, View } from "react-native";

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>
        Lettuce Check a plant disease identifier for lettuce.
      </Text>
    </View>
  );
}

export default AboutScreen;
