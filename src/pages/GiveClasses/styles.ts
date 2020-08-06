import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,    
  },
  content: {
    flex: 1,
    justifyContent: 'center',    
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 38,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 240,
    color: '#d4c2ff',
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  }
});

export default styles;
