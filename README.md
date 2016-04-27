# Reaction

An alternative implementation of React.

#### Why?

For clarity. The code base is tiny compared to [React](https://facebook.github.io/react/) but React's core functionality is nonetheless implemented faithfully. Personally it lead to a greater appreciation of React.

## Installation

    npm reaction

## Usage

```js
var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;
```

Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way, although bear in mind only  subset of React's functionality is supported.

You can also clone the repository with [git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Reaction.git

...then install the necessary modules with [npm](https://www.npmjs.com/):

    npm install

You will need to do this if you want to look at the examples.

## Examples

Launch the `examples.html` file in the root folder. There is a Redux as well as a vanilla example application.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build
    npm run watch

## Supported functionality

- React classes
- React components
- React functions
- References
- Contexts
- Mounting and unmounting

Contexts are handled differently. React elements can only pass down a context to child elements, and those child elements can only receive a context, in its entirety. However, the current context is available as `this.context` when the `getChildContext()` method is invoked, or passed as the second argument of the `getChildContext()` method in the case of functions, so you can make programmatic decisions about what context to pass down to children.

## Functionality that is not supported

- Component state. Use Redux!
- Of the component lifecycle, all methods except `componentWillMount()` and `componentWillUnmount()` are *not* supported.

## Roadmap

- Add an implementation of Redux, possibly,
- and then look at Falcor?

## Contact

- james.smith@djalbat.com
- http://djalbat.com
