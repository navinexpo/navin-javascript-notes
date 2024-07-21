/* eslint-disable react-refresh/only-export-components */
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const showToast = (message, type) => {
    toast(message, { type });
};

const Toast = () => (
    <ToastContainer position='top-right' autoClose={5000} hideProgressBar />
);

export default Toast;