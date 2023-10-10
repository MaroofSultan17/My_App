// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';

// export default function HomeScreen({navigation}) {
//   return (
//     <View style={styles.container}>
//       <Button title='Navigate to second screen with french'
//       onPress={()=>navigation.navigate("Second", {language: 'French'})}
//       />
//       <Button title='Navigate to second screen with English'
//       onPress={()=>navigation.navigate("Second", {language: 'English'})}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginTop: 100, fontWeight: 'bold', color: 'black' }}>Welcome To Repair Master</Text>
      <Text style={{ fontSize: 50, textAlign: 'center', margin: 30, fontWeight: 'bold' }}> Sign Up</Text>
      <View style={{ flex: 1, allignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate("Owner", { selection: 'Owner' })}>
          <Text style={styles.buttonStyle}> Owner </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Customer")}>
          <Text style={styles.buttonStyle}> Customer </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, allignItems: 'center' }}>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 30, fontWeight: 'bold' }}>OR</Text>
        <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20 }}>Already has an Account</Text>
      </View>
      <View style={{ flex: 1, allignItems: 'center', flexWrap: 'wrap' }}>
        <TouchableOpacity>
          <Text style={[styles.buttonStyle, styles.loginMarigin]}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    // backgroundColor: 'lightblue'
  },
  buttonStyle: {
    backgroundColor: '#333',
    height: 50,
    width: 250,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 50,
    color: 'white',
  },
  loginMarigin: { marginTop: 5, backgroundColor: '#333', borderColor: 'white' }
});

