# --- ETAPA 1: Construcción (Build Stage) ---
# Usamos una imagen ligera de Node
FROM node:22.12 as build-stage

# Establecemos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero los archivos de dependencias (para aprovechar la caché de Docker)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Compilamos el proyecto (Esto crea la carpeta /app/dist)
RUN npm run build

# --- ETAPA 2: Producción (Production Stage) ---
# Usamos Nginx para servir los archivos estáticos (es mucho más rápido que Node para esto)
FROM nginx:alpine as production-stage

# Copiamos los archivos compilados de la etapa anterior a la carpeta de Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copiamos nuestra configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos el puerto 80 (el estándar web)
EXPOSE 80

# Arrancamos Nginx
CMD ["nginx", "-g", "daemon off;"]