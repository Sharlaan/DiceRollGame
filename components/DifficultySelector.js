import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, View } from 'react-native';
import { MAX_DIFFICULTY } from '../assets/CONSTANTS';

export default function DifficultySelector({ value = 1, onChange, style }) {
  const selectOption = (itemValue) => console.log('truc') || onChange(itemValue);

  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, style]}>
      <Text style={{ color: 'white' }}>Current difficulty :</Text>
      <Picker
        mode="dropdown"
        selectedValue={value}
        onValueChange={selectOption}
        style={{
          backgroundColor: 'white',
          color: 'black',
          marginLeft: 10,
          height: 44,
          width: 44,
        }}
      >
        {Array.from({ length: MAX_DIFFICULTY }, (_, index) => (
          <Picker.Item key={index + 1} value={index + 1} label={`${index + 1}`} />
        ))}
      </Picker>
    </View>
  );
}
