import * as prettier from 'prettier/standalone';
import * as babylon from 'prettier/parser-babylon';

export function reactWrapper(code) {
  return `import React from 'react';

const Icon = ({ style }) => ${code}

export default Icon;
`;
}

export function sketchSvgToReact(svg) {
  const regs = [
    ['svg width="(.*?)" height="(.*?)"', 'svg'],
    ['viewBox="(.*?)"', 'viewBox="$1" style={style}'],
    [
      'version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"',
      '',
    ],
    [/<!--(.*?)-->(\n)?/, ''],
    [/<\?(.*?)\?>(\n)?/, ''],
    ['<title>(.*?)</title>\n', ''],
    [`xml version="1.0" encoding="UTF-8"\n`, ''],
    ['<desc>Created with Sketch.</desc>\n', ''],
    ['<defs></defs>\n', ''],
    ['-d', 'D'],
    ['-s', 'S'],
    ['-w', 'W'],
    ['-c', 'C'],
    [':x', 'X'],
    [':h', 'H'],
    ['-r', 'R'],
    ['-f', 'F'],
    ['-o', 'O'],
    ['-l', 'L'],
    ['-l', 'L'],

    // Removes id's
    [/ id="[^"]*"/, ''],

    // Switch from 4 to 2 spaces
    ['    ', '  '],

    // Add 2 spaces indent
    [/\n/g, '\n  '],
  ];

  let newSvg = svg;
  regs.forEach(reg => {
    const regExp = new RegExp(reg[0], 'gi');
    newSvg = newSvg.replace(regExp, reg[1]);
  });

  newSvg = prettier.format(reactWrapper(newSvg), {
    parser: 'babylon',
    singleQuote: true,
    trailingComma: 'all',
    plugins: [babylon],
  });

  return newSvg;
}
