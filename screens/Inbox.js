import React from "react";
import { ScrollView, View, Text } from "react-native";
import TaskBar from "../components/TaskBar";
export default function Inbox({ navigation }) {
    return (
        <TaskBar Navigation={navigation}>
            <View>
                <ScrollView>
                    <Text> Hi im in Inbox </Text>
                </ScrollView>
            </View>
        </TaskBar>
    );
}