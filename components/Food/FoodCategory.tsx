import { View, Text, Image } from 'react-native'
import React from 'react'
import { foodType } from '../../assets/foods'

interface props {
  food:foodType
}

const FoodCategory:React.FC <props> = ({food}) => {
  return (
    <View>
      <View>
        <Image source={{uri:food.imageUrl}}/>
      </View>
      <Text>{food.name}</Text>
    </View>
  )
}

export default FoodCategory