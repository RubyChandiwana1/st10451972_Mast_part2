import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import { useMenu } from '../context/MenuContext';
import { Course } from '../types';

interface FilterByCourseScreenProps {
  navigation: any;
}

const FilterByCourseScreen: React.FC<FilterByCourseScreenProps> = ({ navigation }) => {
  const { menuItems } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: { label: string; value: Course }[] = [
    { label: 'STARTER', value: 'starter' },
    { label: 'MAIN', value: 'main' },
    { label: 'DESSERT', value: 'dessert' },
  ];

  const filteredItems = selectedCourse 
    ? menuItems.filter(item => item.course === selectedCourse)
    : menuItems;

  const renderMenuItem = ({ item }: { item: any }) => (
    <View style={styles.menuItem}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageIcon}>🏔️</Text>
      </View>
      <Text style={styles.menuItemName}>{item.name.toUpperCase()}</Text>
    </View>
  );

  const clearFilter = () => {
    setSelectedCourse(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1f2937" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>Filter by Course</Text>
      </View>

      {/* Course Filter Tabs */}
      <View style={styles.filterTabs}>
        {courses.map((course) => (
          <TouchableOpacity
            key={course.value}
            style={[
              styles.filterTab,
              selectedCourse === course.value && styles.filterTabSelected,
            ]}
            onPress={() => setSelectedCourse(course.value)}
          >
            <Text
              style={[
                styles.filterTabText,
                selectedCourse === course.value && styles.filterTabTextSelected,
              ]}
            >
              {course.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu Items List */}
      <FlatList
        data={filteredItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Clear Filter Button */}
      <TouchableOpacity style={styles.clearButton} onPress={clearFilter}>
        <Text style={styles.clearButtonText}>CLEAR FILTER</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#1e40af',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginRight: 15,
  },
  backIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 1,
  },
  filterTabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  filterTab: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    marginHorizontal: 6,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  filterTabSelected: {
    backgroundColor: '#1e40af',
    borderColor: '#1e40af',
  },
  filterTabText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#64748b',
  },
  filterTabTextSelected: {
    color: '#fff',
  },
  listContainer: {
    flex: 1,
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  imagePlaceholder: {
    width: 55,
    height: 55,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  imageIcon: {
    fontSize: 22,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1e40af',
    flex: 1,
    letterSpacing: 0.5,
  },
  clearButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default FilterByCourseScreen;
