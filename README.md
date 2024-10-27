## Objective

This template scaffolds a vue project using `webpack` with `babel` targeting low-end devices like IE, or below `ES5`. With `typescript` enabled using `@vue/cli-plugin-typescript`.

## Caution

1. Enable `sourceMap: true` in `tsconfig`'s `compilerOptions`. Which enable sourcemap to the original `.vue` file. This is hard to reason about. [#](https://webpack.docschina.org/guides/typescript/#source-maps)
2. Change the browserslist in `babel.config.js`

## Project setup

```
pnpm install
```

### Compiles and hot-reloads for development

```
pnpm run serve
```

### Compiles and minifies for production

```
pnpm run build
```

### Lints and fixes files

```
pnpm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
