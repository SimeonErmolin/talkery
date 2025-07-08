import React, { useEffect } from 'react';
import './SpecialistPage.scss';
import { useParams } from 'react-router';
import Tabs from './components/Tabs.jsx';
import QualificationsApproaches from './components/QualificationsApproaches.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import BottomButtons from './components/BottomButtons.jsx';
import GeneralInformation from './components/GeneralInformation.jsx';
import ForYou from './components/ForYou.jsx';
import Accordion from './components/Accordion.jsx';
import QualificationLanguage from './components/QualificationLanguage.jsx';
import { useModal } from '../../../../shared/hooks/useModal.js';
import { useGetSpecialistById } from '../../../../shared/hooks/useGetSpecialistById.jsx';
import ModalLayout from '../../../../shared/components/ModalLayout/ModalLayout.jsx';
import RegistrationTransferModal from '../../../../shared/components/RegistrationTransferModal/RegistrationTransferModal.jsx';
import TemplateCatalogCard from '../../../../shared/components/TemplateSpecialistCard/TemplateCatalogCard.jsx';

const SpecialistPage = () => {
  const { id } = useParams();

  const { modalIsOpened, openModal, closeModal } = useModal();

  const { loadingElement, navigate, data } = useGetSpecialistById(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loadingElement) return loadingElement;

  const {
    specialization,
    // video,
    description,
    work,
    qualifications,
    approaches,
    review,
    language,
    therapy,
    experience,
  } = data;

  const isPsychologist = specialization === 'psychologist';
  const hasQualifications = qualifications.length > 0;
  const hasApproaches = approaches.length > 0;
  const hasLanguages = language.length > 0;
  const hasTherapies = therapy.length > 0;
  const hasReview = !!review?.name;
  const hasExperience =
    experience.education ||
    experience.courses ||
    experience.other ||
    experience.certificates?.length > 0;

  return (
    <div className="specialist-page">
      <TemplateCatalogCard id={id} place={'card'} />

      <div className="specialist-video">
        <button className="specialist-video__play-btn"></button>
      </div>

      <Tabs
        specialization={specialization}
        description={description}
        work={work}
      />

      {isPsychologist
        ? (hasQualifications || hasApproaches) && (
            <QualificationsApproaches
              qualifications={qualifications}
              approaches={approaches}
            />
          )
        : (hasQualifications || hasLanguages) && (
            <QualificationLanguage
              qualifications={qualifications}
              language={language}
            />
          )}

      {hasReview && <Reviews {...review} />}

      {isPsychologist && (hasLanguages || hasTherapies) && (
        <GeneralInformation language={language} therapy={therapy} />
      )}

      {isPsychologist && hasExperience && <Accordion {...experience} />}

      {isPsychologist && <ForYou />}

      <BottomButtons navigate={navigate} openModal={openModal} />

      <ModalLayout
        onClose={closeModal}
        isOpen={modalIsOpened}
        contentClassName={'registration-transfer'}
      >
        <RegistrationTransferModal registration />
      </ModalLayout>
    </div>
  );
};

export default SpecialistPage;
