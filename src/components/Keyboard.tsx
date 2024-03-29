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
  const BIG_INT = 99999

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
        clear()
        setResult(parseInt(secondNumber) + parseInt(firstNumber))
        break
      case '-':
        clear()
        setResult(parseInt(secondNumber) - parseInt(firstNumber))
        break
      case '*':
        clear()
        setResult(parseInt(secondNumber) * parseInt(firstNumber))
        break
      case '/':
        clear()
        setResult(parseInt(secondNumber) / parseInt(firstNumber))
        break
      default:
        clear()
        setResult(0)
        break
    }
  }

  const firstNumberDisplay = () => {
    if (result !== null)
      return <Text style={result < BIG_INT ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>{result?.toString()}</Text>
    if (firstNumber && firstNumber.length < 6)
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>
    if (firstNumber === '')
      return <Text style={Styles.screenFirstNumber}>{'0'}</Text>
    if (firstNumber.length > 5 && firstNumber.length < 8)
      return <Text style={[Styles.screenFirstNumber, {fontSize: 70}]}>{firstNumber}</Text>
    if (firstNumber.length > 7)
      return <Text style={[Styles.screenFirstNumber, {fontSize: 50}]}>{firstNumber}</Text>
  }

  return (
    <View style={Styles.viewBottom}>
      <View>
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{color: myColors.purpule, fontSize: 50, fontWeight: '500'}}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title='C' isGray onPress={clear}></Button>
        <Button title='+/-' isGray onPress={() => handleOperationPress('+/-')}></Button>
        <Button title='%' isGray onPress={() => handleOperationPress('%')}></Button>
        <Button title='÷' isBlue onPress={() => handleOperationPress('÷')}></Button>
      </View>
      <View style={Styles.row}>
        <Button title='7' onPress={() => handleNumberPress('7')}></Button>
        <Button title='8' onPress={() => handleNumberPress('8')}></Button>
        <Button title='9' onPress={() => handleNumberPress('9')}></Button>
        <Button title='x' isBlue onPress={() => handleOperationPress('*')}></Button>
      </View>
      <View style={Styles.row}>
        <Button title='4' onPress={() => handleNumberPress('4')}></Button>
        <Button title='5' onPress={() => handleNumberPress('5')}></Button>
        <Button title='6' onPress={() => handleNumberPress('6')}></Button>
        <Button title='-' isBlue onPress={() => handleOperationPress('-')}></Button>
      </View>
      <View style={Styles.row}>
        <Button title='1' onPress={() => handleNumberPress('1')}></Button>
        <Button title='2' onPress={() => handleNumberPress('2')}></Button>
        <Button title='3' onPress={() => handleNumberPress('3')}></Button>
        <Button title='+' isBlue onPress={() => handleOperationPress('+')}></Button>
      </View>
      <View style={Styles.row}>
        <Button title='.' onPress={() => handleNumberPress('.')}></Button>
        <Button title='0' onPress={() => handleNumberPress('0')}></Button>
        <Button title='⌫' onPress={() => setFirstNumber(firstNumber.slice(0, -1))}></Button>
        <Button title='=' isBlue onPress={() => getResult()}></Button>
      </View>
    </View>
  )
}

export default Keyboard