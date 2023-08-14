import HomeScreen from "../screens/Home";
import TakeAPhotoScreen from "../screens/TakeAPhoto";
import UploadScreen from "../screens/Upload";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Lettuce Check" component={HomeScreen} />
      <HomeStack.Screen name="Take a Photo" component={TakeAPhotoScreen} />
      <HomeStack.Screen name="Upload Image" component={UploadScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
