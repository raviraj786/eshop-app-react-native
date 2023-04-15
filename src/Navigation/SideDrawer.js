import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeSrc from '../MainSrc/HomeSrc';
import { View, Text } from 'react-native';


import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';



function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}  style={{backgroundColor:'#161617'}}>
      <DrawerItemList {...props} 

      />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}



const Drawer = createDrawerNavigator();



export default function SideDrawer() {
  return (
    <Drawer.Navigator   
    useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeSrc}  options={{ headerShown: false }} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  )
}