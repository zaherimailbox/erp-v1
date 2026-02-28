import { showAlert } from './action';

const button = document.getElementById('btn-action');

if (button) {
    button.addEventListener('click', () => {
        showAlert("اتصال TypeScript با موفقیت برقرار شد!");
    });
}