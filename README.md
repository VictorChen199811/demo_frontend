# demo_frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# 建置&部署後端API SDK

開啟 dome_backend
```sh
 curl -o api-docs.yaml http://localhost:8080/v3/api-docs.yaml
```
使用 openapi-generator-cli-7.0.0.jar 建立SDK
```sh
 java -jar openapi-generator-cli-7.0.0.jar generate -i api-docs.yaml -g javascript -o ./generated-sdk
```

進入生成的 SDK 目錄，並初始化 NPM 包
```sh
cd generated-sdk
npm init
```
安裝 SDK
```sh
cd ..
npm install npm install ./generated-sdk

```
# 備註
設定Java版本
```sh
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
```
設定node.js 版本
```shell
source $(brew --prefix nvm)/nvm.sh 
nvm alias default 16
```
