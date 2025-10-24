import { showToast } from '../components/notifications/ToastContainer';

export const toast = {
  success: (message: string, description?: string, txHash?: string) => {
    showToast({ type: 'success', message, description, txHash });
  },
  
  error: (message: string, description?: string) => {
    showToast({ type: 'error', message, description });
  },
  
  info: (message: string, description?: string) => {
    showToast({ type: 'info', message, description });
  },
  
  warning: (message: string, description?: string) => {
    showToast({ type: 'warning', message, description });
  },
};
