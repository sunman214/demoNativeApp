import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryItem from './components/categoryItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft:16,
    paddingRight:16
  },
});
