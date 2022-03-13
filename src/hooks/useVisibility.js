import { useState } from 'react';
const useVisibility = () => {
  const [visibility, setVisibility] = useState(false);
  const changeVisibility = () => visibility?setVisibility(false): setVisibility(true);
  return {
    visibility,
    changeVisibility
  }
}

export default useVisibility