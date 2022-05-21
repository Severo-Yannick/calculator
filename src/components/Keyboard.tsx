import { useState } from 'react'
import Button from './Button'
import { View, Text } from 'react-native'
import { Styles } from '../styles/GlobalStyles'
import { myColors } from '../styles/Colors'

const Keyboard = () => {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState<Number | null>(null)

  const handleNumberPress = (buttonValue: string) => {
    if(firstNumber.length < 10)
      setFirstNumber(firstNumber + buttonValue)
  }

  return (
    <>
    </>
  )
}

export default Keyboard