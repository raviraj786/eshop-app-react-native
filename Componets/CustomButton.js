import { View, Text  ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function CustomButton({onPress ,title , bgColor ,textcolor}) {
  return (
    <TouchableOpacity
    style={{
        backgroundColor:bgColor,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:'85%',
        alignSelf:'center',
        marginTop:50,
        borderRadius:5

    }}

    
    onPress={() =>{
        onPress();
        }}
    >
      


        <Text style={{color:textcolor}}>{title}</Text>

    </TouchableOpacity>
  )
}