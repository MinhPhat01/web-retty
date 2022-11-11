import { useState } from 'react';

export default function useToggle() {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue((value) => !value);
  };
  return {
    setValue,
    value,
    handleToggle,
  };
}