import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Owner from "./screens/Owner";
import Customer from "./screens/Customer";
import Next from "./screens/Next";
import RegisterHome from "./screens/RegisterHome";
import ProfileEditOwner from "./screens/ProfileEditOwner";
import Inbox from "./screens/Inbox";
import History from "./screens/History";
import TaskBar from "./components/taskBar/TaskBar";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <stack.Screen
          name="Owner"
          component={Owner}
          options={{ title: 'Owner Details' }}
        />
        <stack.Screen
          name="Customer"
          component={Customer}
        />
        <stack.Screen
          name="Next"
          component={Next}
        />
        <stack.Screen
          name="RegisterHome"
          component={RegisterHome}
        />
        <stack.Screen
          name="ProfileEditOwner"
          component={ProfileEditOwner}
        />
        <stack.Screen
          name="Inbox"
          component={Inbox}
        />
        <stack.Screen
          name="History"
          component={History}
        />
        <stack.Screen
          name="Tab"
          component={TaskBar}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}