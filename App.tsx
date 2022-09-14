import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/Store'
import Counter from './src/redux/slices/Counter'

const App = () => {
  return (
    //  wraps the whole app to globally access reducer
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})