import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ThirdScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text>ThirdScreen</Text>
      <Button 
      title='pop to root'
      onPress={()=>navigation.popToTop()}
      />
      <Button 
      title='pop'
      onPress={()=>navigation.pop()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
