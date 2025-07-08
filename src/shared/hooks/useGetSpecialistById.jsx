import { useQuery } from '@tanstack/react-query';
import { getInfoAboutSpecialistById } from '../api/getInfoAboutSpecialistById';
import React from 'react';
import { useNavigate } from 'react-router';

export const useGetSpecialistById = (id) => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['specialist', id],
    queryFn: () => getInfoAboutSpecialistById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return {
      loadingElement: <p>Загрузка...</p>,
    };
  }

  if (error || !data) {
    return {
      loadingElement: (
        <div>
          <h1>ERROR</h1>
          <button className="button solid" onClick={() => navigate(-1)}>
            ВЕРНУТЬСЯ НАЗАД
          </button>
        </div>
      ),
    };
  }

  const {
    specialization = '',
    video = '',
    description = '',
    work = '',
    qualifications = [],
    approaches = [],
    reviews = {},
    language = [],
    therapy = [],
    experience = {},
  } = data;

  const {
    avatar = '',
    name = '',
    date = '',
    stars = 0,
    comment = '',
  } = reviews || {};

  const {
    education = '',
    certificates = [],
    courses = '',
    other = '',
  } = experience || {};

  return {
    loadingElement: null,
    navigate,
    data: {
      specialization,
      video,
      description,
      work,
      qualifications,
      approaches,
      review: {
        avatar,
        name,
        date,
        stars,
        comment,
      },
      language,
      therapy,
      experience: {
        education,
        certificates,
        courses,
        other,
      },
    },
  };
};
