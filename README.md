# React Native FlatList KeyExtractor Bug

This repository demonstrates a common, yet often difficult to diagnose, bug in React Native's FlatList component. The issue arises when the `keyExtractor` function does not provide unique keys for each item in the data array. This can lead to unexpected rendering behavior, performance problems, and generally unpredictable app behavior.

The `bug.js` file contains code that reproduces the problem. The `bugSolution.js` file offers a corrected implementation with a unique key for each item.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app using your preferred React Native method (e.g., `npx react-native run-android` or `npx react-native run-ios`).
4. Observe the inconsistent rendering and potential performance issues.

## Solution

The solution involves ensuring that the `keyExtractor` function returns a unique identifier for every item in your data array. This is crucial for React Native to efficiently update and re-render the list.  Consider using UUIDs or a combination of fields that guarantee uniqueness if your data lacks a naturally unique identifier.