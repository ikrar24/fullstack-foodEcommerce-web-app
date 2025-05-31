import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const PageLoader = () => {
  useEffect(() => {
    NProgress.start();

    const handleLoad = () => {
      NProgress.done();
    };

// Check if document is already loaded
    if (document.readyState === 'complete') {
      NProgress.done();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null; // This component only handles loading bar
};

export default PageLoader;
