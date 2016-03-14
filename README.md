#### Running the project locally

```sh
 - $ npm i
 - $ NODE_ENV=prod npm start
 - http://localhost:8080/tools/bcrypt-verify/
```

#### Deployment process

```sh
 - ssh root@<IP Address>
 - su ryan
 - cd / && cd opt/cryptoBox
 - sudo git pull
 - nvm ls
 - nvm use v0.12.3
 - forever restart server.js
```
