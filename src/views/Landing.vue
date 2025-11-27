<template>
    <div class="landing-container min-h-screen flex flex-col font-sans">

        <!-- 1. NAVBAR -->
        <!-- Tailwind: flex, justify-between, padding, fondo blanco, sombra suave -->
        <nav class="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
            <div class="text-2xl font-bold text-indigo-600 flex items-center gap-2">
                🤖 ChatBot IA
            </div>
            <div class="space-x-4">
                <router-link to="/login" class="text-gray-600 hover:text-indigo-600 font-medium transition">
                    Ingresar
                </router-link>
                <!-- Botón con estilos híbridos -->
                <router-link to="/register" class="btn-custom">
                    Registrarse Gratis
                </router-link>
            </div>
        </nav>

        <!-- 2. HERO SECTION -->
        <!-- Tailwind para estructura: text-center, padding vertical -->
        <!-- Clase 'hero-bg' personalizada para el fondo -->
        <header class="hero-bg flex-1 flex flex-col justify-center items-center text-center px-4 py-20 text-white">
            <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Automatiza tus pedidos <br />
                <span class="text-yellow-300">mientras duermes</span>
            </h1>
            <p class="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
                La herramienta definitiva para freelancers y PyMEs.
                Deja que nuestra IA gestione tus clientes 24/7.
            </p>
            <div class="flex gap-4">
                <router-link to="/register" class="btn-custom bg-white text-indigo-700 hover:bg-gray-100 border-none">
                    Empezar Ahora
                </router-link>
                <button
                    class="px-6 py-3 rounded-full border-2 border-white font-bold hover:bg-white hover:text-indigo-600 transition">
                    Ver Demo
                </button>
            </div>
        </header>

        <!-- 3. FUNCIONES (Grid System) -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-6xl mx-auto px-6">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">¿Por qué elegirnos?</h2>

                <!-- Grid responsivo: 1 col en móvil, 3 en desktop (md:grid-cols-3) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <!-- Tarjeta 1 -->
                    <div class="feature-card group">
                        <div class="icon-box">💬</div>
                        <h3 class="text-xl font-bold mb-2 text-gray-800">Chatbots Inteligentes</h3>
                        <p class="text-gray-600">Responde dudas frecuentes sin levantar un dedo.</p>
                    </div>

                    <!-- Tarjeta 2 -->
                    <div class="feature-card group">
                        <div class="icon-box">📅</div>
                        <h3 class="text-xl font-bold mb-2 text-gray-800">Agenda Automática</h3>
                        <p class="text-gray-600">Toma pedidos y agendamientos directo en tu calendario.</p>
                    </div>

                    <!-- Tarjeta 3 -->
                    <div class="feature-card group">
                        <div class="icon-box">📈</div>
                        <h3 class="text-xl font-bold mb-2 text-gray-800">Métricas Reales</h3>
                        <p class="text-gray-600">Visualiza cuánto estás vendiendo en tiempo real.</p>
                    </div>

                </div>
            </div>
        </section>

        <!-- 4. PLANES -->
        <section class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-12">Planes Simples</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="plan in planes" :key="plan.nombre"
                        class="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                        <h3 class="text-2xl font-bold text-gray-800">{{ plan.nombre }}</h3>
                        <p class="text-4xl font-extrabold text-indigo-600 my-4">{{ plan.precio }}</p>
                        <ul class="text-left space-y-3 mb-8 text-gray-600">
                            <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                                <span class="text-green-500 mr-2">✔</span> {{ feature }}
                            </li>
                        </ul>
                        <button
                            class="w-full py-3 rounded-lg font-bold bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition">
                            Elegir Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer Simple -->
        <footer class="bg-gray-900 text-white py-8 text-center">
            <p>© 2024 ChatBot IA - Hecho con Vue y Tailwind</p>
        </footer>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const planes = ref([
    {
        nombre: 'Freelancer',
        precio: '$0',
        features: ['1 Chatbot', '50 conversaciones/mes', 'Soporte por correo']
    },
    {
        nombre: 'Pyme',
        precio: '$29',
        features: ['3 Chatbots', 'Conversaciones ilimitadas', 'Dashboard Pro', 'Soporte Prioritario']
    }
]);
</script>

<style scoped>
/* --- AQUÍ ENTRA TU TOQUE ORIGINAL --- */

/* 1. Fondo Degradado Animado */
.hero-bg {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* 2. Botón Personalizado (Reutilizable) */
.btn-custom {
    background-color: #4F46E5;
    /* Indigo 600 */
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    /* Pill shape */
    font-weight: bold;
    transition: transform 0.2s, box-shadow 0.2s;
    display: inline-block;
    text-decoration: none;
}

.btn-custom:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}

/* 3. Tarjetas con efecto glassmorphism o hover especial */
.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #f3f4f6;
    transition: all 0.3s ease;
    cursor: default;
}

.feature-card:hover {
    border-color: #4F46E5;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.icon-box {
    background: #EEF2FF;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    transition: background 0.3s;
}

/* Cuando hago hover en la tarjeta (.group), cambia el hijo (.icon-box) */
.feature-card:hover .icon-box {
    background: #4F46E5;
    /* Se pone azul */
    color: white;
    /* Icono blanco */
}
</style>