pipeline {
    agent any
       stages{
        stage('Install Dependencies') {
            steps {
                // Install your project dependencies defined in package.json
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // Installs the specific browsers needed for the tests along with OS dependencies
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Executes the test suite
                bat 'npx playwright test'
            }
        }

       }
}
    