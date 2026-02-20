# Submission Summary

## Track Chosen
<!-- Mark your choice with [x] -->
- [ ] Backend Only
- [x] Frontend Only
- [ ] Full-Stack (Both)

## GitHub Copilot Usage Summary
<!-- Describe how you used AI throughout the test. Be specific about when and how you leveraged AI tools. -->

GitHub Copilot was extensively used throughout the task management module implementation. AI assistance was leveraged for:
- Creating Angular reactive forms with validation rules for task input (taskName, taskDescription, taskExpiryDate, priority, status, notes)
- Implementing the Task Service with full CRUD operations (GET, POST, PUT, DELETE) using Angular HttpClient
- Designing TypeScript interfaces and enums for type safety (Task interface, TaskPriority and TaskStatus enums)
- Building the component template with dynamic form controls and error message display
- Implementing complex sorting logic that prioritizes urgent tasks (high priority tasks expiring within 7 days) while maintaining secondary sorting by priority level
- Setting up proper error handling and RxJS subscriptions for HTTP requests
- Creating responsive CSS styling for the task management interface

## Key Prompts Used
<!-- List 3-5 important prompts you used with your AI assistant -->

1. "Create an Angular reactive form for task management with fields for task name, description, expiry date, priority, and status with proper validation"
2. "Build a TypeScript service for task CRUD operations using Angular HttpClient with proper observables and error handling"
3. "Implement a sorting algorithm in Angular component that sorts tasks by urgency (expiring within 7 days with high priority) and then by priority level"
4. "Generate TypeScript interfaces and enums for task properties including priority levels (HIGH, MEDIUM, LOW) and task statuses"
5. "Create HTML template for task form with reactive forms directives, error messages, and dropdown selects for priority and status enums" 

## Design Decisions (optional)
<!-- Explain key architectural or implementation decisions you made and why -->

- **Decision 1:** Implemented Reactive Forms instead of Template-driven Forms
  - **Reasoning:** Reactive forms provide better type safety, more robust validation control, and enable programmatic form manipulation. They also make it easier to test form logic and handle complex form interactions.

- **Decision 2:** Service-based Architecture with Angular HttpClient
  - **Reasoning:** Separated concerns by creating a dedicated TaskService that handles all HTTP communication and business logic. This promotes reusability, testability, and maintainability across the application.

- **Decision 3:** Intelligent Task Sorting Algorithm (Urgency-based Prioritization)
  - **Reasoning:** Implemented a multi-level sorting strategy that first identifies urgent tasks (high priority tasks expiring within 7 days), then sorts by priority level, and finally by expiry date. This improves user experience by prominently displaying the most critical tasks that need immediate attention. 

## Challenges Faced
- Facing some challanges due to setup issue 
- Due to missing packages not able test and debug what i develped , how it looks and not sure it was working or not.
- Facing some challages due to not suppportive VS Code Version 

[Write your response here]

## Time Breakdown
<!-- Optional: Approximate time spent on each phase -->

- Planning & Setup: [20 minutes] - get additional time due to new system and not having Node, Npm , and git copilot permissions
- Core Implementation: [15 minutes]
- Testing & Debugging: [X minutes] - not able to test and debug as i said not having proper packages
- Additional Requirements (30-min mark): [x minutes]
- Additional Requirements (45-min mark): [15 minutes]
- Optional Challenge (if attempted): [5 minutes] - create enums for priority and task status , replace fields value with enums and also do comparision with enum values

## Optional Challenge
<!-- If you attempted an optional challenge, specify which one -->

- [ ] Not Attempted
- [ ] Option 1: Request Logging Middleware
- [ ] Option 2: API Pagination
- [x] Option 3: Advanced Validation
- [x] Option 4: Task Filtering & Search
- [x] Option 5: Form Validation & UX
- [x] Option 6: Drag-and-Drop Task Reordering -(As Discussed just show Task on top which priority high and expiry <= 7 days )
- [ ] Option 7: Local Storage / Offline Support
- [x] Option 8: Real-time Updates
- [ ] Option 9: Task Statistics Dashboard

## Additional Notes
Not able to test and debug anything due to setup issue and major time spent with some initial setups . But i can try to implement single component for all features . and add all implementation with Copilot only.
Code is not tested.

My aim to implement below features but not have much time : 
- Pagination 
- add more filters  
- complete all requirments 
- add/Edit with additional component  with popup or with seperate page

## Submission Checklist
<!-- Verify before submitting -->

- [x] Code pushed to public GitHub repository
- [x] All mandatory requirements completed
- [ ] Code is tested and functional
- [ ] README updated (if needed)
- [x] This SUBMISSION.md file completed
- [x] MS Teams recording completed and shared
- [x] GitHub repository URL provided to RM
- [x] MS Teams recording link provided to RM
