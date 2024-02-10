import org.gradle.kotlin.dsl.register
// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    id("com.android.application") version "8.2.2" apply false
    id ("com.android.library") version "7.1.2" apply false
}



val clean by tasks.register<Delete>("clean") {
    delete(rootProject.buildDir)
}