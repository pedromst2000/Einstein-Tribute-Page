<!-- [] - Add Deployment Instructions
    [] - Add Testing Instructions
    [] - Improve PR submission notes
    [] - Add live demo link
    [] - Add CI/CD pipelines for linting and prettier checks before mergin PR
-->
<div align="center" id="top">
    <img src="./images/Einstein.png" width="350" height="160" alt="einstein-image">

  <h1>Albert Einstein</h1>
  <p>
    "
    "Life is like riding a bicycle. To keep your balance you must keep moving."

  </p>
  
  <p>
    <a href="https://github.com/pedromst2000/Einstein-Tribute-Page/issues/new?labels=bug&template=bug_report.md">Report Bug</a>
    ·
    <a href="https://github.com/pedromst2000/Einstein-Tribute-Page/issues/new?labels=enhancement&template=feature_request.md">Request Feature</a>
  </p>
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
- [:handshake: Contributing](#handshake-contributing)
- [:page_facing_up: License](#page_facing_up-license)

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

> To make changes or contribute, consider forking the repository first and then cloning your fork. Check the [Contributing section](#handshake-contributing) for detailed instructions.

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

| Type                   | Command                  | Purpose                 | Details                                             |
| ---------------------- | ------------------------ | ----------------------- | --------------------------------------------------- |
| **Development Server** | `npm run dev`            | Start local development | Vite dev server with HMR at `http://localhost:5173` |
| **Production Build**   | `npm run build`          | Build for production    | TypeScript check + optimized build in `dist/`       |
| **Code Quality**       | `npm run lint`           | Check code quality      | ESLint validation for bugs and style issues         |
| **Code Quality**       | `npm run prettier`       | Format all files        | Auto-fix formatting (indentation, line endings)     |
| **Code Quality**       | `npm run prettier-check` | Verify formatting       | Check formatting without modifying files            |

 <br>

## :handshake: Contributing

Contributions are welcome! Follow this workflow to submit changes.

### Fork vs Clone - Which One?

Choose the right approach based on your goal:

| Goal                               | Action                           | Instructions                                   |
| ---------------------------------- | -------------------------------- | ---------------------------------------------- |
| **Just exploring/testing locally** | Clone directly                   | See [Getting Started](#rocket-getting-started) |
| **Contributing changes**           | Fork first, then clone your fork | Follow steps below ⬇️                          |

### Naming Conventions

Follow these **conventions** for branches and commit messages to keep the project organized:

| Type       | Use Case         | Branch Example          | Commit Example                      |
| ---------- | ---------------- | ----------------------- | ----------------------------------- |
| `feat`     | New feature      | `feat/timeline-nav`     | `feat: add timeline navigation`     |
| `fix`      | Bug fix          | `fix/mobile-overflow`   | `fix: resolve mobile menu overflow` |
| `docs`     | Documentation    | `docs/update-readme`    | `docs: update installation steps`   |
| `refactor` | Code restructure | `refactor/hero-section` | `refactor: simplify hero logic`     |
| `style`    | Formatting       | `style/format-imports`  | `style: organize imports`           |
| `test`     | Tests            | `test/timeline-tests`   | `test: add timeline tests`          |
| `chore`    | Maintenance      | `chore/update-deps`     | `chore: update dependencies`        |

### Quick Contribution Guide

**Standard workflow:**

```bash
# 1. Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/Einstein-Tribute-Page.git
cd Einstein-Tribute-Page

# 2. Create a branch (follow naming convention above)
git checkout -b <type>/<description>

# 3. Commit and push
git add .
git commit -m "<type>: <description>"
git push origin <branch-name>
```

> Publish your branch to your fork on GitHub, then proceed to the next step.

**Then open a Pull Request on GitHub** with:

- Title matching your commit type (e.g., `feat: add dark mode`)
- Description of what changed and why
- Screenshots for UI changes

**Before submitting:**

- ✅ `npm run lint` and `npm run build` pass
- ✅ Code formatted with `npm run prettier`
- ✅ Tested on different screen sizes

**Questions?** Open an issue for guidance. Thanks for contributing! 🎉

 <br>

## :page_facing_up: License

This project is licensed under the **MIT License**.

You are free to:

- ✅ Use this project for personal or commercial purposes
- ✅ Modify and distribute the code
- ✅ Use it as a learning resource

**Requirements:**

- Include the original license and copyright notice in any copy or substantial portion of the software

For full license details, see the [LICENSE](LICENSE) file.

 <br>

---

<div align="center">

## 🌟 Final Thoughts

This project is a tribute to **Albert Einstein** - a celebration of curiosity, innovation, and the pursuit of knowledge. Built with modern web technologies, it aims to inspire developers and visitors alike to appreciate both **scientific excellence** and **clean code craftsmanship**.

Whether you're here to **learn**, **contribute**, or simply **explore** - your presence makes this project better.

**Keep moving forward.** 🚀

---

Made with ❤️ and curiosity

[⬆ Back to top](#top)

</div>
