pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/production']], extensions: [], userRemoteConfigs: [[credentialsId: 'abdul_git_repo_credentials', url: 'https://github.com/deventialimited/deventia-website-version-02.git']])
            }
        }
        stage('Install Dependencies - Frontend') {
            steps {
                dir('Frontend') {
                    sh 'npm install' // Install dependencies for the frontend
                }
            }
        }
        stage('Build - Frontend') {
            steps {
                dir('Frontend') {
                    script {
                        try {
                            sh 'npm run build' // Build the Next.js app
                        } catch (err) {
                            echo "Build failed: ${err}"
                            error("Build failure")
                        }
                    }
                }
            }
        }
        stage('Install Dependencies - Backend') {
            steps {
                dir('Backend') {
                    sh 'npm install' // Install dependencies for the backend
                }
            }
        }
        stage('Start Frontend with PM2') {
            steps {
                script {
                    // Navigate to the Frontend directory where ecosystem.config.js is located
                    dir('Frontend') {
                        // Stop and delete existing PM2 frontend processes if they are running
                        sh 'pm2 stop frontend || true'
                        sh 'pm2 delete frontend || true'

                        // Start the frontend application using PM2 with the ecosystem file
                        sh 'pm2 start ecosystem.config.js'

                        // Save the PM2 process list for persistence
                        sh 'pm2 save'
                    }
                }
            }
        }
        stage('Start Backend') {
            steps {
                script {
                    // Start the backend process using PM2
                    sh 'pm2 start Backend/server.js --name backend --watch -f'
                }
            }
        }
    }
    post {
        success {
            echo 'Deployment successful.'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
