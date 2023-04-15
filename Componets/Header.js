// import { View, Text , StyleSheet ,TouchableOpacity} from 'react-native'
// import React from 'react'
// import {
//     Bars3BottomLeftIcon,
//     BellIcon,
//     ShoppingBagIcon,
//     SparklesIcon as SparklesIconOutline,
//   } from "react-native-heroicons/outline";
// import { useNavigation } from '@react-navigation/native';

// export default function Header({
//   title ,
//   onPressLeftIcon,
//   onPressRightIcon,
//   leftIcon,
//   rightIcon

// }) {
//     const navigation = useNavigation()

//   return (
//     <View style={styles.Header}>
//        <View style={styles.siideIcon}>

{
  /* <TouchableOpacity 
onPress={() => onPressLeftIcon()}
>
  <Bars3BottomLeftIcon color="#ffff" size={30} />

</TouchableOpacity> */
}

// <Text style={{color:'#ffff' ,alignSelf:'center' ,fontWeight:'bold'}}>{title}</Text>

// <View>
//   <TouchableOpacity
//   onPress={() => onPressRightIcon()}
//   >
//    <ShoppingBagIcon color="#ffff" size={30} />
//   </TouchableOpacity>

// </View>
// </View>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
// Header:{
//     backgroundColor:'#000',
//     width:'100%',
//     height:100,

// },
// siideIcon:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     marginVertical:50,
//     marginHorizontal:10

// },

// })

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  ShoppingBagIcon,
  SparklesIcon as SparklesIconOutline,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function Header({
  title,
  onPressLeftIcon,
  onPressRightIcon,
  IconLeft,
  IconRight
}) {
  return (
    <View style={styles.Header}>
      

      <View style={{flexDirection:'row' ,justifyContent:'space-between',marginTop:45,margin:10}}>
        <TouchableOpacity onPress={() => onPressLeftIcon()}>
          {/* <Bars3BottomLeftIcon color="#ffff" size={30} /> */}
          {IconLeft}
        </TouchableOpacity>

        <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}>
          {title}
        </Text>

        <TouchableOpacity onPress={() => onPressRightIcon()}>
          {/* <ShoppingBagIcon color="#ffff" size={30} /> */}
          {IconRight}
                  </TouchableOpacity>




 



        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#000",
    width: "100%",
    height: 100,
   
    


  },
  siideIcon: {},
});
