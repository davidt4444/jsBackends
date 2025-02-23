# jsBackends
 
npx create-next-app@latest basic-content-service --typescript --eslint
cd basic-content-service
npm install @prisma/client prisma mysql2
npm install -D prisma
npx prisma init

set environment variable for database
source ../../../aws-resources/localhost-mac-js.sh
npx prisma migrate dev --name init

For sql queries
npx prisma generate --sql

To update
https://kristenkinnearohlmann.dev/prisma-add-field-to-model/
Update schema.prisma
npx prisma db push
npx prisma migrate dev
npx prisma generate

Remember the routes are in the tailwind config 
So for /api/posts the index.ts has to be in 
./pages/api/posts as defined in the config
where the path is relative to the nextjs project base dir
request params are in the brackets in the file name
such as [id].ts for the put, patch, delete

Always set env args before run
source ../../../aws-resources/localhost-mac-js.sh
npm run dev
https://x.com/i/grok/share/FbAxKD1cMUeavPYluRB9wQwTk

your-react-app -> basic-content-frontend
jsbackends base

/////// deprecated
/////// npx create-react-app basic-content-frontend --template typescript
/////// If it creates errors 
///////https://github.com/facebook/create-react-app/issues/13873
///////cd basic-content-frontend
///////npm install --save-dev @testing-library/react@latest
///////npm install web-vitals
///////npm start
////// deprecated

npm create vite@latest basic-content-frontend -- --template react-ts
cd basic-content-frontend
npm install axios @mui/material @emotion/react @emotion/styled
npm install react-router-dom
npm install @types/node;
rm package-lock.json
npm update --save
npm install
npm run dev

Cors should be implemented on a service by service basis with request response logic

The journey to it working was messy, but the middleware.ts support is flaky 
https://x.com/i/grok/share/SsDXfUOepxExefOegMmpRyIZA

I rewrote some of the front end on my own as a departure from the Grok returns, because it was easier and came closer to the workflow that I wanted.

