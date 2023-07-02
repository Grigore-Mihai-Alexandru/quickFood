import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, View } from 'react-native';
import tw from 'twrnc';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import Cart from './screens/Cart';

const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={tw`bg-white min-h-full px-4`}>
        <View style={tw`android:mt-8 bg-white h-full`}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={"Home"}
              screenOptions={{
                headerShown: false,
                cardStyle: {backgroundColor:"white"}
              }}
            >
              <Stack.Screen name='Home' component={HomeScreen} />
              <Stack.Screen name='Profile' component={ProfileScreen} options={{title:"welcome!"}} />
              <Stack.Screen name='Cart' component={Cart} options={{title:"My Cart"}} />
            
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}
