import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import ImageIconPreviousState from "../ImageIconPreviousState";
import { Rating } from 'react-native-stock-star-rating';
import OwnerStyles from "../../styles/OwnerStyles";
let styles = OwnerStyles;

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flexGrow: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#f2f2f2', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <ImageIconPreviousState />

                    <View style={{ alignContent: 'center', alignItems: 'center' }}>
                        <Text style={[styles.txtStyle, { fontSize: 25, margin: 5, margin: 5 }]}> Maroof Sultan</Text>
                        <Text style={[styles.txtStyle, { fontSize: 25, margin: 5, marginTop: 2, textAlign: 'center' }]}> Age 20</Text>
                        <Rating stars={4.7} maxStars={5} size={25} />
                    </View>

                </View>

                <View style={{ flexGrow: 1, backgroundColor: '#f2f2f2', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.txtStyle, { fontSize: 25, margin: 5, marginTop: 2, textAlign: 'center' }]}>Location: </Text>
                    <Text style={[styles.txtStyle, { fontSize: 25, margin: 5, marginTop: 2, textAlign: 'center' }]}>Google Map</Text>
                </View>

                <View style={{ flexGrow: 1, backgroundColor: '#f2f2f2' }}>
                    <Text style={[styles.txtStyle, { marginBottom: 2, margin: 10, marginTop: 4, fontSize: 20 }]}>About</Text>
                    <ScrollView >
                        <TextInput
                            placeholder="Put Details about Your Self"
                            style={[styles.inputStyle, { width: '90%', height: 100, margin: 10, alignSelf: 'center', borderColor: 'black' }]}
                        />
                    </ScrollView>
                </View>

                <View style={{ flexGrow: 1, backgroundColor: '#f2f2f2', flexWrap: 'wrap' }}>
                    <Text style={[styles.txtStyle, { marginBottom: 2, margin: 10, marginTop: 10, fontSize: 20 }]}>Certifications</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <TextInput
                            placeholder="Review"
                            style={[styles.inputStyle, { borderColor: 'black' }]}
                        />
                        <TextInput
                            placeholder="Review"
                            style={[styles.inputStyle, { borderColor: 'black' }]}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>

    );
}