import React from 'react'
import { render } from '@testing-library/react-native'
import App from './'

// Mock de Haptics
jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
}))

// Mock de useRouter
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}))

// Datos de prueba
const stockData = [
  {
    id: '1',
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: 150.25,
    dailyChange: 1.5,
  },
  {
    id: '2',
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    price: 250.3,
    dailyChange: -2.1,
  },
]

describe('App', () => {
  it('renders list header correctly', () => {
    const { getByText } = render(<App />)

    expect(getByText('Stock Monitor')).toBeTruthy()
  })
})
