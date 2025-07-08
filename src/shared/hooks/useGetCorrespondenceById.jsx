import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router';
import { getCorrespondenceById } from '../api/getCorrespondenceById';

export const useGetCorrespondenceById = (id) => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['correspondence', id],
    queryFn: () => getCorrespondenceById(id),
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
    name = '',
    online = false,
    avatar = '',
    date = '',
    messages = [],
  } = data;

  return {
    loadingElement: null,
    navigate,
    data: {
      name,
      online,
      avatar,
      date,
      messages,
    },
  };
};
