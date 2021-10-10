import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ImportantContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Work Mode is off\nTurn it on to view Contacts marked as \'Important\''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'grey',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: '55%'
  }
});
