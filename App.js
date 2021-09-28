import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExampleScreen from "./screens/ExampleScreen";

import { createStore} from 'redux';
import { Provider } from 'react-redux';

//create start
const defaultState = {value: 0, hightlight: false};

//create reduce
const reducer = (state = defaultState, action) => {
  switch (action.type){
    case 'UP':
      return {value: state.value +1, hightlight: state.hightlight};
    case 'DOWN':
      return  {value:state.value -1, hightlight: state.hightlight};
    case 'CHANGE_COLOR':
      return {value: state.value, hightlight: !state.hightlight};
    default:
      return state;
  }
}

const store = createStore(reducer);

export default function App() {
  return (
    <View style ={styles.container}>

      {/*
      tích hợp redux store vào react app
      */}
      <Provider store ={store}>
        <ExampleScreen/>
      </Provider>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  });


