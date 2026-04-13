import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import RatingStars from '@/components/RatingStars';

export default function TripDetailScreen() {
  const router = useRouter();
  const { title, destination, date, rating } = useLocalSearchParams<{ id: string; title: string;destination: string;date: string;rating: string; }>();
  const parsedRating = Number(rating);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: title || 'Trip Details', headerStyle: { backgroundColor: Colors.background,}, headerTintColor: Colors.primary, animation: 'slide_from_bottom',}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Ionicons name="location" size={16} color={Colors.textSecondary} />
        <Text style={styles.meta}>{destination}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="calendar" size={14} color={Colors.textSecondary} />
        <Text style={styles.meta}>{date}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <RatingStars rating={parsedRating} />
      </View>
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Powrót do listy</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 20, },
  title: { fontSize: 24, fontWeight: 'bold', color: Colors.textPrimary, marginBottom: 12, },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 6,},
  meta: { fontSize: 14, color: Colors.textSecondary, },
  ratingContainer: { marginTop: 16,marginBottom: 24,},
  button: { backgroundColor: Colors.primary, padding: 12, borderRadius: 8, alignItems: 'center', },
  buttonText: { color: Colors.background, fontWeight: 'bold',},
});