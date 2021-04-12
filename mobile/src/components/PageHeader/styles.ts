import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257e5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    color: '#fff',
    lineHeight: 32,
    marginVertical: 40,
    maxWidth: 160,
  },
});

export default styles;
