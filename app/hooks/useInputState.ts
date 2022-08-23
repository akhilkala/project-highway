import { useState } from "react";

export interface InputState {
  value: string;
  props: {
    value: string;
    onChangeText: (val: string) => void;
  };
  handleReset: () => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useInputState = (init?: string): InputState => {
  const initialState = init || "";

  const [value, setValue] = useState<string>(initialState);
  const handleChange = (val: string): void => setValue(val);
  const handleReset = (): void => setValue(initialState);

  const props = { value, onChangeText: handleChange };

  return { value, props, handleReset, setValue };
};

export default useInputState;
