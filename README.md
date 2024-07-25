This is a React Native recruitment challenge project. Below you can find step by step guide how to run the project on your local machine, as well as my thought process, encountered problems, my solutions and possible improvements.

# 🎯 Goal of the project
It's a mobile application for iOS and Android to browse film by categories, being able to open a specific film to see its details. To be more specific:
- The homepage should contain 3 carousels with films
- Each carousel is a different category of films
- When clicking on an item, it should go to a detailed page of that item
- The detail page should include a description, an image and a button
- The button should trigger an “add to wish list” action
- Depending on the category of the item, the detail page should have:
- A different font
- A different button
- Any other differentiation you think it can be added
- There should be a wish list section where all the items added can be seen

# 🃏 Stack
- React Native
- TypeScript
- styled-components
- Jest and React Native Testing Library (I deliberately changed Enzyme for RNTL, in "Challenges" section you can read why)
- TheMovieDatabase API

# 🤔 Challenges
- using Enzyme, as the library is no longer maintained and causes troubles with newer React Native versions
- fitting the desired wireframe design in a smaller screen - hence a couple of items are placed differently (movie description is rendered below the image rather than next to it)
- following the "codebase should be handcrafted" rule - it was unclear to me how much "handcrafted" it should be. I didn't use any external library for my solution per se, however I used  a couple of basic libraries (transforming SVGs, i18n, React Navigation) to avoid reinventing the wheel
- I was unsure if Context API is desired solution for wishlist, because in job description Redux/Mobx were emphasized. However challenge requirements didn't mention any of those, so I decided it's not a proper solution for such a small and not complex global state

# 🔨 Potential improvements
To avoid extended development time, in order to keep the recruitment process pleasant for both sides, I decided to not focus on couple of things, which I would take care of in my normal workflow. For example, I would:
- add a custom back button for navigator, as currently it's not nicely aligned with our header color
- move all sizing to constants - follow [8px grid approach](https://medium.com/@mertyagci/the-power-of-the-8pt-grid-system-in-design-1c9dbc683ad8)
- consider keeping only IDs in wishlist context, so our store won't grow too much
- create a pagination and "load more" (or infinite loading) for galleries
- add section "similar movies" in movie details screen
- add skeleton loading instead of loading indicator
- consider parsing `snake_case` object keys coming from API to `camelCase` to keep it aligned with our codebase
- persist global state, for example in AsyncStorage
- polish up empty styles UI wise
- add a splash screen and an icon
- focus on tablet styles


# 💻 Running on your local machine

## Step 0: Prerequisites
>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/set-up-your-environment) instructions.
Besides that project is using:
- JDK 17
- Node version 20.9.0

## Step 1: Install node modules and iOS dependencies
```bash
yarn
```

Run only at project bootstrap, after installing new dependencies, adding new fonts or assets
```bash
yarn ios:deps
```

## Step 2: Setup the .env file
Following the env.example file setup your own .env file with your API key for TheMovieDatabase.


## Step 3: Start the Metro Server

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 4: Start the application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

# 📱 See the demo online

[iOS demo](https://appetize.io/app/b_bszeofcplorypq2k5samzhzbmu)
[Android demo](https://appetize.io/app/b_phwlwzxc5ufrkoliiozy7x4ya4)

# 💾 Download the .app and .apk binary 
[Google drive](https://drive.google.com/drive/folders/1gZ_H3Eq2dBiSyvV7PCpDXr2rAQa77Z74?usp=sharing) folder with necessary files

