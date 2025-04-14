import React from 'react'
import { Tabs } from 'expo-router'
import { View, Text,  StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'

const _layout = () => {
  return (
   
    
    <View className="flex-1 bg-green-500">
    <StatusBar backgroundColor='#CAE0BC' barStyle='dark-content' />
    <View className="bg-white py-4 px-4 flex-row items-center justify-between" >
      <Text className="text-black text-xl font-bold tracking-wider" >Implus</Text>
      <View className='flex-row items-center space-x-3'>
        <MaterialCommunityIcons name='calendar-month' size={24} color='gold' />
        <Text className='text-yellow-400 text-base font-medium'>Day 5</Text>
      </View>
    </View>
  


<Tabs 
screenOptions={{
  tabBarShowLabel:true,
  tabBarActiveTintColor:'#0D9276',
  tabBarInactiveTintColor:'black',
  tabBarItemStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:'auto'
    
  },
  tabBarStyle:{
    backgroundColor:'#CAE0BC',
    borderRadius:5,
    height:70,
    marginHorizontal:1,
    position:'absolute',
    overflow:'hidden',
    borderWidth:1,
    borderColor:'#ABDCAB'
    
  },
  tabBarLabelStyle:{

    fontSize:14, 
    fontWeight:'bold',
    fontFamily:'system',
    letterSpacing:1,
  }
}}

>
    <Tabs.Screen 
    name='index'
    options={{
      title:'Implus', 
      headerShown:false,
      tabBarIcon: ({focused})=>(<MaterialCommunityIcons name="notebook-outline" size={28} color={focused? '#0D9276': 'black'}/>
      ),
    }}
   
    />
    <Tabs.Screen 
    name='guide'
     options={{
      title:'Guide',
      headerShown:false,
      tabBarIcon: ({focused})=>(<Feather name="compass" size={28} color={focused? '#0D9276': 'black' } /> 
      ),
       }}/>
    <Tabs.Screen 
    name='more' 
    options={{
      title:'More', 
      headerShown:false,
      tabBarIcon: ({focused})=>(<Feather name="more-horizontal" size={28} color={focused? '#0D9276': 'black'} /> 
      ),
      }}/>
</Tabs>
</View>
  )
}
export default _layout
