import { View, Text, Pressable, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Bars3BottomLeftIcon, UserCircleIcon, MagnifyingGlassIcon} from 'react-native-heroicons/solid'
import foods from '../assets/foods';
import FoodCategory from '../components/Food/FoodCategory';

// import { useDispatch, useSelector } from 'react-redux';
// import { increment } from '../slices/navSlice';

type state = {
  navSlice:{value:number}
}

interface props{
  navigation: any;
}

const HomeScreen:React.FC <props> = ({navigation}) => {
  // const counter = useSelector((state:state) => state.navSlice.value )
  // const dispatch = useDispatch()

  return (
    <View >
      <View style={tw`flex-row justify-between flex w-full `}>
        <Bars3BottomLeftIcon  color="red" fill="black" size={42} />
        <Pressable onPress={() => navigation.navigate('Profile')} style={tw``} >
          <UserCircleIcon color="gray" size={50}/>
        </Pressable>
      </View>
      <Text style={tw`text-3xl font-bold py-4`}>Food Delivery</Text>
      <View style={[tw`flex-row w-full h-14 border-0 rounded-3xl`, {backgroundColor:"whitesmoke"}]}>
        <MagnifyingGlassIcon style={tw`my-auto mx-2`} size={30} color="black"/>
        <TextInput
          style={tw``}
          placeholder='Search...'
        />
      </View>
      <View>
        {foods.length >1 && foods.map(food =>
          <FoodCategory food={food} />
          )}
      </View>
    </View>
  )
}

export default HomeScreen