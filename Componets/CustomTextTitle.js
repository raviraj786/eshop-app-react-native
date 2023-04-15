import { View, Text } from 'react-native'
import React from 'react'

export default function CustomTextTitle({text ,color , fontWeight ,alignSelf ,marginTop}) {
  return (
    <View>
      <Text style={{
        color:color,
        fontWeight:fontWeight,
        alignSelf:alignSelf,
        marginTop:10,
        textDecorationLine:'underline'
          
        
      }} >{text}</Text>
    </View>
  )
}