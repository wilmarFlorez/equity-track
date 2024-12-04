import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen
          name='stock-detail'
          options={({ navigation }) => ({
            title: 'Stock Detail',
            presentation: 'modal',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back' size={24} color='black' />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
