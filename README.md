# biz-nodejs-starter

make your nodejs app easier to start and extend

## Main Dependency

koa2、bottlejs、mongoose

## Easy Usage

```bash
# Install nodejs >= 8.9.3
https://nodejs.org/en/download

# Install mongodb >= 3.4
https://www.mongodb.com/download-center#community

# Install modules
npm i

# Start application, default to http://127.0.0.1:5000
npm run dev

# Run command
npm run cmd CommandName

# List available command
npm run cmd

# Run test cases
npm run test

# Generate test report
npm run test:report
```

## Coding

### Structure You Should Concern

```
project
|-src
|  |-Biz                                   # Organize all your business logic code here
|  |  |-YourModuleA                        # A business mudule
|  |  |  |-Dao
|  |  |  |  |-YourModuleADaoA.js           # A dao class
|  |  |  |-Service
|  |  |  |  |-YourModuleAServiceA.js       # A service class
|  |  |-YourModuleB
|  |  |  |-Dao
|  |  |  |  |-YourModuleBDaoA.js
|  |  |  |-Service
|  |  |  |  |-YourModuleBServiceA.js
|  |  DefaultServiceProvider.js            # Where to register a component that need to inject biz instance
|  |-Command
|  |  |-YourCommandA.js                    # It can be runned by `npm run cmd YourCommandA`
|  |-Component
|  |  |-YourComponent                      # Place components like `api clients`,`csv parser`,`OAuth clients`
|  |-Config
|  |  |-parameters.js                      # It contains db config, etc. Copy and modify from parameters.js.dist
|  |  |-routing.js                         # Place your route maps for koa2
|  |-Lisenter                              # Place your request lisenter, like `accesstoken verifier`
|  |-Resource                              # Place your api controller function in restful style
|-test
|  |-Biz                                   # Tests for biz service
|  |  |-YourModuleA
|  |  |  |-YourModuleAServiceATest.js
|  |-Api                                   # Tests for Resource
|-var                                      # For cache and log, etc
```

## RoadMap

* encapsulate biz
* app client example(like webpack+react+mobx)
* other...
