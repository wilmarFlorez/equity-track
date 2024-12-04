import { FlatList, Text, StyleSheet, View } from 'react-native'
import { StockItem } from '../components/StockItem/StockItem'
import { colors, white } from '../tokens/colors'
import * as Haptics from 'expo-haptics'
import { useRouter } from 'expo-router'
import { Stock } from '../types/stock'

const stockData = require('../public/dummy_stock_data.json')

export default function App() {
  const router = useRouter()

  const handlePress = (stockItem: Stock) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    router.push({
      pathname: '/stock-detail',
      params: {
        id: stockItem.id,
      },
    })
  }

  return (
    <FlatList
      style={styles.container}
      stickyHeaderIndices={[0]}
      data={stockData.stocks}
      ListHeaderComponent={<Text style={styles.listHeader}>Stock Monitor</Text>}
      renderItem={({ item }) => (
        <StockItem stock={item} onPress={handlePress} />
      )}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text style={styles.listEmptyContainerText}>The list is empty</Text>
        </View>
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.slate[950],
  },
  listHeader: {
    color: white,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 14,
    backgroundColor: colors.slate[950],
  },
  listEmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  listEmptyContainerText: {
    color: white,
  },
})
