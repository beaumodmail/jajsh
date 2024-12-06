// next.js/pages/index.js
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'http://thebeauclub.byethost15.com/videos/exclusive';
  }, []);

  return null;
}


