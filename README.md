# Apaleo App - Task

# Project Overview

This Angular-based enterprise application follows a clean, scalable architecture with advanced features like Nx monorepo management, custom reusable components, and NgRx for state management. The app supports modular development using Domain-Driven Design (DDD), ensuring maintainability and separation of concerns.

### Deployment

The app is hosted on GitHub Pages and can be accessed via the following URL:

[https://smstudio2008.github.io/apaleo-test/](https://smstudio2008.github.io/apaleo-test/)


## Key Features

- **Modular Architecture**: Each domain (e.g., user management) is encapsulated in a feature module.
- **Nx Monorepo**: Structured management of code, optimizing for scalability and testability.
- **Custom Components**: Reusable UI components like `apaleo-ui-pagination`, `apaleo-ui-dropdown`, and `apaleo-ui-input`.
- **NgRx State Management**: Handles actions, effects, and state transitions predictably across the application.
- **Storybook Integration**: Interactive component development and testing environment. Storybook is used for visualizing components in isolation, speeding up UI/UX testing and ensuring consistency.

## Architecture Overview

### Core
The core module houses shared services, such as:
- **UserService**: Responsible for API requests.
- Global utilities shared across modules.

### Features
Domain-specific functionality is encapsulated in feature modules (e.g., User Management).

### Components
Reusable components are stored in the `apaleo-ui` library, including:
- **PaginationComponent**: For paginated lists.
- **DropdownComponent**: For data filtering and sorting.
- **InputComponent**: For user input and search functionality.

### State Management
State is handled using NgRx:
- **Actions and Reducers**: Ensure predictable state transitions.
- **Effects**: Handle side effects like API calls through `UsersEffects`.

### Testing
Unit tests are written with Jest, and components are visually tested using **Storybook**.

## Storybook Integration
**Storybook** allows you to:
- Isolate and test UI components interactively.
- Document your components for ease of use across teams.
To run Storybook:
```bash
npm run storybook
```

## Folder Structure

- `apps/`: Main application.
- `libs/apaleo-ui/`: Reusable UI components.
- `libs/state/`: NgRx-based state management.
Here’s an updated README section with a checklist for the **Tech Stack**:

---

## Tech Stack

- **Angular**: Frontend framework.
- **Nx**: Monorepo setup.
- **RxJS**: Reactive programming for managing asynchronous data and state.
- **UI Library**: Custom design system for reusable components.
- **TypeScript**: Strongly-typed language for scalable development.
- **DDD (Domain-Driven Design)**: For separating business logic into domain-specific modules.

---

## Checklist

- [x] Angular integrated for the frontend.
- [x] Nx used for managing monorepo.
- [x] RxJS for state and async operations.
- [x] Custom UI library implemented.
- [x] Application written in TypeScript.
- [x] Domain-Driven Design principles applied for modularity.

## Setup

1. Clone the repository.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the application:
    ```bash
    npm start
    ```
4. Run Storybook:
    ```bash
    npm run storybook
    ```

## Tools and Technologies

- **Angular+**
- **Nx Monorepo**
- **NgRx (Store, Effects)**
- **Storybook for UI Testing**
- **Jest for Unit Testing**
- **TypeScript**

Here’s the updated README with the mention of global UI design tokens for future implementation:

---

## Tech Stack

- **Angular**: Frontend framework.
- **Nx**: Monorepo setup.
- **RxJS**: Reactive programming for managing asynchronous data and state.
- **UI Library**: Custom design system for reusable components.
- **TypeScript**: Strongly-typed language for scalable development.
- **DDD (Domain-Driven Design)**: For separating business logic into domain-specific modules.

---

## Checklist

- [x] Angular integrated for the frontend.
- [x] Nx used for managing monorepo.
- [x] RxJS for state and async operations.
- [x] Custom UI library implemented.
- [x] Application written in TypeScript.
- [x] Domain-Driven Design principles applied for modularity.

---

## Next Implementation

- **Global UI Design Tokens**: The next phase involves introducing design tokens to ensure consistency in design elements such as colors, typography, and spacing across the entire UI. This will allow for theme customization and maintainability.

## Future Enhancements
- **Advanced Storybook Use**: Leverage Storybook for testing complex states and edge cases in components.
- **Architectural Validations**: Continue enhancing architecture boundaries with Nx and ESLint rules.
