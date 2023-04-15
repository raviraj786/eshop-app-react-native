import { View, Text ,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../Componets/Header'
import { LockClosedIcon, MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/outline'
import { useState } from 'react'
import { useAnimatedGestureHandler } from 'react-native-reanimated'

export default function Search() {
  const product = useSelector(state=>state)
  console.log(JSON.stringify(product.product.data))


  const [search ,setSearch] = useState('')

  
  const [oldData ,setOldData] = useState(product.product.data)

  const [searchlist,setSearchlist] = useState('')
  const filterData = txt =>{
   let newData = oldData.filter(item =>{
    return item.title.toLowerCase().match(txt.toLowerCase());

   });
  //  console.log(newData)
   searchlist(newData)
  }
















  return (
    <View style={styles.continer}>
 <Header
 title={"Search items"}
 />
<View style={styles.searchview}>

  <View style={{flexDirection:'row',alignItems:'center'}}>

  <MagnifyingGlassIcon color='#000' size={35} style={styles.icon}/>

<TextInput 
value={search}
onChangeText={txt =>{
  setSearch(txt);
  filterData(txt)
}}

placeholder='Search item here....' style={styles.input}/>

  </View>


{search !== '' && (<TouchableOpacity style={styles.icon}>
<XMarkIcon  color='#000' size={35} />
</TouchableOpacity>)}



</View>

<FileList
data={searchlist}
renderItem={() => {
  return(

      <View>

    <Text>{}</Text>
      </View>
  )
} }
/>


      <Text>Search</Text>
    </View>
  )
}


const styles = StyleSheet.create({
continer:{
  flex:1,
  backgroundColor:'#ffff',
},
searchview:{
  width:'90%',
  height:50,
  borderRadius:20,
  borderWidth:0.5,
  alignSelf:'center',
  marginTop:20,
  flexDirection:'row',
  justifyContent:'space-between',

  
},
icon:{
  margin:10
},
input:{
  width:'60%',
  height:50

}

})