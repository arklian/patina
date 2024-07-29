plugins {
    java
    id("org.springframework.boot") version "3.3.1"
    id("io.spring.dependency-management") version "1.1.5"
    id("com.palantir.java-format") version "2.47.0"
    id("java")
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
            task.group = "protos"
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
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("com.google.protobuf:protobuf-java:4.27.2")
    runtimeOnly("org.postgresql:postgresql")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.withType<Test> {
    useJUnitPlatform()
}

tasks.named("bootRun") {
    group = "patina"
    dependsOn(":js:patina")

}

tasks.named<TaskReportTask>("tasks") {
    displayGroups = listOf("patina")
}
