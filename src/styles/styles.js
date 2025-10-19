import { StyleSheet } from 'react-native';

/**
 * 👉 Students: create all your styles here.
 * Start with: container, headerText, sectionTitle, itemRow, itemName, counter, input, button, etc.
 * Keep style names semantic.
 */
export const styles = StyleSheet.create({
  // e.g., container: { },
  // leave empty for now; using undefined styles is acceptable.
// Main container
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  
  // Header/AboutMe styles
  header: {
    backgroundColor: '#10b981',
    padding: 20,
    marginBottom: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  // TeacherMessage styles
  teacherMessage: {
    backgroundColor: '#3b82f6',
    padding: 16,
    marginVertical: 12,
  },
  messageText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  
  // Section styles
  section: {
    marginVertical: 16,
    backgroundColor: 'white',
    padding: 16,

  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1f2937',
    textAlign: 'center',
  },
  
  // Input styles
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    padding: 12,
    marginVertical: 6,
    backgroundColor: 'white',
    fontSize: 16,
  },
  
  // Add container
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  

  // Item row styles
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8fafc',
    marginVertical: 6,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    flex: 2,
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#059669',
    buttonText:'white',
    flex: 1,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-around',
  },
  
  // Search results
  searchResults: {
    marginTop: 12,
  },
  
  // Empty state
  emptyState: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 16,
    marginTop: 20,
    fontStyle: 'italic',
  }
});