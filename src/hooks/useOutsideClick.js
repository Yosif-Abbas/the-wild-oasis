import { useEffect, useRef } from 'react';
import { GiConsoleController } from 'react-icons/gi';

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) handler();
      };
      document.addEventListener('click', handleClickOutside, listenCapturing);
      return () =>
        document.removeEventListener(
          'click',
          handleClickOutside,
          listenCapturing
        );
    },
    [handler, listenCapturing]
  );
  return ref;
}
