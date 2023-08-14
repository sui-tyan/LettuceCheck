import HistoryScreen from "../screens/History";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HistoryStack = createNativeStackNavigator();

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="Lettuce Check" component={HistoryScreen} />
    </HistoryStack.Navigator>
  );
}

export default HistoryStackScreen;
