import React, { useState } from "react";
import {
  Switch,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  Colors,
  View,
} from "react-native";

import * as Haptics from 'expo-haptics';
import { Picker } from '@react-native-community/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function glidder() {
  const [selectedValue, setSelectedValue] = useState("java");
  const hourItems = [];
  for (var i = 0; i < 9000; i++) {
    hourItems.push(
      <Picker.Item label={i.toString()} value={i} key={i} />
    );
  }
  return (
    <SafeAreaView style={styles.body}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {hourItems}
      </Picker>
    </SafeAreaView>
  );
}

function Btn() {
  return (
    <SafeAreaView style={styles.body}>
      <TouchableOpacity onPress={() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

      }} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>hey</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function switcher() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.body} backgroundColor={isEnabled ? "black" : "white"}>
      <Switch
        trackColor={{ false: "black", true: "white" }}
        thumbColor={isEnabled ? "black" : "white"}
        ios_backgroundColor="black"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SafeAreaView>
  );
}





const Tab = createBottomTabNavigator();


const App = () => {

  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Button') {
            iconName = focused
              ? 'caret-back-circle-outline'
              : 'caret-back-outline';
          } else if (route.name === 'glidder') {
            iconName = focused ? 'list-outline' : 'list-circle-outline';
          } else if (route.name === 'switcher') {
            iconName = 'swap-horizontal-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="glidder" component={glidder} />
        <Tab.Screen name="Button" component={Btn} />
        <Tab.Screen name="switcher" component={switcher} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonContainer: {
    elevation: 10,
    backgroundColor: "#009688",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});



export default App;