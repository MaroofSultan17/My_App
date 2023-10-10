import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import OwnerStyles from '../styles/OwnerStyles';
import { View, Text } from "react-native";
let styles = OwnerStyles;

const DropDown = () => {
    const [selected, setSelected] = React.useState([]);
    let data = [
        {
            ker: '1', value: "Mobile", disabled: false
        },
        {
            key: '2', value: 'Led'
        },
        {
            key: '3', value: 'Electrician'
        },
        {
            key: '4', value: 'Computers', disabled: false
        },
        {
            key: '5', value: 'Vegetables'
        },
        {
            key: '6', value: 'Diary Products'
        },
        {
            key: '7', value: 'Drinks'
        },
    ]
    return (

        <View style={{ width: '65%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <Text style={[styles.txtStyle, { fontSize: 13, textAlign: 'left', marginLeft: 20, fontWeight: '700' }]}>Select Work:</Text>
            <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                onSelect={() => alert(selected)}
                label="Categories"
                boxStyles={[styles.inputStyle, styles.inputChnage, { alignContent: 'center', alignSelf: 'center' }]}
            />
        </View>


    );
}

export default DropDown;