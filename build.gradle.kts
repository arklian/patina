import org.gradle.api.tasks.testing.logging.TestExceptionFormat
import org.gradle.api.tasks.testing.logging.TestLogEvent
import org.springframework.boot.gradle.tasks.bundling.BootBuildImage

plugins {
    java
    id("org.springframework.boot") version "3.3.1"
    id("io.spring.dependency-management") version "1.1.5"
    id("com.palantir.java-format") version "2.47.0"
    id("com.google.protobuf") version "0.9.4"
    id("application")
}

group = "org.patinanetwork"
version = "0.0.1-SNAPSHOT"

application {
    mainClass = "org.patinanetwork.PatinaApplication"
}

tasks.register<JavaExec>("runSimple") {
    dependsOn("classes")
    mainClass.set("org.patinanetwork.patinawebsite.search.Elasticsearch")
    classpath = sourceSets["main"].runtimeClasspath
}

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
    implementation("com.fasterxml.jackson.core:jackson-databind:2.15.0")
    implementation("co.elastic.clients:elasticsearch-java:8.15.0")
    // Apache HTTP Components
    implementation("org.apache.httpcomponents:httpclient:4.5.13")
    implementation("org.apache.httpcomponents:httpcore:4.4.14")
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

tasks.named("bootJar") {
    dependsOn(":js:patina")
}

tasks.named("generateProto") {
    group = "patina"
}


tasks.named<BootBuildImage>("bootBuildImage") {
    group = "patina"

    // Check if a custom tag is provided, otherwise use 'latest'
    val tag = if (project.hasProperty("imageTags")) {
        project.property("imageTags").toString()
    } else {
        "latest"
    }
    println("Building Docker image with tag: $tag")
    println("Build directory: ${rootProject.layout.buildDirectory.get()}")
    imageName.set("registry.digitalocean.com/patina/patina-site:$tag")
    dependsOn(":js:patina")
    publish.set(true)
    docker {
        publishRegistry {
            username.set(System.getenv("DO_DOCKER_IMAGE_UPLOAD_PAT"))
            password.set(System.getenv("DO_DOCKER_IMAGE_UPLOAD_PAT"))
        }
    }
}

tasks.register("tagAndPushDockerImage") {
    group = "patina"
    description = "Tag and push the Docker image with the latest tag"
    doLast {
        val primaryTag = if (project.hasProperty("imageTags")) {
            project.property("imageTags").toString()
        } else {
            "latest"
        }

        val baseImageName = "registry.digitalocean.com/patina/patina-site"
        val imageNameWithPrimaryTag = "$baseImageName:$primaryTag"
        val imageNameWithLatestTag = "$baseImageName:latest"

        println("Tagging Docker image with: $imageNameWithLatestTag")

        exec {
            commandLine("docker", "tag", imageNameWithPrimaryTag, imageNameWithLatestTag)
        }

        println("Pushing Docker image with tag: $primaryTag")
        exec {
            commandLine("docker", "push", imageNameWithPrimaryTag)
        }

        println("Pushing Docker image with tag: latest")
        exec {
            commandLine("docker", "push", imageNameWithLatestTag)
        }
    }
}

tasks.named("tagAndPushDockerImage") {
    dependsOn("bootBuildImage")
    dependsOn(":js:patina")
}

tasks.named<TaskReportTask>("tasks") {
    displayGroups = listOf("patina")
}
