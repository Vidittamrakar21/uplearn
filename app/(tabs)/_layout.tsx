import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign , Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopColor: "white",
          height: 50,
          // padding: 10
        },
      
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Featured',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused === true ? "star" : "staro"} color="#FFCD38" size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'My Learning',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused === true ? "play" : "playcircleo"} color="#FFCD38" size={22} />
          ),
        }}
      />

      <Tabs.Screen
        name="whishlist"
        options={{
          title: 'Whishlist',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign  name={focused === true ? "heart" : "hearto"} color="#FFCD38" size={22} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused === true ? "bag" : "bag-outline"} color="#FFCD38" size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
