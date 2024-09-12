
WebRobot Cloud Dashboard </br> 
Welcome to the WebRobot Cloud Dashboard, an open-source project built with Next.js and Bootstrap CSS. This dashboard is designed to offer a comprehensive, high-performance solution for managing data extraction projects, tasks, and scheduling. Our goal is to make the platform intuitive, flexible, and easy to maintain, helping startups and enterprises build upon a robust foundation for their own use cases.

    [!NOTE] WebRobot is focused on creating innovative data extraction and AI solutions. Contact us at ceo@webrobot.eu if you’d like to collaborate or discuss your project.

Features

With the WebRobot Cloud Dashboard, you'll have access to:

    🏎️ Next.js - Fast by default, optimized for performance and scalability.
    💅 Bootstrap CSS - A popular CSS framework for building responsive and consistent user interfaces.
    ✨ ESlint and Prettier - Ensuring clean, consistent, and error-free code.
    🚀 GitHub Actions - Pre-configured actions for smooth CI/CD workflows.
    💯 Perfect Lighthouse score - Optimized for performance, accessibility, and SEO.
    Bundle analyzer plugin - Keep track of your bundle sizes to maintain efficiency.
    Jest and React Testing Library - For robust unit and integration tests.
    Playwright - Automate end-to-end testing for confidence in your deployments.
    Storybook - Develop and test UI components in isolation.
    Conventional commits git hook - Keep your commit history clean and organized.
    OpenTelemetry - Monitoring for insight into the performance and health of your application.
    Absolute imports - Simplified imports to keep your code clean.
    Kubernetes compatibility - Designed to integrate seamlessly into Kubernetes environments.
    Radix UI - Headless UI components for flexible customization.
    Renovate BOT - Automatically keep dependencies up-to-date.

Table of Contents

    WebRobot Cloud Dashboard
        Features
        Getting Started
        Deployment
        Scripts Overview
        Testing
        Styling and Design System
        State Management
        Contribution
        Support
        License
        Contributors

🎯 Getting Started

To get started with this dashboard, follow these steps:

    Fork & clone the repository:

bash

git clone https://github.com/webrobot-labs/clouddashboard.git

    Install the dependencies:

bash

yarn install --frozen-lockfile

    Run the development server:

bash

yarn dev

    Open http://localhost:3000 to see the application in action.

    To enforce conventional commits, install the following git hook:

sh

brew install pre-commit
pre-commit install -t commit-msg

🚀 Deployment

You can easily deploy the WebRobot Cloud Dashboard to Vercel or any platform that supports Next.js apps. To deploy to Vercel, click the button below:

Vercel
📃 Scripts Overview

The following scripts are available in the package.json:

    dev: Starts the development server
    build: Builds the application for production
    start: Starts the production server
    lint: Lints the code using ESLint
    lint:fix: Automatically fixes linting errors
    test: Runs unit and integration tests
    storybook: Starts Storybook for component development
    build-storybook: Builds Storybook for production
    format: Formats the code using Prettier

🧪 Testing

This dashboard includes robust testing setups to ensure reliability.

    Unit and integration tests: Run Jest tests using yarn test
    End-to-end tests: Use Playwright for full end-to-end testing with yarn e2e:headless or yarn e2e:ui

🎨 Styling and Design System

The WebRobot Cloud Dashboard uses Bootstrap CSS for responsive design, making it easy to build consistent, mobile-friendly interfaces. You can customize styles using Bootstrap's built-in utility classes or create your own custom components.
💾 State Management

For state management, this dashboard is flexible. You can choose a library like:

    Zustand
    Recoil
    Jotai

These libraries help in managing local or global state efficiently within your React components.
🤝 Contribution

We welcome contributions! Follow these steps:

    Fork the repository.
    Create a new branch with a descriptive name.
    Make your changes and ensure they pass linting and tests.
    Push your changes and create a pull request.


This project is licensed under the MIT License. For more information, see the LICENSE file.
Contributors
<!-- Add contributors list here -->
roger.giuffre@gmail.com