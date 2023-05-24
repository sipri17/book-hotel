import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './store'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import Home from './screens/Home'
import AddGuest from './screens/AddGuest'



export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} options={{ title: "Payment Details", headerStyle: { backgroundColor: "#325897" }, headerTintColor: "#c3d8eb", headerTitleAlign: 'center' }} />
              <Stack.Screen name="AddGuest" component={AddGuest} options={{ title: "Tambah Data Tamu", headerStyle: { backgroundColor: "#325897" }, headerTintColor: "#c3d8eb", headerTitleAlign: 'center' }} />


            </Stack.Navigator>

          </NavigationContainer>
        </PaperProvider>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
