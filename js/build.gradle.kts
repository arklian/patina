import com.github.gradle.node.NodeExtension
import com.github.gradle.node.pnpm.task.PnpmTask

plugins {
    java
    id("com.github.node-gradle.node") version "7.0.2"
}

configure<NodeExtension> {
    download = true
    pnpmVersion = "9.3.0"
    npmVersion = "10.8.1"
}

val buildTask = tasks.register<PnpmTask>("patina") {
    group = "Patina"
    description = "Builds the frontend for Patina through Vite."
    dependsOn("pnpmInstall")
    args.set(listOf("run", "build","--emptyOutDir", "--outDir", "${rootProject.layout.buildDirectory.dir("resources/main/static").get()}"))
    outputs.dir(rootProject.layout.buildDirectory.dir("resources/main/static"))
    inputs.files(fileTree("."))
}
