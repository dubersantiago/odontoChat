pipeline {
  agent any

  stages {

    stage('Clonar repositorio') {
        steps {
            echo "Clonando el repositorio..."
            git branch: "${BRANCH_NAME}",
                url: "${GIT_URL}",
                credentialsId: 'github-credentials'
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
