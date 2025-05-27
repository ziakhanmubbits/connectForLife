import { ScrollView, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers } from '../../../components'
import { Text } from '../../../components'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import { navigateWithParams } from '../../../services/helpingMethods'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { routes } from '../../../services'
const CELL_COUNT = 4;
const OtpConfirmation = ({ navigation, route }) => {
  const { navigate } = navigation
  const { forgotPassword } = route?.params ?? ''
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //DATA PASS FROM ONE COMPONENTS TO ANOTHER COMPONET WITH NAVIGATION
  // useEffect(() => {
  //   const { data } = route?.params // const data = route.params.data
  //   const { name } = data // const name = data.name
  //   console.log('NAME', name)
  // }, [])
  const [second, setSecond] = useState(59);
  const [minutes, setMinutes] = useState('00')
  //USE EFFECTS
  //TIMER FOR OTP CODE CONFIRMATION
  const timer = useRef()
  useEffect(() => {
    startTimer()
    //return clearInterval
  }, [])
  const startTimer = () => {
    timer.current = setInterval(() => {
      setSecond((prev) => {
        if (prev == 0) {
          clearInterval(timer.current)
          return 0
        }
        else {
          return prev - 1
        }
      });
    }, 1000)
  }
  return (

    <Wrapper isMain background1>
      <Headers.Primary
        showBackArrow
      />
      <Spacer isBasic />
      <Wrapper alignItemsCenter>
        <Text style={styles.Title}>Enter OTP</Text>
      </Wrapper>
      <Spacer isBasic />
      <Wrapper alignItemsCenter flexDirectionRow justifyContentCenter>
        <Text style={styles.codetext}>Enter the 4-Digit code sent to you at </Text>
        <Text style={styles.codenumber}>+1 234 456 7890</Text>
      </Wrapper>
      <Spacer isBasic />
      <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceEvenly style={styles.codewrsapper}  >
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )} />
      </Wrapper>
      <Spacer isDoubleBase />
      <Wrapper alignItemsCenter>
        <Text isTextColor2 style={styles.time}>{`${minutes} : ${second < 10 ? `0${second}` : `${second}`}`}</Text>
        <Spacer isBasic />
        <Text isBoldFont isTextColor2 isGray style={styles.restext}>{`Resend`}</Text>
      </Wrapper>
      <Spacer isDoubleBase />
      <Spacer isDoubleBase />
      <Buttons.Colored text="CONTINUE" onPress={() => navigation.navigate(forgotPassword ? routes.changepass : routes.createprofile)} />
    </Wrapper>

  )
}

export default OtpConfirmation