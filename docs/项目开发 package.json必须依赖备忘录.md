# 项目开发 package.json必须依赖备忘录

### 命令行

```
    -D == --save-dev // 开发环境依赖
    -S == --save // 构建后依赖
```

### 代码提交规范

```json
    "devDependencies": {
      "husky": "^8.0.3", // 提交前拦截
      "@commitlint/cli": "^18.4.3", // commitlint标准的插件
      "@commitlint/config-conventional": "^18.4.3", 官方规范配置
    }
    "scripts": {
      "prepare": "husky install",
    },
```

### 发版本规范

```json
    "devDependencies": {
      "standard-version": "^9.5.0", // 发版规范
    }
    "scripts": {
        "release": "standard-version"
    },
```

### vite 相关

```json
    "devDependencies": {
        "vite": "^5.0.10",
        "vite-plugin-require-transform": "^1.0.21" // require 转译 差不多也是必须
        "vite-plugin-cdn-import": "^0.3.5", // CDN必须
        "rollup-plugin-visualizer": "^5.9.2", // 构建后代码分析
        "terser": "^5.26.0", //压缩混淆代码
        "vite-plugin-pwa": "^0.17.4", // 渐进式pwa （可选）
        "@vitejs/plugin-react": "^4.0.3", // React 相关 （可选）
    }
    "scripts": {
      "dev": "vite --mode dev",
      "test": "vite --mode test",
      "build": "vite build",
      "preview": "vite preview",
    },
```

### 代码格式化规范

### typescript 规范

  1.jsx 直接就可以改成tsx 来获得文件内即时错误提示
  2.tsconfig.json 新增此文件来

### 1.react 相关

```json
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
      },
    "devDependencies": {
      "@types/react": "^18.2.45",
      "@types/react-dom": "^18.2.18",
    }
```

### 2.vue 相关

### 3.请求

```json
    "dependencies": {
        "axios": "^1.3.4",
    },
```

### 4.UI相关

```json
    "dependencies": {
    },
```
