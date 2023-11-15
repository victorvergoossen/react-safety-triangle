# react-safety-triangle

## Introduction 
This package contains an implementation of the Safety Triangle concept for context menu's, inspired by this article: https://www.smashingmagazine.com/2023/08/better-context-menus-safe-triangles/

## Getting started
See the example on how to use the exported `SafetyTriangle` component.
Import it into your project and render the component inside your page. The `children` should contain your dropdown elements and the safety triangle will adjust to its size.

Make sure to setup your `mouseLeave` event on a top level wrapping div with `position: relative`, so the closing of your context menu takes both existing elements as well as the triangle into account.