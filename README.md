# Community Connect Hub

Welcome to **Community Connect Hub** – a platform that connects individuals with various Non-Governmental Organizations (NGOs) working in different sectors like healthcare, education, and more. Our mission is to facilitate donations, provide membership options, visualize social issues, and predict poverty indices to drive positive change.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Overview
Community Connect Hub is designed to make charitable giving easy and transparent. Users can donate to various NGOs, become members of our community, visualize data on social issues like poverty and illiteracy, and access predictive analytics on poverty indices.

## Features
- **Donate to NGOs**: Users can browse and donate to different NGOs categorized by their focus areas such as healthcare, education, etc.
- **Community Membership**: Users can sign up for membership to get involved in our community activities and updates.
- **Data Visualization**: Interactive visualizations of state-wise data on poverty, illiteracy, and other social issues.
- **Poverty Index Prediction**: Predictive analytics to forecast poverty indices using historical data.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Python
- **Data Visualization**: Power BI
- **Database**: Firebase

## Installation
To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/community-connect-hub.git
    cd community-connect-hub
    ```

2. **Frontend Setup**:
    - Install dependencies:
        ```bash
        npm install
        ```

    - Start the React development server:
        ```bash
        npm start
        ```

3. **Backend Setup**:
    - Navigate to the other terminal and set up a virtual environment:
        ```bash
        python -m venv venv
        source venv/bin/activate  # On Windows use `venv\Scripts\activate`
        ```

    - Install the required Python packages:
        ```bash
        pip install -r requirements.txt
        ```

    - Start the backend server:
        ```bash
        python app.py
        ```

4. **Firebase Setup**:
    - Ensure you have a Firebase project set up and the necessary configuration files (`firebaseConfig.js`).

5. **Power BI Setup**:
    - Ensure you have Power BI Desktop installed to create and view the visualizations.

## Usage
- Visit `http://localhost:3000` to access the frontend of the application.
- Use the navigation bar to explore different sections such as Donate, Membership, Visualizations, and Poverty Predictions.

## Contributing
We welcome contributions from the community! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please ensure your code follows our coding standards and includes appropriate tests.

Thank you for contributing to Community Connect Hub! Together, we can make a difference.
