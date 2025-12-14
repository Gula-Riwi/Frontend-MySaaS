import Swal from 'sweetalert2';

// 1. Configuración Base (Dark Mode + Tailwind)
const baseSwal = Swal.mixin({
    background: '#111827',
    color: '#ffffff',
    customClass: {
        popup: 'border border-white/10 rounded-2xl shadow-2xl',
        title: 'font-league text-5xl font-light',
        htmlContainer: 'text-gray-300',
        confirmButton: 'bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl mx-2 transition-colors shadow-lg shadow-indigo-500/20',
        cancelButton: 'bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl mx-2 transition-colors border border-gray-600'
    },
    buttonsStyling: false
});


/**
 * Muestra una alerta de éxito
 */
export const showSuccess = (title, message) => {
    return baseSwal.fire({
        icon: 'success',
        title: title || '¡Éxito!',
        text: message,
        iconColor: '#4ade80' 
    });
};

/**
 * Muestra una alerta de error
 */
export const showError = (title, message) => {
    return baseSwal.fire({
        icon: 'error',
        title: title || 'Error',
        text: message,
        iconColor: '#f87171'
    });
};

/**
 * Pregunta de confirmación (Reemplazo de window.confirm)
 * Retorna true si el usuario acepta, false si cancela.
 */
export const confirmAction = async (title, message, confirmText = 'Sí, continuar') => {
    const result = await baseSwal.fire({
        title: title,
        text: message,
        icon: 'warning',
        iconColor: '#fbbf24', 
        showCancelButton: true,
        confirmButtonText: confirmText,
        cancelButtonText: 'Cancelar',
        reverseButtons: true 
    });

    return result.isConfirmed;
};

/**
 * Toast pequeño en la esquina (No bloquea la pantalla)
 */
export const showToast = (title, icon = 'success') => {
    const Toast = baseSwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
            popup: 'bg-gray-800 border border-white/10 rounded-xl shadow-xl'
        }
    });

    return Toast.fire({
        icon: icon,
        title: title
    });
};