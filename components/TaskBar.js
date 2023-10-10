import { View, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';


export default function TaskBar({ Navigation }) {

  return (
    <View style={{ marginTop: 100, flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', backgroundColor: 'white' }}>
      <TouchableOpacity onPress={() => Navigation.navigate("ProfileEditOwner")}>
        <AntDesign name="form" size={75} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate("Inbox")}>
        <MaterialIcons name="message" size={75} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="home" size={75} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate("History")}>
        <MaterialIcons name="history" size={75} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="handshake" size={75} color="black" />
      </TouchableOpacity>
    </View>
  );
}
