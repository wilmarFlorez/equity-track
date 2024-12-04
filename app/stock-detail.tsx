import { Redirect, useLocalSearchParams } from 'expo-router'
import { View, Text, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { Stock } from '../types/stock'
import { colors } from '../tokens/colors'
const stockData = require('../public/dummy_stock_data.json')

export default function StockDetail() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const stocks: Stock[] = stockData.stocks
  const stock = stocks.find((stock) => stock.id === Number(id))

  if (!stock?.id) return <Redirect href='/404' />

  const { symbol, name, price, dailyChange } = stock

  const changeColor =
    dailyChange >= 0 ? styles.positiveChange : styles.negativeChange

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailCard}>
        <View style={styles.mainInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          <Text style={[styles.stockChange, changeColor]}>
            {dailyChange.toFixed(2)}%
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.slate[950],
    paddingHorizontal: 18,
  },
  detailCard: {
    backgroundColor: colors.slate[200],
    marginTop: 44,
    borderRadius: 18,
    padding: 14,
  },
  stockChange: {
    fontSize: 18,
  },
  positiveChange: {
    color: 'green',
  },
  negativeChange: {
    color: 'red',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  symbol: {
    fontSize: 18,
  },
  mainInfo: {
    marginBottom: 64,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
