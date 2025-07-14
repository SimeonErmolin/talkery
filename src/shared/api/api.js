import { useQuery } from '@tanstack/react-query';
import { getScheduleById } from './getScheduleById.js';
import { getSpecialists } from './getSpecialists.js';
import { getPromoCodes } from './getPromoCodes.js';
import { getReviews } from './getReviews.js';
import { getPaymentHistory } from './money/getPaymentHistory.js';
import { getMessagesById } from './getMessagesById.js';
import { getWithdrawHistory } from './money/getWithdrawHistory.jsx';
import { getClientsById } from './getClientsById.jsx';

export const useGetSpecialists = () => {
  return useQuery({
    queryKey: ['specialists'],
    queryFn: getSpecialists,
  });
};

export const useGetScheduleById = (userId) => {
  return useQuery({
    queryKey: ['schedule'],
    queryFn: () => getScheduleById(userId),
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

export const useGetWithdrawHistory = () => {
  return useQuery({
    queryKey: ['withdrawHistory'],
    queryFn: getWithdrawHistory,
  });
};

export const useGetMessagesById = (userId) => {
  return useQuery({
    queryKey: ['messages'],
    queryFn: () => getMessagesById(userId),
  });
};

export const useGetClientsById = (userId) => {
  return useQuery({
    queryKey: ['messages'],
    queryFn: () => getClientsById(userId),
  });
};
