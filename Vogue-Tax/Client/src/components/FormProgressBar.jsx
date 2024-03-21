import React, { useState, useEffect } from 'react';

const FormProgressBar = ({ value, maxValue, color }) => {
  
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (value >= 0 && value <= maxValue) {
      setProgress((value / maxValue) * 100);
    }
  }, [value, maxValue]); 

/*
const FormProgressBar = ({ value, maxValue, color }) => {

  let progress = 0;
  if (value >= 0 && value <= maxValue) {
    progress = (value / maxValue) * 100;
  }
  */

  return (
    <div
        style={{
          width: progress + '%',
          height: '8px',
          backgroundColor: color,
          borderRadius: '4px',
          transition: 'width 0.3s ease',
        }}
      />
  );
};

export default FormProgressBar;