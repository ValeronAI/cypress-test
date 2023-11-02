const { exec } = require("child_process");

const getPortProcess = exec("pnpm get-port");

getPortProcess.stdout?.on("data", (data) => {
    const port = parseInt(data);
    if (!port) return;

    // Start application
    console.log("Starting test server on port " + port);
    const viteProcess = exec("pnpm vite --port " + port);
    viteProcess.stdout?.pipe(process.stdout);
    viteProcess.stderr?.pipe(process.stderr);

    // Start Cypress
    const baseUrl = "http://localhost:" + port;
    process.env.CYPRESS_BASE_URL = baseUrl;
    console.log("Connecting Cypress to test server at " + baseUrl + "...");

    const command = "pnpm cypress open --e2e";
    console.log("Starting Cypress: " + command);

    const cypressProcess = exec(command);
    cypressProcess.stdout?.pipe(process.stdout);
    cypressProcess.stderr?.pipe(process.stderr);
    cypressProcess.on("exit", (code) => process.exit(code));
});
