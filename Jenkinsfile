pipeline { 
    environment {
        registry = "leozvasconcellos.azurecr.io/itau-es6-portal"
        registryCredential = 'acr_credentials'
    }
    tools {
         org.jenkinsci.plugins.docker.commons.tools.DockerTool 'default'
    }
    agent { dockerfile true }
    stages {
        stage('Building image') {
            steps{
                script {
                    docker.build registry + ":latest"
                }
            }
        }
    }
}
