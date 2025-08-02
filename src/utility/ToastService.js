// src/utils/toastService.js
import { toast } from 'react-toastify';
import CustomToast from '../components/CustomToast';

const ToastService = {
    success: (message, options = {}) =>
        toast.success(message, { ...options }),

    error: (message, options = {}) =>
        toast.error(message, { ...options }),

    info: (message, options = {}) =>
        toast.info(message, { ...options }),

    warning: (message, options = {}) =>
        toast.warning(message, { ...options }),

    custom: (message, options = {}) =>
        toast(<CustomToast msg={message}/>, { ...options }),
};

export default ToastService;
