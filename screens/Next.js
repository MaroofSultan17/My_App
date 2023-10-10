import { Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import OwnerStyles from '../styles/OwnerStyles';
import UploadImage from "../components/UploadImage";
import DropDown from "../components/DropDown";
import { useState } from "react";
import UploadDocument from "../components/UploadDocument";
let styles = OwnerStyles;

export default function Next({ navigation }) {
    const [email, setemail] = useState('');
    const [mob, setmob] = useState('');
    const [dob, setdob] = useState('');
    function conditionchk(props) {
        if (!(email && mob && dob) == '') {
            navigation.navigate("RegisterHome");
        }
        else{
            navigation.navigate("Tab");
            // console.warn("Fill all the fields");
        }
    }
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.txtStyle, { textAlign: 'justify' }]}>
                        Personal Details
                    </Text>
                </View>
                <View>
                    <UploadImage />
                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <TextInput placeholder='Contact No'
                            style={[styles.inputStyle, styles.inputChnage]}
                            onChangeText={(val) => setemail(val)}
                        />
                        <TextInput placeholder='CNIC'
                            style={[styles.inputStyle,
                            styles.inputChnage]}
                            onChangeText={(val) => setmob(val)}
                        />
                        <TextInput placeholder='Address'
                            style={[styles.inputStyle,
                            styles.inputChnage]}
                            onChangeText={(val) => setdob(val)}
                        />
                    </View>
                    <View style={{ flex: 1, width: '90%' }}>
                        <DropDown />
                    </View>
                    <View style={{ flex: 1, width: '70%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.txtStyle, { fontSize: 13, textAlign: 'left', marginLeft: 20, fontWeight: '700' }]}>Upload Doc:        </Text>
                        {/* <TextInput placeholder="Enter Contact" style={[styles.inputStyle, styles.inputChnage]} /> */}
                        <UploadDocument/>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => conditionchk()}>
                            <Text style={[styles.buttonStyle, styles.loginMarigin]}> Register </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

