FROM openjdk:23-jdk-slim
WORKDIR /app
COPY . /app
RUN ./gradlew build
ENTRYPOINT ["java", "-jar", "app.jar"]
