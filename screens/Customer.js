import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import OwnerStyles from '../styles/OwnerStyles';
let styles = OwnerStyles;

export default function Customer({ navigation, route }) {
    const [radio, setradio] = useState(0);
    // let selection = route.params.selection;
    // let greeding = selection === 'Owner' ? 'Welcome to owner' : 'Welcome to the Customer'
    // return(
    //      {/* <Text>{greeding}</Text>
    //         <StatusBar style="auto" />
    //         <Button
    //             title='Press for third screen'
    //             onPress={() => navigation.push("Third")}
    //         />
    //         <Button
    //             title='Press for third screen with replace'
    //             onPress={() =>{
    //                 navigation.dispatch(
    //                     StackActions.replace("Third")
    // );}}
    // /> */}
    // );
    return (
        <View style={styles.container}>
            <View style={{ flex: 0 }}>
                <Text style={styles.txtStyle}>
                    Welcome to Customer
                </Text>
            </View>
            <View style={[styles.inputFlex]}>
                <ScrollView>
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <TextInput placeholder='First name' style={styles.inputStyle} />
                        <TextInput placeholder='Second name' style={styles.inputStyle} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
                        <TextInput placeholder='Email' style={[styles.inputStyle, styles.inputChnage]} />
                        <TextInput placeholder='Mobile' style={[styles.inputStyle, styles.inputChnage]} />
                        <TextInput placeholder='DOB' style={[styles.inputStyle, styles.inputChnage]} />
                        <TextInput placeholder='Password' style={[styles.inputStyle, styles.inputChnage]} />
                    </View>
                    <View style={{ flex: 0, marginTop: 80, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>Gender</Text>
                        <TouchableOpacity onPress={() => setradio(1)}>
                            <View style={styles.radioWrapper}>
                                <View style={styles.radio}>
                                    {
                                        radio === 1 ? <View style={styles.radiobg}></View> : null
                                    }
                                </View>
                                <Text style={styles.radioText}>Male </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setradio(2)}>
                            <View style={styles.radioWrapper}>
                                <View style={styles.radio}>
                                    {
                                        radio === 2 ? <View style={styles.radiobg}></View> : null
                                    }
                                </View>
                                <Text style={styles.radioText}>FeMale </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.popToTop()}>
                                <Text style={styles.buttonStyle}> Home </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Third")}>
                                <Text style={styles.buttonStyle}> Next </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
