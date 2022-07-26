import { View, Text, Image,ScrollView  } from 'react-native'
import React from 'react'



const items = [
    {
      image: require("../asset/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../asset/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../asset/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../asset/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../asset/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../asset/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../asset/images/desserts.png"),
      text: "Desserts",
    },
  ];
export default function Categories() {
  return (
    <View
    style={{
      marginTop: 5,
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingLeft: 20,
    }}
  >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
          <Image
            source={item.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
  )
}