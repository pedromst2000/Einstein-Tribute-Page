<!-- [] - Add Deployment Instructions (add to commands section)
    [] - Add Testing Instructions (add to commands section)
    [] - Add live demo link
    [] - Add CD pipeline
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

**What you'll discover:**

- 🎓 **Comprehensive Biography** - Explore Einstein's journey from his early years to becoming a revolutionary physicist
- 📅 **Interactive Timeline** - Navigate through key milestones, discoveries, and achievements in Einstein's life
- 💡 **Legacy & Impact** - Learn about his contributions to physics, philosophy, and humanity
- 🎨 **Elegant Design** - Experience a visually engaging tribute with modern aesthetics and smooth interactions

**Key Features:**

- 📱 Fully responsive design optimized for mobile, tablet, and desktop
- ⚡ Fast, performant single-page application with client-side routing
- ♿ Accessibility-focused UI for an inclusive user experience
- 🎯 Three distinct sections: Hero with iconic quote, detailed Biography, and chronological Timeline

<br>

## :sparkles: UI Preview

Coming Soon...

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
- [npm](https://www.npmjs.com/) - Package manager

 <br>

## :rocket: Getting Started

This project is a **UI-only** Landing Page built with **modern front-end** tooling.
No **backend** services or external **APIs** are required.

Follow these **steps** to set up and `run` the project locally.

### :clipboard: Prerequisites

**Choose one option for Node.js:**

- **Option A (Recommended): nvm** - Installs Node.js automatically via `.nvmrc`
  - **Download** for Windows: [nvm-windows](https://www.nvmnode.com/guide/installation.html)
  - **Download** for macOS/Linux: [nvm-sh](https://www.nvmnode.com/guide/installation-sh.html)
- **Option B: Node.js 24.13.0** - [Download](https://nodejs.org/) (manual install)

**Also required:**

- **npm** - Bundled with Node.js
- **Git** - [Download](https://git-scm.com/)

> 💡 **nvm** reads `.nvmrc` to install/switch Node.js versions.

---

### :mag: Verification

Open the terminal and run the following commands to verify the required tools are installed:

```bash
node -v
npm -v
git --version
```

---

### :inbox_tray: Installation Steps

Follow these steps to get the project running on your local machine.

Open your terminal and run the following commands:

#### **Step 1: Clone the Repository**

```bash
git clone https://github.com/pedromst2000/Einstein-Tribute-Page.git
```

#### **Step 2: Navigate to Project Directory**

```bash
cd Einstein-Tribute-Page
```

> 💡 **Tip:** Can't find the project directory in your terminal? Open the folder directly in your code editor (e.g., VS Code) and use the integrated terminal, or right-click the folder in your file explorer and

select **"Open in Terminal"** / **"Git Bash Here"**.

#### **Step 3: Set Node.js Version (if using nvm)**

Check the `.nvmrc` file for the required Node.js version, and then run the following commands to install and use that version:

```bash
nvm install v24.13.0
```

- Windows

```bash
nvm use $(type .nvmrc)
```

- macOS/Linux

```bash
nvm use
```

> 💡 **Tip:** If you don't have `nvm` installed, you can skip this step. Just ensure you have Node.js 24.13.0 installed globally ([verify](#mag-verification)).

#### **Step 4: Install Dependencies**

```bash
npm install
```

#### **Step 5: Start Development Server**

```bash
npm run dev
```

🎉 Open `http://localhost:5173` in your browser.

> 💡 **Contributing?** Fork the repository first. See [Contributing](#handshake-contributing).

---

### :arrow_forward: Available Commands

| Command                  | Purpose                    | Details                                                  |
| ------------------------ | -------------------------- | -------------------------------------------------------- |
| `npm run dev`            | Start local development    | Vite dev server with HMR at `http://localhost:5173`      |
| `npm run build`          | Build for production       | TypeScript check + optimized build in `dist/`            |
| `npm run lint`           | Lint JavaScript/TypeScript | ESLint validation for TS/JS files                        |
| `npm run lint:html`      | Validate HTML              | Check HTML structure and syntax                          |
| `npm run lint:md`        | Validate Markdown          | Check Markdown formatting and links                      |
| `npm run lint:css`       | Validate CSS               | Check CSS syntax and best practices                      |
| `npm run lint:yaml`      | Validate YAML              | Check YAML syntax for GitHub Actions workflows           |
| `npm run lint:all`       | Run all linters            | ESLint + HTML + Markdown + CSS + YAML validation         |
| `npm run prettier`       | Format all files           | Auto-fix formatting (indentation, line endings)          |
| `npm run prettier-check` | Verify formatting          | Check formatting without modifying files (used in CI/CD) |

 <br>

## :handshake: Contributing

Your contributions help keep this tribute to Einstein alive and evolving! Whether you're fixing a typo, improving accessibility, adding historical content, or enhancing the user experience, every contribution matters.

**How to contribute:**

- Found a bug? [Report it](https://github.com/pedromst2000/Einstein-Tribute-Page/issues/new?labels=bug&template=bug_report.md)
- Have an enhancement idea? [Suggest it](https://github.com/pedromst2000/Einstein-Tribute-Page/issues/new?labels=enhancement&template=feature_request.md)
- Ready to code? Follow the workflow below to submit your changes

### Naming Conventions

Follow these **conventions** for branches and commit messages to keep the project organized:

| Type       | Use Case               | Branch Example          | Commit Example                      |
| ---------- | ---------------------- | ----------------------- | ----------------------------------- |
| `feat`     | New feature            | `feat/timeline-nav`     | `feat: add timeline navigation`     |
| `fix`      | Bug fix                | `fix/mobile-overflow`   | `fix: resolve mobile menu overflow` |
| `docs`     | Documentation          | `docs/update-readme`    | `docs: update installation steps`   |
| `refactor` | Code restructure       | `refactor/hero-section` | `refactor: simplify hero logic`     |
| `style`    | Formatting             | `style/format-imports`  | `style: organize imports`           |
| `test`     | Tests                  | `test/timeline-tests`   | `test: add timeline tests`          |
| `perf`     | Performance            | `perf/optimize-images`  | `perf: optimize image loading`      |
| `build`    | Build system           | `build/update-vite`     | `build: upgrade to Vite 7`          |
| `ci`       | CI/CD pipelines        | `ci/add-github-actions` | `ci: add lint workflow`             |
| `chore`    | Maintenance            | `chore/update-deps`     | `chore: update dependencies`        |
| `revert`   | Revert previous commit | `revert/feature-x`      | `revert: revert feat timeline-nav`  |

### Contribution Workflow

1. **Get the code:**
   - **External contributors:** Fork the repository, then clone your fork
   - **Collaborators:** Clone the repository directly
2. Create a branch: `git checkout -b <type>/<description>`
3. Make changes and commit: `git commit -m "<type>: <description>"`
4. Push your branch: `git push origin <type>/<description>`
5. Open a **Pull Request**

**PR Requirements:**

- ✅ Title follows [naming convention](#naming-conventions)
- ✅ Description explains changes
- ✅ Screenshots for UI changes
- ✅ All automated CI checks pass:
  - Code formatting (`prettier-check`)
  - All linters (`lint:all` - ESLint, HTML, Markdown, CSS, YAML)
  - Production build (`build`)
- ✅ No merge conflicts

> 💡 **CI/CD:** GitHub Actions automatically validates formatting, linting, and builds on every push/PR to `master`. Check the **Actions** tab for detailed results.

Thanks for contributing! 🎉

<br>

## :page_facing_up: License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Keep moving forward.** 🚀

---

Made with ❤️ and curiosity

[⬆ Back to top](#top)

</div>
