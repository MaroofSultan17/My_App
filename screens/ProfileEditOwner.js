import React from "react";
import { ScrollView, View, Text } from "react-native";
import TaskBar from "../components/TaskBar";
export default function ProfileEditOwner({ navigation }) {
    return (
        <TaskBar Navigation={navigation}>
            <View>
                <Text>
                    Maroof sultan
                </Text>
            </View>
        </TaskBar>
    );
}