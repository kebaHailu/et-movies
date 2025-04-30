# ET movies

## Overview

This project is a web application built with modern frontend technologies using React. It features responsive design with custom Tailwind CSS configurations to ensure optimal display across various device sizes use Different API endpoints with responsible design.

## Features

- Responsive design with custom breakpoints
- Modern UI components
- Cross-browser compatibility

## Technology Stack

- Frontend Framework: [React]
- CSS Framework: Tailwind CSS
- Build Tool: Vite

## Setup and Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository

   ```bash
   git clone https://github.com/kebaHailu/et-movies.git
   cd et-movies
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Configuration

The project uses a custom Tailwind CSS configuration with a specialized breakpoint:

- `other_screen`: Applies styles between 340px and 1200px viewport widths

This breakpoint can be used in your HTML/JSX as follows:
html
`<div class="other_screen:bg-blue-500">Content</div>`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

```bash
   npm run build
   # or
   yarn build
```

project-root/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── hooks/
│ ├── assets/
│ ├── App.jsx
│ └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
