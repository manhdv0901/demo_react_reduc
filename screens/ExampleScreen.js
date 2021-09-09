import React from "react";
import {StyleSheet, Text, View} from "react-native";
import ControllerScreen from "./ControllerScreen";
import { connect} from "react-redux";

function ExampleScreen(props){
    return(
        <View style={styleApp.container}>
            <View style={styleApp.header}>
                <Text style={styleApp.appName}>EXAM 1: {'\n'}APP COMPONENT</Text>
                <Text style={styleApp.value}>{props.myValue}</Text>
            </View>
            <ControllerScreen/>
        </View>
    );
}

// share state component want to use
function mapSateToProps(state){
    return { myValue: state.value};
}

//function return function
export default connect(mapSateToProps)(ExampleScreen);

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
});