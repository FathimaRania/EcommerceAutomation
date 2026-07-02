pipeline {

    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/FathimaRania/EcommerceAutomation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true

            archiveArtifacts artifacts: 'allure-report/**', fingerprint: true

        }

    }

}