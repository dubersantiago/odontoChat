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

    stage('Construir imagen Docker') {
      steps {
        script {
          echo "Construyendo la imagen Docker..."
          sh "docker build -t ${env.IMAGE_NAME}:${BUILD_NUMBER} ."
        }
      }
    }

    stage('Login en Docker Hub') {
      steps {
        script {
          echo "Autenticando en Docker Hub..."
          withCredentials([usernamePassword(credentialsId: "${dockerhub}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
            sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
          }
        }
      }
    }

    stage('Subir imagen a Docker Hub') {
      steps {
        script {
          echo "Subiendo la imagen a Docker Hub..."
          sh "docker push ${env.IMAGE_NAME}:${BUILD_NUMBER}"

          // Etiquetar como 'latest' también
          sh "docker tag ${env.IMAGE_NAME}:${BUILD_NUMBER} ${env.IMAGE_NAME}:latest"
          sh "docker push ${env.IMAGE_NAME}:latest"
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
