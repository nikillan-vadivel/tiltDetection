import {Text, View} from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedSensor,
  SensorType,
} from 'react-native-reanimated';

import orientationMapping from './orientationMapping';
import {styles} from './styles';

const TiltDetectionBox = () => {
  try {
    // console.log('1');
    // Get gravity sensor data
    let gravity = useAnimatedSensor(SensorType.GRAVITY);
    // Animated style for the dynamic box based on accelerometer data
    const animatedStyle = useAnimatedProps(() => {
      // Constants and initializations
      const orientationTolerance = 25; // set min and max range
      const tolerance = 8; // set min and max range
      // Calculate normalized x, y, z values
      let {x, y, z} = gravity.sensor.value;
      x = x / 10;
      y = y / 10;
      z = z / 10;
      // Calculate degree based on x and y
      let degree = Math.floor(Math.atan2(x, y) * (180 / Math.PI));
      let rotateZ = -degree + 'deg';
      let rotateX = -z + 'rad';
      let rotateY = '0deg';

      // Check the device orientation based on the calculated degree
      // console.log('4');
      if (
        Math.abs(degree - orientationMapping.right.degree) <=
          orientationTolerance ||
        Math.abs(degree - orientationMapping.left.degree) <=
          orientationTolerance
      ) {
        degree = -degree + 90;
        rotateY = -z + 'rad';
        rotateX = '0deg';
        rotateZ = `${degree}deg`;
      }

      // console.log('7');
      // Validate Angle
      let isValidAngle =
        Math.trunc(z * 10) == 0 &&
        Math.abs(
          Math.min(
            Math.abs(degree - 180),
            Math.abs(degree + 180),
            Math.abs(degree),
          ),
        ) <= tolerance;

      // Return animated style properties
      // console.log('8');
      return {
        transformStyle: 'preserve-3d',
        transform: [{rotateX}, {rotateY}, {rotateZ}],
        backgroundColor: isValidAngle ? '#1fd655' : '#ee2400',
      };
    });

    // rendering for the component
    return (
      <View style={styles.centeredBox}>
        {/* Dynamic Box */}
        <Animated.View
          animatedProps={animatedStyle}
          style={styles.animatedBox}
        />
        <Text>Sample</Text>
      </View>
    );
  } catch (error) {
    // Handle exceptions and log
    log(error + 'Accelerometer Sensor');
    return null;
  }
};

export default TiltDetectionBox;
