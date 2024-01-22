this is react

# Parcel

- dev build
- created local server
- HMR = Hot Module Replacement - automatically show changes made when we save our file
  it is done using a file watching algorithm which is written in C++, as soon as i save, parcel will built it once again
  time is reduced always because parcel is caching things for us which result in faster build.
- Image optimization
- Minification
- Bundling
- Compress - minimize the code and remove all unneccsary things
- consistent hashing - read about this
- code spliting
- differential bundling - to support older browser
- good error handling
- gives option to host on https
- tree shaking - removes unused code for us
- different build bundles for dev and production -remove entry point from package.json file
- when parcel generate build for dev - it saves files in dist folder
- npx parcel build index.html -builds a prodcution build for our app
- older browser support - managed by parcel

# 2 types of Routing:

- Client Side Routing
- Servers Side Routing
