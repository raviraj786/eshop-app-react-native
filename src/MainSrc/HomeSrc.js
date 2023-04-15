import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {
  Bars3BottomLeftIcon,
  Bars3Icon,
  BellIcon,
  HeartIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  SparklesIcon as SparklesIconOutline,
  UserCircleIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Home from "../Tabs/Home";
import Search from "../Tabs/Search";
import Notifaction from "../Tabs/Notifaction";
import Wishlist from "../Tabs/Wishlist";
import User from "../Tabs/User";

export default function MainSrc() {
  const [selctedTab, setSelctedTab] = useState(0);

  return (
    <View style={styles.mainCantiner}>
      {/* bottom */}

      {selctedTab == 0 ? (
        <Home />
      ) : selctedTab == 1 ? (
        <Search />
      ) : selctedTab == 2 ? (
        <Notifaction />
      ) : selctedTab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}

      <View style={styles.bottomTab}>
        <TouchableOpacity
          onPress={() => {
            setSelctedTab(0);
          }}
        >
          <HomeIcon size={30} color={selctedTab == 0 ? "red" : "#000"} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelctedTab(1);
          }}
        >
          <MagnifyingGlassIcon
            size={30}
            color={selctedTab == 1 ? "red" : "#000"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelctedTab(2);
          }}
        >
          <HeartIcon size={30} color={selctedTab == 2 ? "red" : "#000"} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelctedTab(3);
          }}
        >
          <BellIcon size={30} color={selctedTab == 3 ? "red" : "#000"} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelctedTab(4);
          }}
        >
          <UserIcon size={30} color={selctedTab == 4 ? "red" : "#000"} />
        </TouchableOpacity>
      </View>
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

  bottomTab: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
