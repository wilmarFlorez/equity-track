import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { StockItem } from './StockItem'
import { Stock } from '../../types/stock'

describe('StockItem', () => {
  const stock: Stock = {
    id: 1,
    name: 'Apple',
    symbol: 'AAPL',
    price: 150.25,
    dailyChange: 2.5,
  }

  const onPressMock = jest.fn()

  it('should render stock name, symbol, price and daily change correctly', () => {
    const { getByText } = render(
      <StockItem stock={stock} onPress={onPressMock} />
    )

    expect(getByText('AAPL')).toBeTruthy()
    expect(getByText('Apple')).toBeTruthy()
    expect(getByText('$150.25')).toBeTruthy()
    expect(getByText('2.50%')).toBeTruthy()
  })

  it('should apply positive change style when dailyChange is positive', () => {
    const { getByText } = render(
      <StockItem stock={stock} onPress={onPressMock} />
    )
    const stockChangeText = getByText('2.50%')

    expect(stockChangeText).toHaveStyle({ color: 'green' })
  })

  it('should apply negative change style when dailyChange is negative', () => {
    const negativeStock = { ...stock, dailyChange: -2.5 }
    const { getByText } = render(
      <StockItem stock={negativeStock} onPress={onPressMock} />
    )
    const stockChangeText = getByText('-2.50%')

    expect(stockChangeText).toHaveStyle({ color: 'red' })
  })

  it('should call onPress when the stock item is pressed', () => {
    const { getByText } = render(
      <StockItem stock={stock} onPress={onPressMock} />
    )

    fireEvent.press(getByText('Apple'))

    expect(onPressMock).toHaveBeenCalledTimes(1)
    expect(onPressMock).toHaveBeenCalledWith(stock)
  })
})
