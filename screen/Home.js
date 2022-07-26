import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

export default function Home() {
  return (
 <SafeAreaView >
    <View>
    <HeaderTabs/>
    <SearchBar/>
    <Categories/>

    </View>
 </SafeAreaView>
  )
}