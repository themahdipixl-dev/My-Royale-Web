import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="image-outline" size={48} color="#888" />
      <Text style={styles.paragraph}>Asset example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});
