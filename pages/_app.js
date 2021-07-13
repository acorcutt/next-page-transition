import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [transition, setTransition] = useState({ opacity: 1.0, transform: 'scale(1.0)' });
  const router = useRouter();

  // Router Events
  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      console.log('handleRouteChangeStart');
      setTransition({ opacity: 0.0, transform: 'scale(0.5)' });
    };
    const handleRouteChangeComplete = (url) => {
      console.log('handleRouteChangeComplete');
      // You need to wait a few ms when the load is instant to trigger the css animation
      // It might be best to time the route change and only delay if instant
      setTimeout(() => {
        setTransition({ opacity: 1.0, transform: 'scale(1.0)' });
      }, 500);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <div style={{ transition: 'all 1s', ...transition }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
