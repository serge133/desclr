import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/default-styles';
import RenderIcon from './RenderIcon';

interface Props {
  onCheck: (value: boolean) => void;
  value: boolean;
}

const CheckBox: React.FC<Props> = (props) => {
  // const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => props.onCheck(!props.value);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.checkbox}>
        <RenderIcon
          type='Ionicons'
          name='ios-checkmark'
          size={30}
          color={props.value ? Colors.primary1 : 'white'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    borderColor: Colors.primary1,
    borderWidth: 1,
    borderRadius: 3,
    height: 30,
    width: 30,
    backgroundColor: 'white',
  },
});

export default CheckBox;
