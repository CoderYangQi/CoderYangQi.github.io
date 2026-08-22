import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const builtSite = join(repositoryRoot, "dev-ops", "nginx", "html");
const outputDirectory = join(repositoryRoot, "github-pages");
const englishResume = join(builtSite, "en", "md", "resume.html");
const outputIndex = join(outputDirectory, "index.html");

if (!existsSync(englishResume)) {
  throw new Error(`English resume HTML was not found: ${englishResume}`);
}

const resolvedOutput = resolve(outputDirectory);
const expectedPrefix = `${repositoryRoot}${sep}`;
if (!resolvedOutput.startsWith(expectedPrefix) || resolvedOutput === repositoryRoot) {
  throw new Error(`Unsafe output directory: ${resolvedOutput}`);
}

rmSync(resolvedOutput, { recursive: true, force: true });
mkdirSync(resolvedOutput, { recursive: true });
cpSync(builtSite, resolvedOutput, { recursive: true });

let indexHtml = readFileSync(englishResume, "utf8");

// The copied page is already server-rendered. Removing VuePress hydration from
// the root copy prevents the client router from replacing it with the original
// root route after loading. Other generated routes keep their full JavaScript.
indexHtml = indexHtml
  .replace(/<script type="module" src="\/assets\/app-[^"]+\.js" defer><\/script>/g, "")
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replace(/<link rel="prefetch"[^>]*as="script"[^>]*>/g, "")
  .replaceAll("http://www.yangqiwork.cn", "https://coderyangqi.github.io")
  .replaceAll("https://www.yangqiwork.cn", "https://coderyangqi.github.io")
  .replace(/<title>Resume \| Yang Qi \| Resume<\/title>/, "<title>Qi Yang | Resume</title>")
  .replace(
    "</head>",
    `    <link rel="canonical" href="https://coderyangqi.github.io/">
    <style id="github-pages-root-static">
      .vp-toggle-sidebar-button,
      .vp-toggle-navbar-button,
      .toggle-sidebar-wrapper,
      #appearance-switch,
      .i18n-dropdown { display: none !important; }
    </style>
  </head>`,
  );

writeFileSync(outputIndex, indexHtml, "utf8");
writeFileSync(join(outputDirectory, ".nojekyll"), "", "utf8");

console.log(`GitHub Pages directory: ${outputDirectory}`);
console.log(`Root index source: ${englishResume}`);
