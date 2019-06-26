node {
    checkout scm
    docker.image('node:10-alpine').inside {
      	stage('Build') {
        	sh 'npm run build'
      	}
      	stage('Test') {
        	sh 'npm run test'
    	}
    }	
    stage('Push to Azure Container Registry') {
    	app = docker.build('leozvasconcellos.azurecr.io/itau-es6-portal')
        docker.withRegistry('https://leozvasconcellos.azurecr.io', 'acr_credentials') {
        	app.push("v1")
        	app.push('latest')
    	}
    }
}
