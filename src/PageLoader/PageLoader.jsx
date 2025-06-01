import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useLocation } from 'react-router-dom';
const PageLoader = () => {


const location = useLocation()

  useEffect(() => {
    // Spinner ko hide karo
    NProgress.configure({ showSpinner: false });

    NProgress.start();

    const handleLoad = () => {
      NProgress.done();
    };

    if (document.readyState === 'complete') {
      NProgress.done();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [location.pathname]);

  return null;
};

export default PageLoader;
