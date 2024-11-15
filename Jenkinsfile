pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(
                    branches: [[name: '*/production']],
                    extensions: [],
                    userRemoteConfigs: [[
                        credentialsId: 'abdul_git_repo_credentials',
                        url: 'https://github.com/deventialimited/deventia-website-version-02.git'
                    ]]
                )
            }
        }

        stage('Install Dependencies - Frontend') {
            steps {
                dir('Frontend') {
                    // Use npm ci for clean installation of dependencies
                    sh 'npm ci'
                }
            }
        }

        stage('Build - Frontend') {
            steps {
                dir('Frontend') {
                    script {
                        try {
                            // Build the Next.js application
                            sh 'npm run build'
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
                    // Install backend dependencies
                    sh 'npm ci'
                }
            }
        }

        stage('Start Applications with PM2') {
            steps {
                script {
                    // Stop and delete existing PM2 processes if they are running
                    sh 'pm2 stop backend || true'
                    sh 'pm2 delete backend || true'
                    sh 'pm2 stop frontend || true'
                    sh 'pm2 delete frontend || true'

                    // Start the backend process using PM2
                    sh 'pm2 start Backend/server.js --name backend --watch -f'

                    // Start the frontend process using PM2 from the Frontend directory
                    dir('Frontend') {
                        // Use npm start for the frontend application
                        sh 'pm2 start npm --name frontend -- start --cwd $(pwd) --watch -f'
                    }

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
