import { Dimensions } from 'react-native';
import * as Utils from './Utils';

export const DIMENSIONS = {
  BORDER_RADIUS: Utils.wp(5),
  BORDER_RADIUS_BIG: Utils.wp(9),
  ELEVATION: Utils.wp(2),
  ELEVATION_SPACE: Utils.wp(4),
  HALF_OPACITY: 0.5,
  CUSTOM_SPACE: Utils.wp(5),
  OUTER_SPACE: Utils.wp(20),
  GENERAL_SPACE: Utils.wp(10),
  SCREEN_WIDTH: Dimensions.get('screen').width,
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  WIDTH_MIN_GENERAL_PADDING: Dimensions.get('screen').width - Utils.wp(20), // SCREEN_WIDTH - (GENERAL_SPACE * 2)
  WIDTH_MIN_MAIN_PADDING: Dimensions.get('screen').width - Utils.wp(40), // SCREEN_WIDTH - (OUTER_SPACE * 2)
  WIDTH_MIN_TOTAL_PADDING: Dimensions.get('screen').width - Utils.wp(60), // SCREEN_WIDTH - (OUTER_SPACE * 2) - (GENERAL_SPACE * 2)
};
