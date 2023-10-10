import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ImageIconPreviousState = ({image}) => {
    // image prob as a uri hai jo image set ki thi previous mn
    return ( 
        <View style={imageUploaderStyles.container}>
            {/* {
                presetImg && <Image source={{ uri: presetImg }} style={{ width: 200, height: 200 }} />
            } */}
            <View style={imageUploaderStyles.uploadBtnContainer}>
                {/* <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} > */}
                <TouchableOpacity style={imageUploaderStyles.uploadBtn} >
                    <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                    <AntDesign name="camera" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default ImageIconPreviousState;

const imageUploaderStyles = StyleSheet.create({
    container: {
        elevation: 2,
        height: 150,
        width: 150,
        backgroundColor: '#efefef',
        position: 'relative',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
        borderColor: 'lightblack',
        borderWidth: 1
    },
    uploadBtnContainer: {
        opacity: 0.7,
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'lightgrey',
        width: '100%',
        height: '30%'
    },
    uploadBtn: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    }
})