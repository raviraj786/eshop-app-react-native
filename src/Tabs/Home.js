import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Bars3BottomLeftIcon,
  Bars3CenterLeftIcon,
  Bars3Icon,
  BellIcon,
  CurrencyRupeeIcon,
  HeartIcon,
  HomeIcon,
  HomeModernIcon,
  InboxIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  SparklesIcon as SparklesIconOutline,
  UserCircleIcon,
  UserIcon,
} from "react-native-heroicons/outline";

import Header from "../../Componets/Header";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/slices/ProductSlices";

export default function Home() {
  const navigation = useNavigation();

  const [product, setProduct] = useState("");


const dispatch = useDispatch();



  useEffect(() => {
    const getProduct = async () => {
      const product = await fetch("https://fakestoreapi.com/products");
      const data = await product.json();
      setProduct(data);
      // console.log(data);
      dispatch(addProduct(data));
    };

    getProduct();
  }, []);

  return (
    <View style={styles.mainCantiner}>
      <Header
        title={"E - STORE"}
        onPressLeftIcon={() => navigation.toggleDrawer()}
        // icon={<ShoppingBagIcon color="#ffff" size={35} />}
 

IconLeft={<Bars3CenterLeftIcon  color='#fff' size={35}  />}
IconRight={<ShoppingBagIcon color='#fff' size={35}/>}

      />
      <View style={{ backgroundColor: "#fff" }}>
        <Text style={styles.h1}>
          <Text style={styles.h2}>Store.</Text>The best way to buy the products
          you love.
        </Text>
      </View>

      <FlatList
        data={product}
        renderItem={({ item, index }) => {
          return (
            

           
            <TouchableOpacity 
             activeOpacity={1}
             onPress={() => {
                navigation.navigate('Product' ,{data:item})
             }}
            
            style={styles.productList}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={{ marginLeft: 15, marginTop: 2 }}>
                <Text style={styles.title}>
                  {item.title.length > 20
                    ? item.title.substring(0, 20) + "..."
                    : item.title}
                </Text>

                <Text style={styles.description}>
                  {item.description.length > 30
                    ? item.description.substring(0, 30) + "..."
                    : item.description}
                </Text>
                <Text style={styles.price}> {'$' + item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCantiner: {
    flex: 1,
  },
  hedaer: {
    height: 80,
    backgroundColor: "#000",
    width: "100%",
  },
  siideIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 35,
  },
  h1: {
    margin: 10,
    fontWeight: "800",
    fontSize: 25,
    color: "#6E6E73",
  },
  h2: {
    color: "#000",
    fontSize: 30,
  },
  productList: {
    width: Dimensions.get("window").width,
    height: 100,
    marginTop: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
  },
  price: {
    fontSize: 18,
    color: "red",
    fontWeight: "700",
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
  },
  description: {
    fontSize: 15,
    color: "#002",
  },
});
