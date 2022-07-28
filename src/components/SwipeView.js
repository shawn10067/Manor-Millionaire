import { Dimensions } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

const SwipeView = ({
  children,
  onSwipeDown,
  onSwipeUp,
  swipeUp,
  swipeDown,
}) => {
  // getting height of window
  const { height } = Dimensions.get("window");

  // snap points to snap to based on velocity
  const SNAP_POINTS = [-height, 0, height];

  // swipe snap points
  if (!swipeUp) {
    SNAP_POINTS[0] = 0;
  }
  if (!swipeDown) {
    SNAP_POINTS[2] = 0;
  }

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
      y.value = withSpring(dest, { velocity: velocityY / 3 });

      // determining what to call
      if (swipeUp && dest === SNAP_POINTS[0]) {
        runOnJS(onSwipeUp)();
      } else if (swipeDown && dest === SNAP_POINTS[2]) {
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
    <GestureHandlerRootView
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 500,
        backgroundColor: "blue",
      }}
    >
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        style={[
          {
            width: "100%",
            height: "100%",
            justifycontent: "center",
            alignitems: "center",
          },
        ]}
      >
        <Animated.View
          style={[
            {
              width: "100%",
              height: "100%",
              justifycontent: "center",
              alignitems: "center",
            },
            style,
          ]}
          testID="yur poop"
        >
          {children}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default SwipeView;
