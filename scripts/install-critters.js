const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

// Check if critters is installed
try {
  require.resolve("critters")
  console.log("✅ Critters is already installed")
} catch (e) {
  console.log("⚠️ Critters not found, installing...")
  try {
    // Try to install critters directly
    execSync("npm install --no-save critters@0.0.16", { stdio: "inherit" })
    console.log("✅ Critters installed successfully")
  } catch (error) {
    console.error("❌ Failed to install critters:", error.message)
    console.log("⚠️ Continuing build without critters...")

    // Create a fallback critters module to prevent build failures
    const crittersDir = path.join(process.cwd(), "node_modules", "critters")
    if (!fs.existsSync(crittersDir)) {
      fs.mkdirSync(crittersDir, { recursive: true })
    }

    const fallbackContent = `
      module.exports = class Critters {
        constructor() {
          console.warn('Using fallback critters implementation');
        }
        process(html) {
          return Promise.resolve(html);
        }
      };
    `

    fs.writeFileSync(path.join(crittersDir, "index.js"), fallbackContent)
    fs.writeFileSync(
      path.join(crittersDir, "package.json"),
      JSON.stringify(
        {
          name: "critters",
          version: "0.0.16",
          main: "index.js",
        },
        null,
        2,
      ),
    )

    console.log("✅ Created fallback critters module")
  }
}
