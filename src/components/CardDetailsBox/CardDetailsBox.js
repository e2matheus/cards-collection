import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from '../../../ui/atoms/CustomButton';

const CardDetailsBox = ({ name, level, cardType }) => {

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.cardLabel}>{"Name: "}</Text>
        <Text style={styles.cardDetail}>{name}</Text>

        <Text style={styles.cardLabel}>{"Level: "}</Text>
        <Text style={styles.cardDetail}>{level}</Text>

        <Text style={styles.cardLabel}>{"Card type: "}</Text>
        <Text style={styles.cardDetail}>{cardType}</Text>
      </View>
      <View style={styles.sectionButton}>
        <CustomButton text="Add to favorites"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionButton: {
    marginTop: 12,
    marginBottom: 5,
  },
  cardLabel: {
    fontWeight: 'bold',
  },
  cardDetail: {
    marginTop: 3,
    marginBottom: 10,
  },
});

export default CardDetailsBox;
