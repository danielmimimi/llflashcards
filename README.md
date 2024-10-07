
# Frontend

Next.js is a React framework for building fast, optimized web applications.  
It supports server-side rendering (SSR) and static site generation (SSG) for better performance and SEO.  
With built-in routing, API routes, and automatic code splitting, Next.js simplifies creating both dynamic and static websites.

## Use it on Windows

1. Clone the Lens project using Git:
   ```bash
   git clone <repository-url>
   ```

2. Install Docker Desktop from [Docker's official website](https://www.docker.com/products/docker-desktop/).

3. Open Visual Studio Code and install the **Docker** and **Dev Containers** extensions.

4. Open the code on `lens\components\vca_agent_lens\frontend`:
   ```bash
   code lens\components\vca_agent_lens\frontend
   ```

5. Open the development container in VS Code:
   - Press `Ctrl + Shift + P` and select **Dev Containers: Reopen in Container...**.

6. Open a console in the Docker container and install project dependencies:
   ```bash
   npm install
   ```

7. Start the development server:
   ```bash
   npm run dev
   ```

## Use it on Linux

*(Node.js should be pre-installed)*

1. Install dependencies (see the "Install Nodes on Ubuntu" chapter below).

2. Clone or copy the `lens\components\vca_agent_lens\frontend` directory to your device:
   ```bash
   git clone <repository-url> lens\components\vca_agent_lens\frontend
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Install Nodes on Ubuntu

1. Update your package lists:
   ```bash
   sudo apt update
   ```

2. Install Node.js (which includes Node and npm):
   ```bash
   sudo apt install nodejs
   ```

3. Verify the installation:
   ```bash
   node -v && npm --version
