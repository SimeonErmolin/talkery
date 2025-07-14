import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router';

export default function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map());

  useEffect(() => {
    return () => {
      positions.current.set(location.key, window.scrollY);
    };
  }, [location]);

  useEffect(() => {
    const savedPosition = positions.current.get(location.key);

    if (navigationType === 'POP' && savedPosition != null) {
      window.scrollTo(0, savedPosition);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, navigationType]);

  return null;
}
