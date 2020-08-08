import React from 'react';
import { View } from 'react-native';
import styles from './style';
import PageHeader from '../../components/PageHeader';

export default function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis' />
    </View>
  );
}
