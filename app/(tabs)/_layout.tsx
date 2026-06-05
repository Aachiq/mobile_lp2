import { Tabs } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        // tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <AntDesign name="home" size={24} color="blue" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
          title: 'Explore',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="blue" />,
        }}
      />
      <Tabs.Screen
        name="privacy"
        options={{
          title: 'Privacy',
          tabBarIcon: () => <MaterialIcons name="privacy-tip" size={24} color="blue" />,
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: () => <Entypo name="info-with-circle" size={24} color="blue"/>,
        }}
      />
    </Tabs>
  );
}
