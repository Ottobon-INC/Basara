# Stage 1: Build the React application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies securely
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the app for production (Vite outputs to 'dist')
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the previous stage to replace the default nginx contents
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the Docker host
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
