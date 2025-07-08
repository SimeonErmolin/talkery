import React from 'react';

const GuaranteeBlock = () => {
  return (
    <section className={'guarantee'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="414"
        height="290"
        viewBox="0 0 414 290"
        fill="none"
      >
        <path
          d="M206.995 -348.526L467.093 -222.511V92.5293C467.093 234.297 368.008 376.065 206.995 439.073C45.9822 376.065 -53.1029 250.049 -53.1029 92.5293V-222.511L206.995 -348.526Z"
          stroke="#4dc59133"
          strokeWidth="91.0349"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="icon">
        <img src="/src/assets/icons/verifed_green.svg" alt="" />
      </div>
      <h3>Гарантія задоволеності</h3>
      <p>
        Якщо вам не сподобається обраний терапевт,
        <br className={'mobile-hide'} /> ми допоможемо вам знайти іншого
        безкоштовно
      </p>
    </section>
  );
};

export default GuaranteeBlock;
