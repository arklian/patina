import org.gradle.api.tasks.testing.logging.TestExceptionFormat
import org.gradle.api.tasks.testing.logging.TestLogEvent
import org.springframework.boot.gradle.tasks.bundling.BootBuildImage

plugins {
    java
    id("org.springframework.boot") version "3.3.1"
    id("io.spring.dependency-management") version "1.1.5"
    id("com.palantir.java-format") version "2.47.0"
    id("com.google.protobuf") version "0.9.4"
}

group = "org.patinanetwork"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(22)
    }
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:4.27.2"
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
    implementation("com.google.protobuf:protobuf-java:4.27.2")
    implementation("com.google.protobuf:protobuf-java-util:4.27.2")
    implementation("org.springframework.boot:spring-boot-starter-oauth2-client")
    implementation("org.springframework.boot:spring-boot-starter-security")
    runtimeOnly("org.postgresql:postgresql")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}



tasks.withType<Test> {
    useJUnitPlatform()
    testLogging {
        events(TestLogEvent.FAILED);
        exceptionFormat = TestExceptionFormat.FULL
    }
}

tasks.named("bootRun") {
    group = "patina"
    dependsOn(":js:patina")
}

tasks.named("generateProto") {
    group = "patina"
}


tasks.named<BootBuildImage>("bootBuildImage") {
    group = "patina"
    imageName.set("registry.digitalocean.com/patina/patina-test")
    publish.set(true)
    docker {
        publishRegistry {
            username.set(System.getenv("DO_DOCKER_IMAGE_UPLOAD_PAT"))
            password.set(System.getenv("DO_DOCKER_IMAGE_UPLOAD_PAT"))
        }
    }
}

tasks.named<TaskReportTask>("tasks") {
    displayGroups = listOf("patina")
}
