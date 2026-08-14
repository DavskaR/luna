import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const manifest = fs.readFileSync(path.join(root, "lib", "images.ts"), "utf8");
const expected = [
  "hero-desktop.jpg",
  "hero-mobile.jpg",
  "about-portrait.jpg",
  "cenik-side.jpg",
  "kontakt-background.jpg",
  "galerie-01.jpg",
  "galerie-02.jpg",
  "galerie-03.jpg",
  "galerie-04.jpg",
  "galerie-05.jpg",
  "galerie-06.jpg",
];

const missingFiles = expected.filter(
  (file) => !fs.existsSync(path.join(root, "public", "media", file))
);
const missingManifestPaths = expected.filter(
  (file) => !manifest.includes(`/media/${file}`)
);

if (missingFiles.length || missingManifestPaths.length) {
  if (missingFiles.length) {
    console.error(`Missing media files: ${missingFiles.join(", ")}`);
  }
  if (missingManifestPaths.length) {
    console.error(`Missing manifest paths: ${missingManifestPaths.join(", ")}`);
  }
  process.exit(1);
}

console.log(`Verified ${expected.length} media files and manifest paths.`);
