import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    // Cleanup step, runs if the value changes and cancels the previous timer so
    // the value isn't updated.
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
