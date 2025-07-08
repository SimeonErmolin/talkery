import { useGetSpecialists } from './api';

export const useSpecialistById = (id) => {
  const { data, isLoading, isError } = useGetSpecialists();

  if (isLoading || isError) return { specialist: null, isLoading, isError };

  const allSpecialists = Object.values(data || {}).flat();
  const specialist = allSpecialists.find((s) => String(s.id) === String(id));

  return { specialist, isLoading: false, isError: false };
};
