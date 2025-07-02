# Etapa base: Node.js oficial
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar solo los archivos necesarios primero (mejor caché)
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto de Vite (por defecto: 5173)
EXPOSE 5173

# Habilitar modo host para Vite (puede requerir configuración en vite.config.js)
ENV HOST=0.0.0.0

# Comando de inicio
CMD ["npm", "run", "dev"]
