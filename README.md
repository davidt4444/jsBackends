# jsBackends
 
npx create-next-app@latest basic-content-service --typescript --eslint
cd basic-content-service
npm install @prisma/client prisma mysql2
npm install -D prisma
npx prisma init

set environment variable for database
source ../../aws-resources/localhost-mac-js.sh
npx prisma migrate dev --name init

Remember the routes are in the tailwind config 
So for /api/posts the index.ts has to be in 
./pages/api/posts as defined in the config
where the path is relative to the nextjs project base dir
request params are in the brackets in the file name
such as [id].ts for the put, patch, delete

npm run dev
https://x.com/i/grok/share/FbAxKD1cMUeavPYluRB9wQwTk

