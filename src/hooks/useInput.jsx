import { useCallback, useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onChangeValue = useCallback((e) => setValue(e.target.value), []);

  return [value, onChangeValue, setValue];
};

export default useInput;
