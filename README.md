# Next.js API

This is a Next.js project similar to the famous [neofetch](https://github.com/dylanaraps/neofetch) terminal tool but it shows the data from the server instead of the client. IT shows how to use the [Next.js API routes](https://nextjs.org/docs/api-routes/introduction)

- We mainly use the Node.js OS module to get the data from the server. We then pass that data to the client-side using the Next.js API routes and `getServerSideProps` method

> Note: You can also use the `getStaticProps` method to get the data from the server but I decided to use the `getServerSideProps` method because I added a little bit of dynamic data

## Getting Started

- clone the repo and `cd` into the directory
- run `npm install` to install the dependencies
- run `npm run dev` to start the development server
- open [http://localhost:3000](http://localhost:3000) with your browser to see the result

> Note: This project is built with the Typescript, ESLint create-next-app template

## Learn More

- [Next.js API Routes](https://nextjs.org/docs/api-routes/dynamic-api-routes)
- [Node.js OS Module](https://nodejs.org/api/os.html)
