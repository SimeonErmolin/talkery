import React, { useState } from 'react';

const Accordion = ({ education, certificates, courses, other }) => {
  const [openItems, setOpenItems] = useState({
    education: true,
    courses: false,
    other: false,
  });

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="specialist-card-container">
      <h3 className="specialist-page__subtitle">Мій досвід</h3>

      <div className="experience-accordion">
        <div className="experience-accordion__item">
          <div
            className="experience-accordion__item--title"
            onClick={() => toggleItem('education')}
          >
            <div>
              <img
                src="/src/assets/icons/specialist-page/document.svg"
                alt=""
              />
              <p>Вища та професійна освіта</p>
            </div>

            <button>
              <img
                src={`/src/assets/icons/search/modal/${openItems.education ? 'minus' : 'plus'}.svg`}
                alt=""
              />
            </button>
          </div>

          {openItems.education && (
            <>
              <pre>
                <p className="experience-accordion__item--text">{education}</p>
              </pre>

              <div className="experience-accordion__item--certificates">
                {certificates.map((item) => (
                  <img key={item} src={item} alt="" />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="experience-accordion__item">
          <div
            className="experience-accordion__item--title"
            onClick={() => toggleItem('courses')}
          >
            <div>
              <img src="/src/assets/icons/specialist-page/medal.svg" alt="" />
              <p>Професійні курси</p>
            </div>

            <button>
              <img
                src={`/src/assets/icons/search/modal/${openItems.courses ? 'minus' : 'plus'}.svg`}
                alt=""
              />
            </button>
          </div>

          {openItems.courses && (
            <pre>
              <p className="experience-accordion__item--text">{courses}</p>
            </pre>
          )}
        </div>

        <div className="experience-accordion__item">
          <div
            className="experience-accordion__item--title"
            onClick={() => toggleItem('other')}
          >
            <div>
              <img src="/src/assets/icons/specialist-page/glasses.svg" alt="" />
              <p>Інший досвід</p>
            </div>

            <button>
              <img
                src={`/src/assets/icons/search/modal/${openItems.other ? 'minus' : 'plus'}.svg`}
                alt=""
              />
            </button>
          </div>

          {openItems.other && (
            <pre>
              <p className="experience-accordion__item--text">{other}</p>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
