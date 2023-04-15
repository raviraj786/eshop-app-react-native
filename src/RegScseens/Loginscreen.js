import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../../Componets/CustomTextInput";
import {
  InboxIcon,
  SparklesIcon as SparklesIconOutline,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";
import { SparklesIcon } from "react-native-heroicons/solid";
import CustomButton from "../../Componets/CustomButton";
import CustomTextTitle from "../../Componets/CustomTextTitle";
import { useNavigation } from "@react-navigation/native";

export default function Loginscreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bademail, setBedemail] = useState("");
  const [badPassword, setBadpassword] = useState("");

  const validate = () => {
    // const validate = false;
    if (email == "") {
      setBedemail(true);
    }else{
      setBedemail(false)
    }
    if (password == "") {
      setBadpassword(true);
    }else{
      setBadpassword(false)
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "800", alignSelf: "center" }}>
        login
      </Text>

      <CustomTextInput
        placeholder={"Enter Email Id"}
        icon={<InboxIcon size={30} color="#000" />}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      {bademail === true && (
        <Text style={{ color: "red" ,marginLeft:30}}>please enter email</Text>
      )}

      <CustomTextInput
        placeholder={"Enter Password"}
        icon={<InboxIcon size={30} color="#000" />}
        type={"password"}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />

      {badPassword === true && (
        <Text style={{ color: "red"  ,marginLeft:30}}>please enter password</Text>
      )}

      <CustomButton
        title={"Login"}
        bgColor={"#000"}
        textcolor={"#ffff"}
        onPress={() => {
          validate();
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("signup");
        }}
      >
        <CustomTextTitle
          text={"Create New Account ?"}
          color={"#000"}
          alignSelf={"center"}
          fontWeight={"bold"}
        />
      </TouchableOpacity>
    </View>
  );
}
