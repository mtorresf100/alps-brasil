/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("cd", [folderName]);
    await execa("git", ["init"]);
    await execa("git", ["add", "-A"]);
    await execa("git", ["commit", "-m", "Update"]);
    await execa("git", ["push", "-f", "git@github.com:mtorresf100/alps-brasil.git", "master:gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
