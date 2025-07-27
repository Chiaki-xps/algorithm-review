import { useEffect, useRef, useState } from "react";

const useThrottle = (fn, ms = 30, deps = []) => {
  let previous = useRef(0);
  let [time, setTime] = useState(ms);
  useEffect(() => {
    let now = Date.now();
    if (now - previous.current > time) {
      fn();
      previous.current = now;
    }
  }, deps);

  const cancel = () => {
    setTime(0);
  };

  return [cancel];
};

export default useThrottle;
