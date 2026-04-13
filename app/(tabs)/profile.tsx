import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '@/constants/Colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.avatar}>
        <Text style={styles.avatarText}>GS</Text>
    </View>
    <Text style={styles.name}>Grzegorz Siekierski</Text>
    <Text style={styles.joined}>Joined March 2026</Text>
    <View style={styles.statsContainer}>
    <View style={styles.card}>
        <Text style={styles.value}>12</Text>
        <Text style={styles.label}>Trips</Text>
    </View>
    <View style={styles.card}>
        <Text style={styles.value}>5</Text>
        <Text style={styles.label}>Countries</Text>
    </View>
    <View style={styles.card}>
        <Text style={styles.value}>4.8</Text>
        <Text style={styles.label}>Rating</Text>
    </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, alignItems: 'center', paddingTop: 40, },
  avatar: { width: 80,height: 80, borderRadius: 40, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', },
  avatarText: { color: Colors.background, fontSize: 28, fontWeight: 'bold',},
  name: { marginTop: 16, fontSize: 22, fontWeight: 'bold', color: Colors.textPrimary, },
  joined: { marginTop: 4, fontSize: 14, color: Colors.textSecondary,},
  statsContainer: { flexDirection: 'row', marginTop: 32, gap: 12, },
  card: { backgroundColor: Colors.card, paddingVertical: 16, paddingHorizontal: 20, borderRadius: 12, alignItems: 'center', minWidth: 90,},
  value: { fontSize: 20, fontWeight: 'bold', color: Colors.textPrimary,},
  label: { marginTop: 4, fontSize: 12, color: Colors.textSecondary,},
});