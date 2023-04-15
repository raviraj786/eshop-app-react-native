import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import Mainscreen from './Mainscreen'
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

export default function App() {
  return (
    <Provider store={store}>

<Mainscreen/>
    </Provider>
  )
  

}
