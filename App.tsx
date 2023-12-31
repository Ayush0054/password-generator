import {StyleSheet, Text, View} from 'react-native';
import * as Yup from 'yup';
import React, {useState} from 'react';

const PasswordSchema = Yup.object().shape({
  password: Yup.number()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //   .required('Required'),
});
export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenrated, setIsPassGenrated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const generatePassword = (password: number) => {};
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      // result += characters.charAt(
      //   Math.floor(Math.random() * characters.length),
      // );
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  const resetPassword = () => {};
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
