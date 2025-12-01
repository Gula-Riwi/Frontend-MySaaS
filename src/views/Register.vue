<template>
    <div class="min-h-screen w-full flex items-center justify-center bg-blue-950 relative overflow-hidden font-sans">
        <router-link to="/"
            class="absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6" />
            </svg>
            <span class="font-medium">Volver al inicio</span>
        </router-link>

        <div
            class="relative z-10 w-full max-w-md p-8 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl mx-4">

            <div class="text-center mb-8">
                <h2 class="text-7xl font-bold font-league text-white mb-2">
                    Crear
                    <span class="block sm:inline-block">
                        <LineShadowText shadowColor="white">Cuenta</LineShadowText>
                    </span>
                </h2>
                <p class="text-gray-200 text-sm">Gestiona tus pedidos con IA hoy mismo</p>
            </div>

            <form @submit.prevent="registrarse" class="space-y-5">

                <!-- Nombre -->
                <div class="space-y-1">
                    <label class="text-sm font-medium text-gray-300 ml-1">Nombre de Empresa / Freelancer</label>
                    <input type="text" v-model="nombre" required placeholder="Mi Negocio Inc."
                        class="w-full bg-gray-950/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                </div>

                <!-- Correo -->
                <div class="space-y-1">
                    <label class="text-sm font-medium text-gray-300 ml-1">Correo Electrónico</label>
                    <input type="email" v-model="email" required placeholder="ejemplo@correo.com"
                        class="w-full bg-gray-950/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                </div>

                <!-- Contraseña -->
                <div class="space-y-1">
                    <label class="text-sm font-medium text-gray-300 ml-1">Contraseña</label>
                    <input type="password" v-model="password" required placeholder="••••••••"
                        class="w-full bg-gray-950/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                </div>

                <!-- Confirmar Contraseña -->
                <div class="space-y-1">
                    <label class="text-sm font-medium text-gray-300 ml-1">Confirmar Contraseña</label>
                    <input type="password" v-model="confirmPassword" required placeholder="••••••••"
                        class="w-full bg-gray-950/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                </div>

                <!-- Botón de Registro (Usando ShimmerButton) -->
                <div class="pt-4">
                    <ShimmerButton class="w-full font-bold" shimmer-size="2px" background="#312e81"
                        shimmerColor="#818cf8" border-radius="12px" @click="registrarse">
                        <span class="text-white tracking-wide">
                            Registrarse
                        </span>
                    </ShimmerButton>
                </div>
            </form>

            <!-- Footer -->
            <div class="mt-6 text-center text-sm text-gray-400">
                <p>¿Ya tienes cuenta?
                    <router-link to="/login"
                        class="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                        Inicia Sesión
                    </router-link>
                </p>
            </div>
        </div>

        <!-- 3. FONDO ANIMADO -->
        <InteractiveGridPattern :width="60" :height="60" :squares="[50, 50]"
            squares-class-name="hover:fill-indigo-500/50"
            :class="'[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] opacity-40'" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InteractiveGridPattern from '@/components/InteractiveGridPattern.vue';
import ShimmerButton from '@/components/ShimmerButton.vue'; 
import LineShadowText from '@/components/LineShadowText.vue';

const router = useRouter();


const nombre = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const registrarse = () => {
    if (!nombre.value || !email.value || !password.value) {
        alert("Por favor completa todos los campos");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Las contraseñas no coinciden");
        return;
    }

    console.log("Registrando:", {
        nombre: nombre.value,
        email: email.value,
        pass: password.value
    });

    alert("Cuenta creada con éxito. Ahora ingresa a tu panel.");
    router.push('/dashboard');
};
</script>

