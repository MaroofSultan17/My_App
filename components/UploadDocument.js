import React, { useState } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadDocument() {
    const [image, setImage] = useState(null);
    const addImage = async () => {
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            selectionLimit: false,
            quality: 1,
        });
        if (!_image.canceled) {
            setImage(_image.uri);
            console.warn("Selected");
        }
    }
    return (
        <View style={imageUploaderStyles.container}>
            {
                image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            }
            <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                    <Text>{image ? 'Edit' : 'Upload'} Document</Text>
                    <AntDesign name="plus" size={25} color="black"  />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const imageUploaderStyles = StyleSheet.create({
    container: {
        elevation: 2,
        height: 50,
        width: "70%",
        backgroundColor: '#efefef',
        position: 'relative',
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'center',
        marginLeft: 20
    },
    uploadBtnContainer: {
        // opacity: 0.7,
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'lightgrey',
        width: '100%',
        height: '100%',
        textAlignVertical: 'center'
    },
    uploadBtn: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    }
})