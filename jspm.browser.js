SystemJS.config({
  baseURL: ".",
  production: true,
  paths: {
    "app/": "src/",
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
  }
});
