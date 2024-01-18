const moduleAlias = require("module-alias");

moduleAlias.addAliases({
  "@": "./",
});

/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  output: "export",
};
