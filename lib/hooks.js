import { useEffect, useState } from "react";

export function useIsClient() {
  const [isCleant, setIsClieant] = useState(false);
  useEffect(() => setIsClieant(true), []);
  return isCleant;
}
