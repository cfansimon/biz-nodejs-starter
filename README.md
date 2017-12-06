# biz-nodejs-starter

make your nodejs app easier to start and extend

## Main Dependency

koa2、bottlejs、mongoose

## Easy Usage

```bash
npm i

# Start application, default to http://127.0.0.1:5000
npm run dev

# Run command
npm run cmd CommandName

# list available command
npm run cmd

# Run test cases
npm run test

# Generate test report
npm run report
```

## Coding

### Structure You May Concern

```
project
|-src
|  |-Biz (magic place)
|  |  |-YourModuleA
|  |  |  |-Dao
|  |  |  |  |-YourModuleADaoA.js
|  |  |  |-Service
|  |  |  |  |-YourModuleAServiceA.js
|  |  |-YourModuleB
|  |  |  |-Dao
|  |  |  |  |-YourModuleBDaoA.js
|  |  |  |-Service
|  |  |  |  |-YourModuleBServiceA.js
|  |  DefaultServiceProvider.js (where to register a component that need to injection biz instance)
|  |-Command
|  |  |-YourCommandA.js (it can be runned by `npm run cmd YourCommandA`)
|  |-Component
|  |  |-YourComponent
|  |-Config
|  |  |-parameters.js (copy and modify from parameters.js)
|  |  |-routing.js (place your route maps for koa2)
|  |-Lisenter (place your request lisenter)
|  |-Resource (place your api controller function)
|-test
|  |-Biz (test for biz service)
|  |  |-YourModuleA
|  |  |  |-YourModuleAServiceATest.js
|  |-Api (test for Resource)
|-var (for cache and log, etc.)
```

## RoadMap

* test
* encapsulate biz
* app client example(like webpack+react+mobx)
* other...