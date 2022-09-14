import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Store'
import { decrement, increment } from './CounterSlices'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={{ margin: 10, padding: 10, backgroundColor: "skyblue" }}>
      <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", fontStyle: "italic" }}>Counter</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text style={{ fontSize: 25, color: "black", fontWeight: "bold", fontStyle: "italic" }}>+</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 25, color: "black", fontWeight: "bold", fontStyle: "italic" }}>{count}</Text>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text style={{ fontSize: 25, color: "black", fontWeight: "bold", fontStyle: "italic" }}>-</Text>
        </TouchableOpacity>
      </View>
      {/* <TextInput placeholder='enter the username' />
      <TouchableOpacity onPress={() => console.log("im stuti")}>
        <Text>click me</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})