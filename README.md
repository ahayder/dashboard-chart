# Dynamic Dashboard with Highcharts and React-Grid-Layout

This Next.js project showcases a dynamic dashboard where users can interact with various charts and customize their layout.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-directory>
yarn install
```

## Running the Application

To start the development server:

```bash
yarn dev
```

Visit `http://localhost:3000` in your browser to view the application.

## Features

- **Charts**: Functional components for Bar, Box Whisker, Scatter, and Area Range charts using Highcharts.
- **Grid Layout**: Interactive grid with draggable and resizable charts powered by React-Grid-Layout.
- **Settings Menu**: A menu for each chart to change type and title.

## Component Structure

- `components/Charts`: Includes all chart components.
- `components/Dashboard.js`: The main grid layout component.
- `components/GraphContainer.js`: Container for each chart component.
- `components/SettingsMenu.js`: Overlay for chart settings.

## State Management

State is managed within `Dashboard.js` using React hooks to dynamically render charts and their configurations.
