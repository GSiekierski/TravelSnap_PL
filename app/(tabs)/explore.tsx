import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
    <Ionicons name="compass" size={64} color={Colors.primary} />
    <Text style={styles.title}>Discover new places</Text>
    <Text style={styles.subtitle}>Coming soon...</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24,},
  title: { marginTop: 20, fontSize: 24, fontWeight: 'bold', color: Colors.textPrimary, textAlign: 'center', },
  subtitle: { marginTop: 8, fontSize: 16, color: Colors.textSecondary, textAlign: 'center', },
});