type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastEvent extends CustomEvent {
  detail: {
    type: ToastType;
    title: string;
    message: string;
    txHash?: string;
  };
}

export const toast = {
  success: (title: string, message: string, txHash?: string) => {
    window.dispatchEvent(
      new CustomEvent('show-toast', {
        detail: { type: 'success', title, message, txHash },
      })
    );
  },
  
  error: (title: string, message: string) => {
    window.dispatchEvent(
      new CustomEvent('show-toast', {
        detail: { type: 'error', title, message },
      })
    );
  },
  
  warning: (title: string, message: string) => {
    window.dispatchEvent(
      new CustomEvent('show-toast', {
        detail: { type: 'warning', title, message },
      })
    );
  },
  
  info: (title: string, message: string) => {
    window.dispatchEvent(
      new CustomEvent('show-toast', {
        detail: { type: 'info', title, message },
      })
    );
  },
};
