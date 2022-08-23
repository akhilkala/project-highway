import React from "react";

const useToggle = (initialState: boolean) => {
  const [state, setState] = React.useState(initialState);

  const toggle = React.useCallback(() => setState((state) => !state), []);
  const setTrue = React.useCallback(() => setState(true), []);
  const setFalse = React.useCallback(() => setState(false), []);

  return { state, toggle, setTrue, setFalse };
};

export default useToggle;
