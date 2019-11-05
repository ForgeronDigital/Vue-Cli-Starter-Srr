# Vue Cli starter kit for SSR

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### - Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### - Run SSR
```
yarn run ssr:serve
```
## /!\ In package.json "@akryum/vue-cli-plugin-ssr": "^0.6.0" MUST be at the end of the "devDependencies" object, every time you add a librairy you have to put it at the end of the list (after vue-cli at least)!
/!\ If you want to serve in no-SSR using ``` yarn serve ``` you have to uncomment in router/index.ts ->  ``` mode: "abstract" ``` but you'll have to deal with the "#" or set mode to "history".</br>
Even in SSR you can have access to window element thanks to JSDOM and JSDOM GLOBAL but it's better to use Vue's option to access the DOM.

### SCSS
There are 2 files, one for the variables and the other for the general style which can (must) use the varaibles of the variable's file.
