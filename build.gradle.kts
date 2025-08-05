import org.gradle.api.tasks.testing.logging.TestExceptionFormat
import org.gradle.api.tasks.testing.logging.TestLogEvent

plugins {
    java
    id("org.springframework.boot") version "3.3.1"
    id("io.spring.dependency-management") version "1.1.5"
    id("com.palantir.java-format") version "2.50.0"
    id("com.google.protobuf") version "0.9.4"
}

group = "org.patinanetwork"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(23)
    }
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:4.28.2"
    }

    generateProtoTasks {
        all().forEach { task ->
            task.builtins {
                java { }
            }

        }
    }
}

sourceSets.main {
    proto.srcDirs("src/main/java")
    java.srcDirs("build/generated/source/proto/main/grpc")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.google.protobuf:protobuf-java:4.28.2")
    implementation("com.google.protobuf:protobuf-java-util:4.28.2")
    implementation("org.springframework.boot:spring-boot-starter-oauth2-client")
    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("net.dv8tion:JDA:5.2.2")
    implementation("jakarta.mail:jakarta.mail-api:2.0.1")
    implementation("com.sun.mail:jakarta.mail:2.0.1")
    implementation("org.jsoup:jsoup:1.21.1")
    implementation("com.microsoft.playwright:playwright:1.53.0")
    runtimeOnly("org.postgresql:postgresql")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}



tasks.withType<Test> {
    useJUnitPlatform()
    testLogging {
        events(TestLogEvent.FAILED)
        exceptionFormat = TestExceptionFormat.FULL
    }
}


tasks.named("bootRun") {
    group = "patina"
    dependsOn(":js:patina")
}

tasks.named("bootJar") {
    dependsOn(":js:patina")
    dependsOn(tasks.named("installPlaywrightBrowser"))
}

tasks.named("generateProto") {
    group = "patina"
}

tasks.register<JavaExec>("installPlaywrightBrowser") {
    group = "patina"
    description = "Installs Playwright browser."

    // Define the output directory for the downloaded firefox. (/app/build/playwright-browsers)
    val browsersPath = rootProject.layout.buildDirectory.dir("playwright-browsers")
    outputs.dir(browsersPath)

    // Set the environment variable for the Playwright CLI to control download location
    environment("PLAYWRIGHT_BROWSERS_PATH", browsersPath.get().asFile.absolutePath)

    classpath = sourceSets.main.get().runtimeClasspath
    mainClass.set("com.microsoft.playwright.CLI")
    args = listOf("install", "firefox", "--with-deps")
}



tasks.named<TaskReportTask>("tasks") {
    displayGroups = listOf("patina")
}
