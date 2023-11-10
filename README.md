# Fullstack Authentication Example with Next.js and NextAuth.js

This is the starter project for the fullstack tutorial with Next.js and Prisma. You can find the final version of this project in the [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final) branch of this repo.


npm install prisma --save-dev
npx prisma init
npm install @prisma/client
npx prisma generate

## When build then is error for vercel deployment
## typescript
Next.js fails your production build (next build) when TypeScript errors are present in your project.

If you'd like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step.

If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous.

Open next.config.js and enable the ignoreBuildErrors option in the typescript config: