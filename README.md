# Business Public Page Repository

Welcome to the **Business Public Page** repository! This project contains the codebase for creating a public-facing web page where clients can allow their customers to:

- Make appointments.
- Purchase products and services.

This repository is maintained by the development team, with contributions from various stakeholders. The goal is to provide an easily customizable and scalable solution for businesses looking to offer their services online.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [How to Contribute](#how-to-contribute)
- [Code Review](#code-review)

---

## Overview

This repository contains the source code and configuration files necessary to build and deploy a public-facing business webpage. The page allows customers to interact with business services, make appointments, and purchase products directly from the website. The backend API is powered by [Swagger](https://swagger.io/), allowing for a smooth integration with business services.

## Tech Stack

- **Frontend**: [Angular](https://angular.io/) (latest version), [TailwindCSS](https://tailwindcss.com/) (or your CSS framework of choice)
- **Backend API**: Swagger-powered API - [API Documentation](https://api.dev.beeoclock.com/client/documentation/swagger/v1)

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v20 or later)
- [Angular CLI](https://angular.io/guide/setup-local) (v18 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/business-public-page.git
   cd business-public-page
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Angular development server:

   ```bash
   ng serve
   ```

   The app should now be running at [http://localhost:4200](http://localhost:4200).

### Backend API Setup

The application interacts with the backend API, which is documented using Swagger. You can explore and interact with the API documentation here:

[API Documentation - Swagger](https://api.dev.beeoclock.com/client/documentation/swagger/v1)

Make sure you configure the API base URL and any necessary tokens in your Angular environment files (`src/environments`).


## How to Contribute

We welcome contributions from all team members! To ensure smooth collaboration, please follow the guidelines below:

1. **Fork the repository** and create your feature branch:
   
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Commit your changes** with descriptive commit messages:
   
   ```bash
   git commit -m "Add feature to allow customers to book appointments"
   ```

3. **Push to the branch**:

   ```bash
   git push origin feature/my-feature
   ```

4. Open a **Pull Request** and describe the changes in detail.

### Code Review

All code contributions will be reviewed by another developer on the team before merging to ensure quality, security, and maintainability.


---

Happy Coding!