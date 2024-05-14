## Challenge outline: Github Repositories listing page

Design an Angular 14+ single-page application (SPA) that takes a GitHub username as input and displays the public Github repositories belonging to the user

## Installation

1. Fork this repository to your github account.
2. Clone the forked repository and proceed with steps mentioned below.

### Install requirements
* Install angular cli [Ref](https://angular.io/cli)
* `npm install` in this repository 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

# Folder Structure
1.Consist of 5 components where Github-app is the main component
![Screenshot 2024-05-14 164510](https://github.com/0sarvesh/fyle-internship/assets/119318104/f21a0bfd-e06b-4932-93e5-d003969b533f)

#Unit test 

![Screenshot 2024-05-14 154759](https://github.com/0sarvesh/fyle-internship/assets/119318104/e8a9![FyleFrontendChallenge3]
![Screenshot 2024-05-14 154610](https://github.com/0sarvesh/fyle-internship/assets/119318104/1867155f-a3ee-4449-8cef-394847d4bd00)

#FYLE Internship Challenge 2024 Output

![FyleFrontendChallenge](https://github.com/0sarvesh/fyle-internship/assets/119318104/e3ddd97a-f553-4510-a0c5-9bba5721ca99)
User needs to search for the github username

![FyleFrontendChallenge3](https://github.com/0sarvesh/fyle-internship/assets/119318104/39be1257-28ae-4540-87fd-ca4539195810)

Features
User Search Bar:

A search bar for entering a GitHub username.
A search button to fetch repositories for the entered username.
Validation to ensure the input is not empty.
API Integration:

Fetch public repositories of a user using the GitHub API.
Handle cases where the user is not found (display a zero state).
Repository Listing:

Display a list of repositories with details such as the repository name, description, and topics.
Each repository should display multiple topics if available.
Pagination:

Implement server-side pagination to fetch repositories in pages.
Include a dropdown to select the number of repositories per page (10, 20, 50, 100).
Default to 10 repositories per page.
Loading Indicators:

Show a skeleton loader or spinner while API calls are in progress.
Error Handling:

Display appropriate messages for different error scenarios (e.g., user not found, network errors).
Caching:

Cache GET API calls to avoid duplicate requests when switching between pages or reloading.
Responsive Design:

Ensure the application is responsive and works well on various screen sizes.
Unit Testing:

Implement unit tests for at least one component and one service.
Ensure 100% code coverage for the tested component and service.
Documentation:

Provide clear documentation in the README on how to run the application and the tests.
Deployment:

Deploy the SPA on a cloud service (e.g., Netlify, GitHub Pages).
Provide a link to the hosted application.
Code Quality:

Follow best practices for clean, maintainable, and readable code.
Use Angular CLI for project setup and configuration.
Additional Points
Project Structure:

Organize the project with a clear folder structure (e.g., components, services, models, etc.).
Styling:

Apply consistent and modern styling using CSS/SCSS.
Use Angular Material or another UI library for improved UI/UX.
Accessibility:

Ensure the application is accessible with proper ARIA labels and keyboard navigation support.
Performance Optimization:

Optimize performance by lazy loading modules and components where applicable.
Version Control:

Use Git for version control.
Commit changes with clear and descriptive messages.


![outupt1](https://github.com/0sarvesh/fyle-internship/assets/119318104/099db9b1-3c53-4a79-b5ec-478697295a86)
#If the user clicks on any repo it will be redirected to it



