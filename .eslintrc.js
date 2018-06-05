module.exports = {
    "extends": "airbnb",
    "rules": {
       "import/no-unresolved": ["off"],
       "import/extensions": ["off"],
       "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
       "react/prop-types": ["error", { "ignore": ["navigation"] }]
   }

};
