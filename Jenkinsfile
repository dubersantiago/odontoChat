pipeline {
  agent any

  stages {

    stage('Clonar repositorio') {
      steps {
        echo "Clonando el repositorio..."
        withCredentials([
          string(credentialsId: 'GIT_URL', variable: 'GIT_URL'),
          string(credentialsId: 'BRANCH_NAME', variable: 'BRANCH_NAME')
        ]) {
          git branch: "${BRANCH_NAME}",
              url: "${GIT_URL}",
              credentialsId: 'github-credentials'
        }
      }
    }

    stage('Pruebas') {
      steps {
        sh 'echo "Ejecutando tests..."'
      }
    }

    stage('Desplegar') {
      steps {
        sh 'echo "Desplegando aplicación..."'
      }
    }
  }
}
