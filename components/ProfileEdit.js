import React from "react";
import { ScrollView, Text, View } from "react-native";
import TaskBar from "./TaskBar";

export default function ProfileEdit ({navigation}) {
    return ( 
        <View>
            <ScrollView>
                <TaskBar>
                    <Text>Im in Profile Edit components </Text>
                </TaskBar>
            </ScrollView>
        </View>
     );
}