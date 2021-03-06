# Reaction

An alternative implementation of [React](https://facebook.github.io/react/).

## Why?

For clarity. The code base is tiny compared to React but React's core functionality is nonetheless implemented faithfully, as far as it goes. It led to a greater appreciation of React. There is now also [Inference](https://github.com/djalbat/Inference) to go hand in hand with Reaction.

If you like Reaction you might like [Reaction with Style](https://github.com/djalbat/reaction-with-style).

## Reverse Engineering React

There is a series of complementary videos:

**[Reverse Engineering React](https://vimeo.com/album/3930691)**

#### Corrigenda

- The `examples.html` file has moved to `index.html`.
- The `examples` directory in the `es6` directory has been renamed to `example`.
- The `toArray()` helper method is now called `guaranteeArray()`.
- The `index` variable in the `indexOf()` helper method is now initially set to `null`.
- The `remount()` method of the `ReactElement` should call the `getChildContext()` method.
- The `libES2015` directories in both the root and `examples` directories have been renamed `es6`.
- All children can now be arrays of elements, not just the first.
- Component state has been put back by popular demand.
- The examples have been moved to the `es6` folder.
- The helpers file has been replaced with an array utilities file.
- In the examples, the static `run()` methods and spurious classes have been replaced with functions.
- The `reduxApp` example can now be [found elsewhere](https://github.com/djalbat/Inference/blob/master/es6/examples/reduxApp.js), split up into separate files and tidied up considerably.
- The dependency on [Redux](https://github.com/reactjs/redux) has been replaced with a [barebones, local implementation](https://github.com/djalbat/Reaction/blob/master/es6/examples/redux.js).
- All instances of `var` have been replaced with either `const` or `let`.
- The `FilterLink` has been made into a `ReactClass` in order to give a usage example.
- The `React.createElement()` method has been further streamlined.
- The element classes have been reorganised, please see the source.
- Support for Inference has been added, again please see the source.
- Contexts are now handled slightly differently. Please see the section below.
- More ES6 and some experimental syntax has been adopted, for example ES6 imports and exports.
- The Redux example application has now been split up into separate files.

## Installation

With [npm](https://www.npmjs.com/):

    npm install reaction

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/reaction.git

...then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

In order to make use of JSX, you must import the `React` object at the top of the file in question:

```
import { React } from "reaction";

...
```
Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way.

The `ReactDOM` class is also available:

```
import { ReactDOM } from "reaction";

...
```
You will need to call the `ReactDOM.render(...)` method at least once from somewhere.

## Examples

Launch the `examples.html` file. There is a Redux as well as a vanilla example application.

## Supported functionality

- React components
- React functions
- React classes
- Component state
- References (via the `ref` property)
- Contexts

## Supported lifecycle methods

Of the component lifecycle methods, only these methods are supported:

- `render()`
- `setInitialState()`
- `getChildContext()`
- `componentDidMount()`
- `componentWillUnmount()`

## Additional functionality not supported by React

These methods can be called against any element bar text elements, except for the last two, which can only be called against text elements. The `getTagName()` method will return `null` for all but virtual DOM elements, namely those elements with an underlying DOM element.

- `setAttribute(name, value)`
- `getAttribute(name)`
- `clearAttribute(name)`
- `addAttribute(name, value)`
- `removeAttribute(name)`
- `hasAttribute(name)`
- `setClass(className)`
- `addClass(className)`
- `removeClass(className)`
- `toggleClass(className)`
- `hasClass(className)`
- `hasClasses(classNames)`
- `clearClasses()`
- `getTagName()`
- `setStyle(name, value)`
- `getText()`
- `setText(text)`

## Functionality that is different

There are the following methods to handle state:

- `getState()`
- `setState()`
- `updateState()`

The `setState()` method will set the React element's state to the given state. The `updateState()` method will assign the given state to the element's state, which is more akin to React's `setState()` method. Both will force the component to be remounted.

## Mixins

Mixins are supported for components, whether created by way of extending the `Component` class or by calling the `React.createClass()` method.

When extending the `Component` class you can assign the mixins to the class...
```
class ExampleComponent extends Component {
  ...
}

Object.assign(ExampleComponent, {
  mixins: [
    expand,
    collapse
  ]
});
```

...or, equivalently, use static class fields:

```
class ExampleComponent extends Component {
  static mixins = [
    expand,
    collapse
  ]
}
```

When calling the `React.createClass()` method you should add a `mixin` property to the plain old JavaScript object that you pass in:
```
const exampleComponent React.createClass({
  ...

  mixins: [
    expand,
    collapse
  ]
});
```
What defines mixins is that they are bound to the corresponding *element* class and not the component class. This means that you may safely call them from within lifecycle methods, which if not bound to the element class are nonetheless always called against it.

Whilst you should not use mixins to get around the fact that it is not always wise to extend component classes, there is nothing wrong with their judicious use. All of the methods listed in the additional functionality section above can be called directly from mixins, for example.

## Contexts

Contexts are handled slightly differently to React. The default context is an empty plain old JavaScript object `{}` and this is passed down from parent elements to their children *by reference*. If you implement any `getChildContext()` methods, however, it is recommended that you pass down contexts *by value*. To do so, you can make use of `Object.assign()` to effectively clone the context passed in, before amending it and passing it on. Suppose you wish to appraise child elements of their parent element, for example. The parent element's component class might look like the following:
```
class ParentComponent extends Component {
  getChildContext(context) {
    const parentElement = this, ///
          childContext = Object.assign({}, context, {
            parentElement
          });

    return childContext;
  }

  ...
}
```
And the child element's component class might look like the following:
```
class ChildComponent extends Component {
  getChildContext(context) {
    const { parentElement } = context,
          childContext = Object.assign({}, context);

    delete childContext.parentElement;

    return childContext;
  }

  ...
}
```
Passing contexts by value in this way will stop one set of components adversely affecting the contexts of others, so long as unique property names are used.

## Updates

The functionality of the `forceUpdate()` method has recently changed. It now simply calls the `remount()` method and passes on the update it receives as an argument. This impacts updates in the following ways:

* When an element is first mounted, its `render()` method is called without an update.

* When an element's state is changed, its `render()` method is again called without an update.

In either case, because the element is being mounted or re-mounted, the `render()` method should return the element's children. It is perfectly safe to return `null` or `undefined` on occasion, however. In either case the return value will be coerced to an empty array.

Guidance on how to handle updates can be found in the 'Recommended patterns' section at the foot of the Inference readme file.

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888/ and will reload automatically when changes are made.

## Acknowledgements

* The SVG tag and attribute names were taken from Titus Wormer's [svg-element-attributes](https://github.com/wooorm/svg-element-attributes) package.

## Contact

- james.smith@djalbat.com
