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
        stage('Start Applications with PM2') {
            steps {
                script {
                    // Stop the specific PM2 processes if they are running
                    sh 'pm2 stop backend || true'
                    sh 'pm2 delete backend || true'
                    sh 'pm2 stop frontend || true'
                    sh 'pm2 delete frontend || true'

                    // Start the backend process using PM2 with server.js
                    sh 'pm2 start Backend/server.js --name backend --watch -f'

                    // Serve the Next.js build using a static server via PM2
                    sh 'pm2 serve Frontend/out 3000 --name frontend --spa'

                    // Save the PM2 process list for persistence
                    sh 'pm2 save'
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
