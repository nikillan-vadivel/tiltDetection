import NetInfo from '@react-native-community/netinfo';
import {hasValue} from './Helper';

export const errorType = {
  error: 'Error',
  exception: 'Exception',
};

const ExceptionHandler = (
  error,
  stack,
  type = errorType.exception,
  shouldFromException = false,
  toastShow = true,
  logErrorsInFile = true,
) => {
  const {FeatureConfig} = reduxState.ConfigReducer;
  if (shouldFromException) {
    return;
  }
  __DEV__ && type === errorType.error
    ? console.error(`${error.message}: ${stack}`)
    : console.warn(`${error.message}: ${stack}`);

  if (
    toastShow && hasValue(FeatureConfig?.enableErrorToast)
      ? FeatureConfig.enableErrorToast
      : true
  ) {
  }

  if (logErrorsInFile) {
    NetInfo.fetch().then(
      netInfoState => {
        if (!netInfoState.isConnected || !netInfoState.isInternetReachable) {
          //   writeErrorToFile(error.message, error?.stack ?? stack);
          console.log('If');
        }
      },
      reason => {
        console.log('reason', reason);
      },
    );
  }
};

export default ExceptionHandler;
