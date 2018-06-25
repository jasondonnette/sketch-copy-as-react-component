import { sketchSvgToReact, reactWrapper } from './svgToReact';

describe('sketchSvgToReact', () => {
  it('should produce the right output', () => {
    expect(sketchSvgToReact('stroke-width')).toBe(reactWrapper('strokeWidth'));
  });
  it('should remove xml meta tags', () => {
    expect(sketchSvgToReact('<?xml version="1.0" encoding="UTF-8"?>')).toBe(
      reactWrapper(''),
    );
  });
});
