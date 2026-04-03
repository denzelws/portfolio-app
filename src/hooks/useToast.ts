import { useState, useEffect } from "react";

const TOAST_KEY = "portfolio-intro-shown";

export function useToast() {
  const [visible, setVisible] = useState(() => {
    return !localStorage.getItem(TOAST_KEY);
  });

  useEffect(() => {
    if (visible) {
      localStorage.setItem(TOAST_KEY, "true");
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const dismiss = () => setVisible(false);

  return { visible, dismiss };
}
