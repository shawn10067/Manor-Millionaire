import formatDistanceStrict from "date-fns/formatDistanceStrict";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import { SpinContext } from "../../../services/spin/spin.context";
import { SpinTimeText } from "./home.screen.styles";

const SpinProgress = ({ RunOnSpinReached }) => {
  const { nextSpinTime, updateNextSpinTime, updatePreviousSpinTime } =
    useContext(SpinContext);

  // timer states
  const secondUpdateInterval = useRef(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (secondUpdateInterval.current === null) {
      secondUpdateInterval.current = setInterval(() => {
        if (new Date().getTime() >= nextSpinTime.getTime()) {
          clearInterval(secondUpdateInterval.current);
          secondUpdateInterval.current = null;
          console.log("spin reached");
          RunOnSpinReached();
          setTimeout(() => {
            updateNextSpinTime();
            updatePreviousSpinTime();
          });
        } else {
          setDate(new Date());
        }
      }, 1000);
    }

    // returning the clear interval
    return () => {
      console.log("cleaning up");
      clearInterval(secondUpdateInterval.current);
    };
  }, []);

  // formatted the dime difference between next and previous spin time
  const formattedTimeDifference = () => {
    const minutesFormat = formatDistanceStrict(nextSpinTime, date, {
      addSuffix: true,
    });
    return minutesFormat;
  };

  return <SpinTimeText>Spin {formattedTimeDifference()}!</SpinTimeText>;
};

export default SpinProgress;
