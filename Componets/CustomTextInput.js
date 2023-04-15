import { View, Text ,StyleSheet ,Image ,TextInput } from 'react-native'
import React from 'react'

export default function CustomTextInput({value,onChangeText,placeholder,icon,type ,keyboardType}) {
  return (
    <View style={styles.TextInput}>
{/* <Image source={icon} style={{with:30,height:30}}  /> */}
<View>
  {icon}
</View>


<TextInput  placeholder={placeholder} 
secureTextEntry={ type == 'password' ? true : false}
style={{marginTop:-25 ,marginLeft:50}}
value={value}
onChangeText={text =>{
  onChangeText(text);
}}
keyboardType={keyboardType ? keyboardType :'default'}

/>


    </View>
  )
}


const styles = StyleSheet.create({
    TextInput:{
        height:50,
        width:'85%',
        borderWidth:1,
        borderRadius:5,
        margin:10,
        alignSelf:'center',
        padding:10
    }
  })