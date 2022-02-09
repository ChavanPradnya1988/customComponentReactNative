import React, { useState } from 'react';
import { FormControl, Input, Stack, WarningOutlineIcon, Box, Center, NativeBaseProvider, View, Divider, Text} from "native-base";
import RadioButton from './component/RadioButton';


const  App =() => {
 
  const data = [
    { value: 'M. Sc.'},
    { value: 'B. Com.'},
    { value: 'Comp. Engg.'},
    { value: 'Engineer'}
  ];


  return (
    
      <View>
        <Text>Choose Your Degree</Text>
        <RadioButton 
        data={ data } 

        />
      </View>


  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <App />
      </Center>
    </NativeBaseProvider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
