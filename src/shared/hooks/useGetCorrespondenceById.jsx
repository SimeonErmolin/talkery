import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { getCorrespondenceById } from '../api/getCorrespondenceById';

export const useGetCorrespondenceById = (id) => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['correspondence', id],
    queryFn: () => getCorrespondenceById(id),
    enabled: !!id,
  });

  const memoizedData = useMemo(() => {
    if (!data) return null;

    const {
      name = '',
      online = false,
      avatar = '',
      date = '',
      messages = [],
    } = data;

    return {
      name,
      online,
      avatar,
      date,
      messages,
    };
  }, [data]);

  return {
    loadingElement: isLoading ? <p>Загрузка...</p> : null,
    errorElement:
      error || !data ? (
        <div>
          <h1>ERROR</h1>
          <button className="button solid" onClick={() => navigate(-1)}>
            ВЕРНУТЬСЯ НАЗАД
          </button>
        </div>
      ) : null,
    navigate,
    data: memoizedData,
  };
};
