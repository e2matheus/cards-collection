import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './src/components/Card';
import CardDetailsBox from './src/components/CardDetailsBox';

const App = () => {
  return (
        <View style={styles.container} >
          <View style={styles.itemsWrapper}>
            <Text style={styles.sectionTitle}>Today's cards</Text>
            <View style={styles.items}>
              <Card title="Card 1" />
              <Card title="Card 2" />
              <CardDetailsBox name="Rei, the Summoner" level={0} cardType="unit" />
            </View>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  itemsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});

export default App;
