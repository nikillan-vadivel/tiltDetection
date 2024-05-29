import metrics from './metrics';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centeredBox: {
    position: 'absolute',
    top: (metrics.screenHeight - 65) / 2,
    left: (metrics.screenWidth - 50) / 2,
    width: 50,
    height: 65,
    backgroundColor: '#000',
    opacity: 0.9,
    borderRadius: 3,
    // Android box shadow
    elevation: 5,
    // iOS box shadow
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  animatedBox: {
    top: 0,
    left: 0,
    width: 50,
    height: 65,
    borderRadius: 3,
    opacity: 0.9,
  },
});
