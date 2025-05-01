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

## Project Sample
#### This is the homepage of the site
![Screenshot 2025-04-30 103418](https://github.com/user-attachments/assets/bd88080f-d6f6-4f79-92a4-01325870a257)
#### This is the Page detail in black
![Screenshot 2025-04-30 103433](https://github.com/user-attachments/assets/8859b218-f5b9-4b15-8c80-1fdcf0b71364)
#### This is the Search Feature 
![Screenshot 2025-04-30 110413](https://github.com/user-attachments/assets/8ebbf84c-7270-4acb-a801-3bf71304291c)
#### The page detail with White
![Screenshot 2025-04-30 103549](https://github.com/user-attachments/assets/8820cf75-b00c-4207-8004-a85d1fc5832c)




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

The project uses a custom Tailwind CSS configuration with a specialised breakpoint:

- `other_screen`: Applies styles between 340px and 1200px viewport widths

This breakpoint can be used in your HTML/JSX as follows:
html
`<div class="other_screen:bg-blue-500">Content</div>`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Project Structure
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
```
