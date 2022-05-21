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

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue)
    setSecondNumber(firstNumber)
    setFirstNumber('')
  }

  const clear = () => {
    setFirstNumber('')
    setSecondNumber('')
    setOperation('')
    setResult(null)
  }

  const getResult = () => {
    switch (operation) {
      case '+':
        clear
        setResult(parseInt(secondNumber) + parseInt(firstNumber))
        break
      case '-':
        clear
        setResult(parseInt(secondNumber) - parseInt(firstNumber))
        break
      case '*':
        clear
        setResult(parseInt(secondNumber) * parseInt(firstNumber))
        break
      case '/':
        clear
        setResult(parseInt(secondNumber) / parseInt(firstNumber))
        break
      default:
        clear
        setResult(0)
        break
    }
  }

  return (
    <>
    </>
  )
}

export default Keyboard