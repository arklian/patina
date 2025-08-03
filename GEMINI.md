# Gemini Code Assistant Context

This document provides context for the Gemini code assistant to understand the Patina project.

## Project Overview

The Patina project is a full-stack web application.

**Backend:**

*   **Language:** Java
*   **Framework:** Spring Boot
*   **Build Tool:** Gradle
*   **Key Dependencies:**
    *   Spring Web
    *   Spring Security (with OAuth2)
    *   PostgreSQL JDBC Driver
    *   JDA (Java Discord API)
    *   Protobuf

**Frontend:**

*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Package Manager:** pnpm
*   **UI Library:** Mantine
*   **Key Dependencies:**
    *   React Router
    *   React Query
    *   Tiptap (rich text editor)

**Architecture:**

The project is a monolith with two main modules:

*   `js`: The React frontend.
*   `src`: The Spring Boot backend.

The Gradle build is configured to build the frontend first and then package it into the Spring Boot application.

## Building and Running

**Backend:**

*   Run the application: `./gradlew bootRun`
*   Build the application: `./gradlew build`
*   Run tests: `./gradlew test`

**Frontend:**

*   Install dependencies: `pnpm install`
*   Run in development mode: `pnpm dev`
*   Build for production: `pnpm build`
*   Run tests: `pnpm test`

## Development Conventions

*   **Code Formatting:**
    *   Java: `com.palantir.java-format`
    *   TypeScript/TSX: `prettier`
*   **Linting:**
    *   TypeScript/TSX: `eslint`
    *   CSS: `stylelint`
*   **Testing:**
    *   Java: JUnit Platform
    *   TypeScript/TSX: `vitest` with React Testing Library
