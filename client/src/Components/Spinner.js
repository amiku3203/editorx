import React, { useEffect, useRef } from 'react';
import './Spinner.css'; // Remember to create a corresponding CSS file

const Spinner = () => {
  const spinnerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (spinnerRef.current) {
        spinnerRef.current.style.transform = `rotate(${(parseInt(spinnerRef.current.style.transform.replace('rotate(', '').replace('deg)', ''), 10) || 0) + 5}deg)`;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="spinner">
      <div ref={spinnerRef} className="spinner-inner"></div>
    </div>
  );
};

export default Spinner;
