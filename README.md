# Setup Express Typescript TypeORM

Create new setup folder: `express-typescript`

Start a project:

```bash
yarn init -y
```

Make sure you have typescript installed globally.

```bash
npm i -g typescript
```

Setting TypeORM

```bash
npm i -g typeorm
```

```bash
yarn add -D typeorm
```

```bash
typeorm init --database postgres --express
```

Start typescript config:

```bash
tsc --init
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "lib": ["es5", "es6"],
    "module": "commonjs",
    "moduleResolution": "node",
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": false,
    "target": "es2016"
  }
}
```

Installing dependencies:

```bash
yarn add express cors morgan -E
```

```bash
yarn add -D typescript @types/express @types/cors @types/morgan ts-node-dev -E
```

`.gitignore`

```bash
.idea/
.vscode/
node_modules/
dist/
.env
tmp/
temp/
yarn-error.log

# DB
db_sample_data/

# Docker
docker-compose.yml
```

[Eslint config](https://www.notion.so/ESLINT-PRETTIER-Config-df09e4205ac4426a975de093b7a34e17?pvs=21)

`docker-compose.yml`

```yaml
version: "3"
services:
  postgres:
    image: postgres:14.7-alpine
    container_name: sample_postgres
    environment:
      POSTGRES_USER: sample_user
      POSTGRES_PASSWORD: pwqwerty
      POSTGRES_DB: sample_db
    volumes:
      - ./db_sample_data:/var/lib/postgresql/data
    restart: always
    ports:
      - "5432:5432"
```

Folders

```bash
src
├───common
│   ├───config
│   ├───dtos
│   ├───handlers
│   ├───helpers
│   └───middlewares
├───database
│   └───migration
└───modules
    └───sample-tax
        └───sample-module
            ├───controllers
            ├───dtos
            ├───entities
            ├───middlewares
            ├───routes
            └───services
                └───impl
```
