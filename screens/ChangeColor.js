
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

function ChangeColor (props) {
    const colorHight = props.hightlight ? 'black' : 'red';
    return(
        <View>
            <TouchableOpacity onPress={() => {
                props.dispatch({type: 'CHANGE_COLOR'});
            }}>
                <Text style={{fontSize: 20, colorHight}}>Change color</Text>
            </TouchableOpacity>
        </View>
    );
}


export default connect()(ChangeColor);