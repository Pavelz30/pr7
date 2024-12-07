FROM openjdk:23-jdk-slim AS build-stage
WORKDIR /app
COPY . .
RUN ./gradlew bootJar

FROM openjdk:23-jdk-slim AS final-stage
WORKDIR /app
COPY --from=build-stage /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
