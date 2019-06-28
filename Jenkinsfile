pipeline { 
    environment {
        registry = "leozvasconcellos.azurecr.io/itau-es6-portal"
        registryCredential = 'acr_credentials'
    }
    tools {
        docker 'default'
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
