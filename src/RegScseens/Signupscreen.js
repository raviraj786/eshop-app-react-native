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
  UserIcon,
} from "react-native-heroicons/outline";
import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";
import { SparklesIcon } from "react-native-heroicons/solid";
import CustomButton from "../../Componets/CustomButton";
import CustomTextTitle from "../../Componets/CustomTextTitle";
import { useNavigation } from "@react-navigation/native";

export default function Signupscreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badname, setBadname] = useState("");

  const [email, setEmail] = useState("");
  const [bademail, setBademail] = useState("");

  const [mobile, setMobile] = useState("");
  const [badmobile, setBadmobile] = useState("");

  const [password, setPassword] = useState("");
  const [badPassword, setBadpassword] = useState("");

  const [confirmpassword, setConfirmassword] = useState("");
  const [badConfirmPassword, setBadconfirmpassword] = useState("");

  const validate = () => {
    if (email == "") {
      setBademail(true);
    } else {
      setBademail(false);
    }

    if (name == "") {
      setBadname(true);
    } else {
      setBadname(false);
    }

    if (password == "") {
      setBadpassword(true);
    } else {
      setBadpassword(false);
    }
    if (confirmpassword == "") {
      setBadconfirmpassword(true);
    } else {
      setBadconfirmpassword(false);
    }
    if (password !== confirmpassword) {
      setBadconfirmpassword(true);
    } else {
      setBadconfirmpassword(false);
    }

    if (mobile == "") {
      setBadmobile(true);
    } else if (mobile.length < 10) {
      setBadmobile(true);
    } else {
      setBadmobile(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "800", alignSelf: "center" }}>
        Craete New Account
      </Text>

      <CustomTextInput
        placeholder={"Name"}
        icon={<UserIcon size={30} color="#000" />}
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />

      {badname === true && (
        <Text style={{ color: "red", marginLeft: 30 }}>please enter name</Text>
      )}

      <CustomTextInput
        placeholder={"Mobile Number"}
        keyboardType={"number-pad"}
        icon={<InboxIcon size={30} color="#000" />}
        value={mobile}
        onChangeText={(text) => {
          setMobile(text);
        }}
      />
      {badmobile === true && (
        <Text style={{ color: "red", marginLeft: 30 }}>
          please enter mobile
        </Text>
      )}

      <CustomTextInput
        placeholder={"Enter Email Id"}
        icon={<InboxIcon size={30} color="#000" />}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      {bademail === true && (
        <Text style={{ color: "red", marginLeft: 30 }}>please enter email</Text>
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
        <Text style={{ color: "red", marginLeft: 30 }}>
          please enter password
        </Text>
      )}

      <CustomTextInput
        placeholder={"Confirm Password"}
        icon={<InboxIcon size={30} color="#000" />}
        type={"password"}
        value={confirmpassword}
        onChangeText={(text) => {
          setConfirmassword(text);
        }}
      />

      {badConfirmPassword === true && (
        <Text style={{ color: "red", marginLeft: 30 }}>
          please enter confirm password
        </Text>
      )}

      <CustomButton
        title={"Sign-up"}
        bgColor={"#000"}
        textcolor={"#ffff"}
        onPress={() => {
          validate();
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <CustomTextTitle
          text={"Already have Account ?"}
          color={"#000"}
          alignSelf={"center"}
          fontWeight={"bold"}
        />
      </TouchableOpacity>
    </View>
  );
}
