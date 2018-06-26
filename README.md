# Copy as React Component - Sketch Plugin

Copy as React Component is a [Sketch](https://www.sketchapp.com) plugin that allows you to generate a React components with a keyboard shortcut.

## Installation

1.  [Download](https://github.com/jasondonnette/sketch-copy-as-react-component/releases/download/v1.0.0/Copy.as.React.Component.sketchplugin.zip), unzip and double-click the **CopyAsReactComponent.sketchplugin** file
2.  Open up your Sketch file and select layers to copy
3.  Hit _Option+Command+R_ or go to _Plugins -> React -> Copy Component_
4.  A React component is now copied to your clipboard!

## How does it work?

![demo](https://user-images.githubusercontent.com/823765/41881002-fadcf788-7895-11e8-8183-09a047caab0f.gif)

Copy as React Component uses the same output from _Right-Click > Copy SVG Code_, then transforms it into JSX and prettifies it with [Prettier](https://github.com/prettier/prettier).

That's pretty much it!

## Roadmap

- Add props for fill & stroke colors
- Add an option to copy a full React.Component class
