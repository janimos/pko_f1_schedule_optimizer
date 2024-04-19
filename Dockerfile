# Stage 1: Build the Vue.js frontend
FROM node:21 as frontend-build

# Set the working directory for the frontend build
WORKDIR /app/frontend

# Copy the package.json and other npm-related files
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY frontend/ .

# Build the frontend; output will be in ../src/main/resources/static relative to /app/frontend
RUN npm run build

# Stage 2: Build the Spring Boot backend
FROM maven:3.8.3-openjdk-17 as backend-build

# Set the working directory for the backend build
WORKDIR /app

# Copy the entire backend source, including the frontend build output now located in src/main/resources/static
COPY . .

# Build the application using Maven, skipping tests to speed up the build
RUN mvn clean package -DskipTests

# Stage 3: Prepare the final image
FROM openjdk:17-slim

# Copy the backend jar from the backend-build stage
COPY --from=backend-build /app/target/*.jar /app.jar

# Command to run the application
CMD ["java", "-jar", "/app.jar"]

# Optional: Expose the port the backend is configured to listen on
EXPOSE 8080
