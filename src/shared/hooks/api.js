import { useQuery } from '@tanstack/react-query';
import { getSchedule } from '../api/getSchedule';
import { getSpecialists } from '../api/getSpecialists';
import { getPromoCodes } from '../api/getPromoCodes';
import { getReviews } from '../api/getReviews';
import { getPaymentHistory } from '../api/getPaymentHistory';
import { getMessages } from '../api/getMessages';

export const useGetSpecialists = () => {
  return useQuery({
    queryKey: ['specialists'],
    queryFn: getSpecialists,
  });
};

export const useGetSchedule = () => {
  return useQuery({
    queryKey: ['schedule'],
    queryFn: getSchedule,
  });
};

export const useGetPromoCodes = () => {
  return useQuery({
    queryKey: ['promoCodes'],
    queryFn: getPromoCodes,
  });
};

export const useGetReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
  });
};

export const useGetPaymentHistory = () => {
  return useQuery({
    queryKey: ['paymentHistory'],
    queryFn: getPaymentHistory,
  });
};

export const useGetMessages = () => {
  return useQuery({
    queryKey: ['messages'],
    queryFn: getMessages,
  });
};
