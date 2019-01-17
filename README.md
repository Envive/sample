# Sample Project

## Development Environment

### VS Code
We use [VS Code](https://code.visualstudio.com) as the formal code editing tool in this project. Please download and install VS Code before you proceed to the next step.

#### Plugins
* ESLint - VS Code ESLint extension
* Vetur - Vue tooling for VS Code
* Stylelint - A Visual Studio Code extension to lint CSS/SCSS/Less with stylelint

#### Settings

Set tab size to 2 and insert as spaces
```json
"editor.tabSize": 2
"editor.insertSpaces": true
```

Config ESLint to lint typescript and vue files.
```json
"eslint.packageManager": "yarn",
  "eslint.run": "onSave",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    {
      "language": "vue",
      "autoFix": false
    }
  ],
```

### Yarn
Either yarn or npm is feasbile Node package management tool for this project. However, yarn is recommended. The easiest way to install yarn in OSX is via [Homebrew](https://docs.brew.sh/Installation).

```sh
brew intall yarn
```

## Download and run in developement mode

```sh
git clone git@github.com:Envive/sample.git
cd sample
yarn install
yarn serve
```
