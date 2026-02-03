<!-- [] - Add Deployment Instructions
    [] - Add Testing Instructions
    [] - Add Contribution Guidelines
    [] - Add live demo link
    [] - Add concluding remarks for the end of the README
-->
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
  - [:clipboard: Prerequisites](#clipboard-prerequisites)
  - [:mag: Verification](#mag-verification)
  - [:inbox_tray: Installation Steps](#inbox_tray-installation-steps)
  - [:arrow_forward: Available Commands](#arrow_forward-available-commands)
  - [:books: Quick Reference](#books-quick-reference)

 <br>

## :bulb: About

A modern, responsive **tribute landing page** dedicated to **Albert Einstein**, one of the greatest minds in human history. This project showcases his life story, achievements, and legacy through an elegant and interactive user interface.

**Built with modern technologies:**

- ⚛️ **React 19** - Latest React features for optimal performance
- 📘 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS v4** - Modern utility-first styling with custom theming
- 🧭 **React Router v7** - Client-side routing for seamless navigation

**Features:**

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Three main sections: Hero, Biography, and Timeline
- ⚡ Fast performance with Vite build tool
- ♿ Accessibility-focused UI components
- 🎨 Custom typography with Piazzolla and Smooch Sans fonts

 <br>
 
## :sparkles: UI Preview

Comming Soon...

(Will be updated with images of mockups and video demo)

 <br>

## :computer: Tech Stack

### Core Technologies

- [React 19](https://reactjs.org/) - Frontend UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite 7](https://vitejs.dev/) - Next-generation build tool

### Styling & UI

- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- Custom fonts: Piazzolla & Smooch Sans

### Routing

- [React Router v7](https://reactrouter.com/) - Client-side routing

### Code Quality

- [ESLint 9](https://eslint.org/) - JavaScript/TypeScript linter
- [Prettier](https://prettier.io/) - Code formatter
- TypeScript strict mode - Type checking

### Development Tools

- [Node.js 24.13.0](https://nodejs.org/) - JavaScript runtime
- npm - Package manager

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

Follow these steps to get the project running on your local machine.

---

#### **Step 1: Clone the Repository**

Open your terminal and run:

```bash
git clone https://github.com/pedromst2000/Einstein-Tribute-Page.git
cd Einstein-Tribute-Page
```

> 💡 **Tip:** You can also navigate to the folder using [these alternative methods](#terminal-navigation).

---

#### **Step 2: Set Node.js Version**

**If using nvm (recommended):**

- **Windows:**

  ```bash
  nvm use $(type .nvmrc)
  ```

- **macOS/Linux:**
  ```bash
  nvm use
  ```

**If using manual Node.js installation:**

Skip this step - just ensure you have Node.js `24.13.0` installed ([verify](#mag-verification))

---

#### **Step 3: Install Dependencies**

Run this command to install all required packages:

```bash
npm install
```

⏳ **Wait for the installation to complete** before running any other commands.

---

#### **Step 4: Start Development Server**

You're ready to start coding! Run:

```bash
npm run dev
```

🎉 Open `http://localhost:5173` in your browser to see the project.

---

<details id="terminal-navigation">
<summary><strong>📂 Alternative Ways to Open Terminal in Project Directory</strong></summary>

<br>

**Method 1: Address Bar (Windows)**

<img src="./images/support-doc/adress-bar-cmd.png" width="300" height="250" alt="adress-bar-cmd">

Type `cmd` in the folder's address bar

**Method 2: Right-Click Menu**

<img src="./images/support-doc/open-terminal.png" width="250" height="250" alt="open-terminal">

Right-click → **"Open in Terminal"** or **"Open in PowerShell"**

**Method 3: IDE Terminal**

Open the project in [Visual Studio Code](https://code.visualstudio.com/) and use the integrated terminal

</details>

 <br>

### :arrow_forward: **Available Commands**

After the dependencies are installed, you can use the following commands to **develop**, **build**, and **maintain** the project:

#### **Development Server**

Start the development server to work on the project locally:

```bash
npm run dev
```

- Starts the **Vite** development server
- Provides a local URL (usually `http://localhost:5173`)
- Enables **hot module replacement** (HMR) for instant updates
- Press `h + enter` in the terminal to show help options

#### **Production Build**

Build the project for production deployment:

```bash
npm run build
```

- Runs **TypeScript** type checking (`tsc -b`)
- Creates an optimized production build in the `dist/` folder
- Minifies and bundles all assets for deployment
- **Run this before deploying to production**

#### **Code Quality**

Maintain code quality with linting and formatting:

```bash
npm run lint
```

- Runs **ESLint** to check for code quality issues
- Identifies potential bugs and code style violations
- **Run before committing** to ensure code standards

```bash
npm run prettier
```

- Formats all source files using **Prettier**
- Automatically fixes formatting issues (indentation, line endings, etc.)
- Ensures consistent code style across the project

```bash
npm run prettier-check
```

- Checks if files are formatted correctly **without modifying** them
- Useful for **CI/CD pipelines** to verify formatting
- Returns error if any files need formatting

 <br>

### :books: **Quick Reference**

| Command                  | Purpose                  | When to Use                |
| ------------------------ | ------------------------ | -------------------------- |
| `npm run dev`            | Start development server | Daily development work     |
| `npm run build`          | Build for production     | Before deployment          |
| `npm run lint`           | Check code quality       | Before committing changes  |
| `npm run prettier`       | Format all files         | Fix formatting issues      |
| `npm run prettier-check` | Verify formatting        | CI/CD or pre-commit checks |

 <br>

<p align="center">
 <a href="#top">Back to top</a>
</p>
