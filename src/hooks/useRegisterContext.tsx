import { RegisterContext } from '@/contexts/RegisterContext';
import { useContext } from 'react';

export default function useRegisterContext() {
  return useContext(RegisterContext);
}
