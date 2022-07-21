import { Dimensions } from "react-native";
import {
  Directions,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const SwipeView = ({ children }) => {
  const { height, width } = Dimensions.get("window");
  const SNAP_POINTS = [height, 0, -height];
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      x.value = ctx.x + translationX;
      y.value = ctx.y + translationY;
    },
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });
  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      style={{
        width: "90%",
        height: "82%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={[
          {
            width: "90%",
            height: "82%",
            justifyContent: "center",
            alignItems: "center",
          },
          style,
        ]}
      >
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SwipeView;
