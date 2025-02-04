import React from 'react';

const FormattedText = ({ text }) => {
  return (
    <>
      {text.split('').map((char, index) =>
        /[!@#$%^&*()_+-={}\[\]:;"'<>,.?🏋️‍♂️✈️👨‍👩‍👧‍👦\/|\\]/.test(char) ? (
          <span key={index} style={{ fontFamily: 'Arial, sans-serif' }}>
            {char}
          </span>
        ) : (
          char
        )
      )}
    </>
  );
};

export default FormattedText;
