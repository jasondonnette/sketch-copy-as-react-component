# Copy as React Component - Sketch Plugin

Copy as React Component is a [Sketch](https://www.sketchapp.com) plugin that allows you to generate a React components with a keyboard shortcut.

## Installation

<<<<<<< HEAD
1.  [Download](https://github.com/jasondonnette/sketch-copy-as-react-component/releases/download/v1.0.0/Copy.as.React.Component.sketchplugin.zip) and unzip
2.  Double-click the **plugin.sketchplugin** file

## Instructions

1.  In Sketch, select the layers to copy
2.  Hit <kbd>Option ⌥</kbd>+<kbd>Command ⌘</kbd>+<kbd>R</kbd> or go to _Plugins -> Copy as Copy Component_
3.  A React component is now copied to your clipboard!
=======
1.  [Download](https://github.com/jasondonnette/sketch-copy-as-react-component/releases/download/v1.1.0/plugin.sketchplugin.zip), unzip and double-click the **plugin.sketchplugin** file
2.  Select the layers you would like to copy as JSX/your React component
3.  Hit <kbd>Option ⌥</kbd>+<kbd>Command ⌘</kbd>+<kbd>R</kbd> or go to _Plugins -> React -> Copy Component_
4.  A React component is now copied to your clipboard!
>>>>>>> 0ab86f75ea592f1cd49d6a6642124936ec5ecd44

## How does it work?

![demo](https://user-images.githubusercontent.com/823765/41882004-5835928c-789b-11e8-906a-fb908fd84f55.gif)

Copy as React Component uses the same output from _Right-Click > Copy SVG Code_, then transforms it into JSX and prettifies it with [Prettier](https://github.com/prettier/prettier).

That's pretty much it!

## Roadmap

- Add props for fill & stroke colors
- Add an option to copy a full React.Component class
