import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    width: '80%',
    textAlign: 'center',
  },
  titleText: {
    lineHeight: 20,
    color: 'white',
    fontSize: 16,
  },
  difficulty: {
    marginTop: 10,
  },
  scenesContainer: {
    flex: 1,
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  submitButton: {
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: '#f0f4f6',
    marginVertical: 20,
  },
  submitButtonContent: {
    height: 44,
    paddingHorizontal: 20,
  },
});
