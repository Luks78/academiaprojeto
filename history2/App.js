import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const historyData = [
  {
    title: '26.08.22',
    data: [
      { id: '1', name: 'Puxada frontal', group: 'Costas', hour: '08:56' },
      { id: '2', name: 'Remada unilateral', group: 'Costas', hour: '09:10' },
      { id: '3', name: 'Puxada frontal', group: 'Costas', hour: '09:25' },
    ],
  },
  {
    title: '25.08.22',
    data: [
      { id: '4', name: 'Supino reto', group: 'Peito', hour: '18:30' },
      { id: '5', name: 'Crucifixo', group: 'Peito', hour: '18:50' },
    ],
  },
  {
    title: '23.08.22',
    data: [
      { id: '6', name: 'Agachamento livre', group: 'Perna', hour: '07:15' },
    ],
  },
];

function HistoryCard({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardGroup}>{item.group}</Text>
      </View>
      <Text style={styles.cardHour}>{item.hour}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Histórico de Exercícios</Text>
      </View>

      <SectionList
        style={styles.list}
        sections={historyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoryCard item={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            Não há exercícios registrados ainda.
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  },
  header: {
    paddingTop: 24,
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: '#202024',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  sectionTitle: {
    color: '#C4C4CC',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#29292E',
    padding: 16,
    borderRadius: 6,
    marginBottom: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cardGroup: {
    color: '#7C7C8A',
    fontSize: 14,
    marginTop: 4,
  },
  cardHour: {
    color: '#C4C4CC',
    fontSize: 14,
    marginLeft: 12,
  },
  emptyText: {
    color: '#7C7C8A',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
  },
});
