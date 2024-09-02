// pipline 
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
               checkout scmGit(branches: [[name: '*/production']], extensions: [], userRemoteConfigs: [[credentialsId: 'abdul_git_repo_credentials', url: 'https://github.com/deventialimited/deventia-website-version-02.git']])
                )
            }
        }
        stage('Install Dependencies - Frontend') {
            steps {
                dir('Frontend') {
                    sh 'npm ci --force --legacy-peer-deps'
                }
            }
        }
        stage('Build - Frontend') {
            steps {
                dir('Frontend') {
                    script {
                        try {
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
            when {
                expression { currentBuild.resultIsBetterOrEqualTo('SUCCESS') }
            }
            steps {
                dir('Backend') {
                    sh 'npm ci'
                }
            }
        }
        stage('Start Backend') {
            when {
                expression { currentBuild.resultIsBetterOrEqualTo('SUCCESS') }
            }
            steps {
                dir('Backend') {
                    script {
                        // Check if the backend is already running
                        def processStatus = sh(script: ' pm2 list | grep backend', returnStatus: true)
                        
                        // If the process is running, stop it
                        if (processStatus == 0) {
                            sh ' pm2 stop backend || true'
                            sh ' pm2 delete backend || true'
                        }

                        // Start the backend process with PM2
                        sh ' pm2 start index.js --name backend --watch -f'
                        
                        // Save PM2 process list to ensure persistence
                        sh 'pm2 save'
                    }
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
