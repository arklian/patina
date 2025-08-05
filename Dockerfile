# Stage 1: Build the application
FROM gradle:jdk23 AS builder
WORKDIR /app

# Copy the entire project
COPY . .

# Build the Spring Boot executable jar.
RUN ./gradlew bootJar --no-daemon

# Stage 2: Create the final, runnable image
FROM eclipse-temurin:23-jre
WORKDIR /app

# Copy the application jar from the 'builder' stage
COPY --from=builder /app/build/libs/*.jar app.jar

# Install dependencies for Playwright.
# Hard coding it instead of using npx playwright install-deps since it increases the image size by 700MB.
# See Firefox + OS version to find the list of deps here:
# https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/registry/nativeDeps.ts
RUN apt-get update \
    && apt-get install -y libasound2t64 \
      libatk1.0-0t64 \
      libcairo-gobject2 \
      libcairo2 \
      libdbus-1-3 \
      libfontconfig1 \
      libfreetype6 \
      libgdk-pixbuf-2.0-0 \
      libglib2.0-0t64 \
      libgtk-3-0t64 \
      libpango-1.0-0 \
      libpangocairo-1.0-0 \
      libx11-6 \
      libx11-xcb1 \
      libxcb-shm0 \
      libxcb1 \
      libxcomposite1 \
      libxcursor1 \
      libxdamage1 \
      libxext6 \
      libxfixes3 \
      libxi6 \
      libxrandr2 \
      libxrender1 \
    && apt-get -y autoclean \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*

# Copy browsers from the browser install in gradle.
COPY --from=builder /app/build/playwright-browsers /app/browsers
ENV PLAYWRIGHT_BROWSERS_PATH=/app/browsers
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
RUN mkdir -p /app/playwright

# Set the entrypoint to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
