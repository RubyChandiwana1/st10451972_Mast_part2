import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useMenu } from '../context/MenuContext';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { getTotalMenuItems } = useMenu();
  const totalItems = getTotalMenuItems();

  const courses = [
    { name: 'STARTER', course: 'starter' as const, color: '#ec4899' },
    { name: 'MAIN', course: 'main' as const, color: '#6366f1' },
    { name: 'DESSERT', course: 'dessert' as const, color: '#06b6d4' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1f2937" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <View style={styles.hamburger}>
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
          </View>
        </TouchableOpacity>
        
        <Text style={styles.title}>MENU</Text>
        
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Total Items Display */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>
          Total Menu Items: {totalItems}
        </Text>
      </View>

      {/* Course Buttons */}
      <View style={styles.coursesContainer}>
        {courses.map((course) => (
          <TouchableOpacity
            key={course.course}
            style={[styles.courseButton, { backgroundColor: course.color }]}
            onPress={() => navigation.navigate('Category', { course: course.course })}
          >
            <Text style={styles.courseButtonText}>{course.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add Menu Item Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMenuItem')}
      >
        <Text style={styles.addButtonText}>+ Add Menu Item</Text>
      </TouchableOpacity>

      {/* Filter Button */}
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => navigation.navigate('FilterByCourse')}
      >
        <Text style={styles.filterButtonText}>Filter by Course</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#1f2937',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  menuButton: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  hamburger: {
    width: 22,
    height: 16,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cartButton: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cartIcon: {
    fontSize: 22,
    color: '#fff',
  },
  totalContainer: {
    padding: 28,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  totalText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#6366f1',
    letterSpacing: 0.5,
  },
  coursesContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  courseButton: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  courseButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  addButton: {
    backgroundColor: '#ec4899',
    paddingVertical: 20,
    marginHorizontal: 24,
    marginVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#ec4899',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  filterButton: {
    backgroundColor: '#06b6d4',
    paddingVertical: 20,
    marginHorizontal: 24,
    marginBottom: 32,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#06b6d4',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default HomeScreen;
