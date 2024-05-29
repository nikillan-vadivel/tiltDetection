import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width,
  screenHeight: height,
  navBarHeight: Platform.OS === 'ios' ? 54 : 66,
  cameraNavBars: 110,
  dimensionsDifference: Math.abs(width - height),
  longerScreenDimension: Math.max(width, height),
  shorterScreenDimension: Math.min(width, height),
};

export const getScreenWidth = () => {
  const {width, _} = Dimensions.get('window');
  return width;
};

export const getScreenHeight = () => {
  const {_, height} = Dimensions.get('window');
  return height;
};

export default metrics;
