import { Button, Text, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button
        title="Take a Photo"
        onPress={() => navigation.navigate("Take a Photo")}
      />
      <Button
        title="Upload Image"
        onPress={() => navigation.navigate("Upload Image")}
      />
    </View>
  );
}

export default HomeScreen;
