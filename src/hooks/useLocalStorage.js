import { useState } from 'react';

export function useLocalStorage(token, initialValue) {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(token)
    return item ? JSON.parse(item) : initialValue;
  })

  const customSetter = (newValue) => {
    setValue(newValue)
    window.localStorage.setItem(token, JSON.stringify(newValue))
  }

  return [value, customSetter]
}