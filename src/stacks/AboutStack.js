import AboutScreen from "../screens/About";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AboutStack = createNativeStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="Lettuce Check" component={AboutScreen} />
    </AboutStack.Navigator>
  );
}

export default AboutStackScreen;
