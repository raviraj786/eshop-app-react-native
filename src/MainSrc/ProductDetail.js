import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../Componets/Header";
import CustamBtn from "../../Componets/CustamBtn";
import {
  ArrowSmallLeftIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProductDetail() {




  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.mainCantiner}>
     
        <Header
          title={"Product Details"}
          IconLeft={<ArrowSmallLeftIcon size={30} color="#fff" />}
          IconRight={<ShoppingBagIcon size={30} color="#fff" />}

          onPressLeftIcon={() => {
            navigation.goBack();
          }}
        />

<ScrollView>

        <Image
          source={{ uri: route.params.data.image }}
          style={styles.banner}
        />

    <TouchableOpacity style={{
      position:'absolute',
      right:20,
      top:100,
      justifyContent:'center',
      alignSelf:'center',
    backgroundColor:"#F2F2F2",
    alignItems:'center',
    width:50,
    height:50,
    borderRadius:25
      
    }}>
      <HeartIcon size={30} color='#000'/>
    </TouchableOpacity>



        <Text style={styles.title}>{route.params.data.title}</Text>
        <Text style={styles.description}>{route.params.data.description}</Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.price, { color: "#000" }]}>{"Price:"}</Text>
          <Text style={styles.price}>{"$" + route.params.data.price}</Text>
        </View>

        <CustamBtn
          title={"Add to card"}
          color={"#fff"}
          bg={"red"}
          onClick={() => {}}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainCantiner: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    width: "100%",
    height: 300,
    resizeMode: "center",
  },
  title: {
    fontSize: 22,
    color: "#000",
    fontWeight: "600",
    marginTop: 20,
    marginLeft: 20,
  },
  description: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginTop: 10,
    marginLeft: 20,
    width: "90%",
  },
  price: {
    fontSize: 22,
    color: "green",
    fontWeight: "600",
    marginTop: 20,
    marginLeft: 20,
  },
});
