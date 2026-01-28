<div align="center" id="top">
  <h1>Albert Einstein</h1>
  <p>
    "
    "Life is like riding a bicycle. To keep your balance you must keep moving."

  </p>
  <img src="./images/Einstein.png" width="350" height="160" alt="einstein-image">
</div>

## Table of Contents

- [:bulb: About](#bulb-about)
- [:sparkles: UI Preview](#sparkles-ui-preview)
- [:computer: Tech Stack](#computer-tech-stack)
- [:rocket: Getting Started](#rocket-getting-started)

 <br>

## :bulb: About

A modern tribute `landing page` for `Albert Einstein`, built with **React**, **TypeScript**, and **Tailwind CSS**. Showcases responsive design and a clean UI, while highlighting Einstein’s life and achievements.

 <br>
 
## :sparkles: UI Preview

Comming Soon...

(Will be updated with images of mockups and video demo)

 <br>

## :computer: Tech Stack

- [React](https://reactjs.org/) (**Frontend Framework**)
- [TypeScript](https://www.typescriptlang.org/) (**Programming Language**)
- [Vite](https://vitejs.dev/) (**Build Tool**)
- [Tailwind CSS](https://tailwindcss.com/) (**CSS Framework**)
- [ESLint](https://eslint.org/) (**Linting Tool**)
- [Prettier](https://prettier.io/) (**Code Formatter**)

 <br>

## :rocket: Getting Started

This project is a **UI-only** Landing Page built with **modern front-end** tooling.
No **backend** services or external **APIs** are required.

Follow these **steps** to set up and `run` the project locally.

### :clipboard: Prerequisites

Make sure you have the following installed on your machine before proceeding:

#### Option 1: Using nvm (Node Version Manager) - Recommended

- **nvm**\*
  - Used to install and manage the Node.js version required by this project.
  - Allows easy switching between Node.js versions.
  - Downloads and installs Node.js automatically based on the version defined in the `.nvmrc` file.
  - **Download:**
    - [Windows](https://www.nvmnode.com/guide/installation.html)
    - [macOS/Linux](https://www.nvmnode.com/guide/installation-sh.html)

> \* When using **nvm**, you do **not** need to install Node.js manually. Check the [documentation](https://www.nvmnode.com/guide/) for more details.

#### Option 2: Manual Installation

- **Node.js**\*
  - Required version: `24.13.0` (as defined in the `.nvmrc` file)
  - Used for dependency management and running the development server.
  - **Download** from the [official Node.js website](https://nodejs.org/).

> \* If not using nvm, ensure the installed Node.js version matches the one specified in `.nvmrc`.

#### Additional Tools

- **npm**
  - Comes bundled with Node.js.
  - Used to install project dependencies.
- **Git**
  - Used for version control and cloning the repository.
  - **Download** from the [official Git website](https://git-scm.com/).

---

### :mag: Verification

**Open** the terminal (**CMD**) and **run** the following commands to confirm the required tools are installed on your machine:

```bash
node -v
npm -v
git --version
```

---

### :inbox_tray: Installation Steps

1. **Clone the Repository**

   **Open** your **terminal** and run the following command to `clone` the repository:

   ```bash
   git clone https://github.com/pedromst2000/Einstein-Tribute-Page.git
   ```

2. **Navigate to the Project Directory**

After cloning the repository, navigate to the project directory using one of the following methods:

- **Method 1: Using the Address Bar**

  <img src="./images/support-doc/adress-bar-cmd.png" width="300" height="250" alt="adress-bar-cmd">

  **Open** the repository folder and **write** `cmd` in the address bar to open the terminal directly in that folder.

- **Method 2: Using Right-Click Menu**

  <img src="./images/support-doc/open-terminal.png" width="250" height="250" alt="open-terminal">

  **Open** the repository folder and **right-click** inside the folder, then select **"Open in Terminal"** or **"Open in PowerShell"** (depending on your system).

- **Method 3: Using Your IDE**

  **Open** your project folder using your preferred **IDE** (e.g., [Visual Studio Code](https://code.visualstudio.com/)) and open the integrated **terminal**.

3. **Using Node.js project version with .nvmrc file**

   If you are using **nvm**, run the following command in the terminal to set the Node.js version as specified in the `.nvmrc` file:
   - For Windows:

    <br>

   ```bash
   nvm use $(type .nvmrc)
   ```

   - For macOS/Linux:

   <br>

   ```bash
    nvm use
   ```

   This command will switch to the correct Node.js version for the project.

4. **Install Dependencies**

   In the **terminal**, run the following command to **`install`** the project dependencies:

   ```bash
   npm install
   ```

   This command reads the `package.json` file and installs all the required packages listed under `dependencies` and `devDependencies`.

 <br>

### :arrow_forward: **Start the Development Server**

After the dependencies are installed, start the development server by running the following command in the terminal:

```bash
npm run dev
```

This command will start the **Vite** development server and provide you with a local URL (usually `http://localhost:5173`) where you can view the project in your web browser.

 <br>

<p align="center">
 <a href="#top">Back to top</a>
</p>
