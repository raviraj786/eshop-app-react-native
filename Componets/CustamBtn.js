import { View, Text ,TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'

export default function CustamBtn({title ,color ,bg ,onClick} ) {
  return (
    <TouchableOpacity 
    style={[styles.btn ,{backgroundColor:bg} ]}

    onPress={() =>{
onClick()
    }}
    >

<Text style={{color:color ,alignSelf:'center', fontWeight:'500',fontSize:16}}>{title}</Text>

    </TouchableOpacity>
  )
}

const  styles = StyleSheet.create({
btn:{
    width:'80%',
    // backgroundColor:bg,
    height:50,
    alignSelf:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom:20,
    borderRadius:10,
    

}
})
