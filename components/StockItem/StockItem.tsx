import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { colors } from '../../tokens/colors'
import { Stock } from '../../types/stock'

interface Props {
  stock: Stock
  onPress: (stockItem: Stock) => void
}

export const StockItem = ({ stock, onPress }: Props) => {
  const { name, price, dailyChange, symbol } = stock

  const changeColor =
    dailyChange >= 0 ? styles.positiveChange : styles.negativeChange

  const handlePress = () => onPress(stock)

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.stockItem}
      activeOpacity={0.8}
    >
      <View>
        <Text style={styles.stockSymbol}>{symbol}</Text>
        <Text style={styles.stockName}>{name}</Text>
      </View>
      <View>
        <Text style={styles.stockPrice}>${price.toFixed(2)}</Text>
        <Text style={[styles.stockChange, changeColor]}>
          {dailyChange.toFixed(2)}%
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  stockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.slate[200],
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  stockSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stockName: {
    fontSize: 14,
    color: 'gray',
  },
  stockPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stockChange: {
    fontSize: 14,
    textAlign: 'right',
  },
  positiveChange: {
    color: 'green',
  },
  negativeChange: {
    color: 'red',
  },
})
