import { useState } from "react";

export function useAutoToggleOff(initialValue = false, delay = 5000) {
  const [value, setValue] = useState(initialValue);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  function toggleValue(value?: boolean) {
    setValue((currentValue) => {
      const newValue = value ?? !currentValue;
      if (newValue) turnOffAfterDelay();
      return newValue;
    });
  }

  function turnOffAfterDelay() {
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        setValue(false);
        clearTimeout(timer!);
      }, delay),
    );
  }

  return [value, toggleValue] as const;
}
