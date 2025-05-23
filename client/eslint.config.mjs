import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Make these rules warnings instead of errors
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      
      // Configure ban-types to allow empty objects
      "@typescript-eslint/ban-types": [
        "warn",
        {
          types: {
            "{}": false // Explicitly allow empty object type
          },
          extendDefaults: true
        }
      ],
      
      // Additional recommended relaxed rules
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn"
    }
  }
];

export default eslintConfig;