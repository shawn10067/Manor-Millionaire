import { Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

const SwipeView = ({ children, onSwipeDown, onSwipeUp }) => {
  // getting height of window
  const { height } = Dimensions.get("window");

  // snap points to snap to based on velocity
  const SNAP_POINTS = [-height, 0, height];
  // holding the values of x and y
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  // gesture event to call
  const onGestureEvent = useAnimatedGestureHandler({
    // holding the context when beggining the gesture to only move from 'that' position
    onStart: (_, ctx) => {
      ctx.y = y.value;
    },

    // getting the translation to add to the context so it doesn't get laggy
    onActive: ({ translationY }, ctx) => {
      y.value = ctx.y + translationY;
    },

    // determining what point to snap to, and what to call when the 'up' and 'down' snap points are held onto
    onEnd: ({ velocityY }) => {
      // getting snap destination
      const dest = snapPoint(y.value, velocityY / 2.65, SNAP_POINTS);
      y.value = withSpring(dest, { velocity: velocityY });

      // determining what to call
      if (dest === SNAP_POINTS[0]) {
        runOnJS(onSwipeUp)();
      } else if (dest === SNAP_POINTS[2]) {
        runOnJS(onSwipeDown)();
      }
    },
  });

  // styling the animation
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
