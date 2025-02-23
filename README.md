# Lab-U Landing Page with IBM Watson Assistant Chatbot

This repository hosts the landing page for Lab-U, a private clinic, designed to improve user experience through the integration of an IBM Watson Assistant chatbot. The chatbot provides instant answers to frequently asked questions (e.g., contact details, operating hours, locations, services, payment methods, and insurance information), reducing the workload on support staff while offering 24/7 omnichannel assistance.

## Project Objectives

- **Automated Customer Support:** Deliver immediate responses to common queries.
- **Enhanced User Experience:** Provide easy access to critical information without human intervention.
- **Operational Efficiency:** Lower the administrative load by handling repetitive inquiries automatically.
- **Scalability and Availability:** Utilize AWS S3 for static hosting, ensuring global accessibility and high performance.

## Key Features

- **Responsive Landing Page:** A modern, user-friendly interface optimized for mobile and desktop.
- **IBM Watson Assistant Chatbot:**
  - **Customizable Interactions:** Configure FAQs and tailored responses that meet Lab-U's needs.
  - **Reusable Component:** The chatbot integration is encapsulated in a dedicated `WatsonChat.js` file, making it easy to maintain and reuse.
- **AWS S3 Deployment:** Host the application as a static website on AWS S3 for reliable, scalable, and fast access.

## Chatbot Integration with IBM Watson Assistant

### 1. IBM Cloud Setup
- **Account Creation & Login:** Sign up or log in at [IBM Cloud](https://cloud.ibm.com/login).
- **Service Setup:** In the IBM Cloud catalog, locate and create a Watson Assistant service.
- **Service Activation:** Activate the chatbot service and configure its basic settings (e.g., name, description).

### 2. Configuring Chatbot Interactions
- **Defining Interactions:** Within Watson Assistant, navigate to the “Actions” section to add frequently asked questions and their corresponding answers.
- **Personalization:** Customize the responses to directly address the typical inquiries from Lab-U clients.

### 3. Chatbot Deployment
- **Publishing the Service:** After configuring the chatbot, publish it to make it live and accessible for users.

### 4. Integrating the Chatbot into the Landing Page
- **Reusable Component (`WatsonChat.js`):**
  - Create a JavaScript file (`WatsonChat.js`) that contains the integration logic for the Watson Assistant.
  - This module encapsulates the necessary script and configuration to embed the chatbot seamlessly across the website.
- **Script Integration:** Import the Watson Assistant script in the `<body>` of your HTML document to ensure the chatbot loads and operates correctly.

### 5. Deployment on AWS S3
- **Build Generation:** Create a production build of your application (for example, using React).
- **Bucket Setup:** Set up an AWS S3 bucket with static website hosting enabled.
- **File Upload:** Upload the build folder’s contents to the S3 bucket.
- **Public Access Configuration:** Adjust the bucket’s permissions to allow public read access.
- **Testing:** Verify that the landing page and chatbot are fully operational by accessing the S3 URL.

## Installation and Deployment Instructions

### Prerequisites
- An IBM Cloud account for Watson Assistant.
- An AWS account for S3 deployment.
- Basic knowledge of HTML, JavaScript, and optionally React.

### Steps to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/JhosueLeo/Lab-U.git
   cd Lab-U
   ```
2. **Install Dependencies (if applicable):**
   ```bash
   npm install
   ```
3. **Configure the Chatbot:**
   - Edit the `WatsonChat.js` file to add your IBM Watson Assistant credentials and settings.
   - Customize the FAQ and responses to meet Lab-U’s requirements.
4. **Build the Application:**
   ```bash
   npm run build
   ```
5. **Deploy to AWS S3:**
   - Create an S3 bucket and enable static website hosting.
   - Upload the contents of the build folder to your S3 bucket.
   - Configure the bucket policy to allow public read access.
6. **Test the Deployment:**
   - Open the provided S3 URL in a browser to ensure that both the landing page and the chatbot function as expected.

## Contributors

- Zavala Gomes  
- Jhosue Carrillo  
- Juda Cacherres  
- Jose Huamán  
- Fabio Macedo

## Acknowledgments

- **IBM Watson Assistant:** For providing the technology to automate customer support.
- **AWS S3:** For offering reliable and scalable static hosting.
- **Project Team:** For their collaborative efforts in bringing this project to life.
