import { useEffect, useState, useCallback } from 'react';

const useFormValidatedOnce = () => {
  const [submitCount, setSubmitCount] = useState(0);
  const [validatedOnce, setValidatedOnce] = useState(false);

  useEffect(() => {
    setValidatedOnce(!!submitCount);
  }, [submitCount]);

  const handleSetSubmitCount = useCallback(
    (newCount: number) => {
      if (newCount !== submitCount) {
        setSubmitCount(newCount);
      }
    },
    [submitCount]
  );

  return { validatedOnce, setSubmitCount: handleSetSubmitCount };
};

// eslint-disable-next-line import/prefer-default-export
export { useFormValidatedOnce };
