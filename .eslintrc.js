module.exports = {
  env: {
    node: true,
    mocha: true
  },
  parser: "babel-eslint",
  rules: {
    strict: 0
  },
  extends: "airbnb",
  plugins: ["import", "react", "jsx-a11y"],
  rules: {
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off"
  }
};
