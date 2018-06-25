import { sketchSvgToReact, reactWrapper } from './svgToReact';

describe('sketchSvgToReact', () => {
  it('should prettify the output', () => {
    expect(
      sketchSvgToReact(`  
    <svg viewBox="0 0 870 644" style={style} >
      
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(0.000000, 1.000000)">
          <path d="M754,642 C754,464.716595 610.507262,321 433.5,321 C256.492738,321 113,464.716595 113,642" stroke="#CDD2D5" strokeWidth="1.5" strokeDasharray="6" transform="translate(433.500000, 481.500000) scale(1, -1) translate(-433.500000, -481.500000) "></path>
     
        </g>
      </g>
    </svg>`),
    ).toBe(
      reactWrapper(`(
  <svg viewBox="0 0 870 644" style={style} style={style}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(0.000000, 1.000000)">
        <path
          d="M754,642 C754,464.716595 610.507262,321 433.5,321 C256.492738,321 113,464.716595 113,642"
          stroke="#CDD2D5"
          strokeWidth="1.5"
          strokeDasharray="6"
          transform="translate(433.500000, 481.500000) scale(1, -1) translate(-433.500000, -481.500000) "
        />
      </g>
    </g>
  </svg>
);`),
    );
  });
  it('should update svg tags to React', () => {
    expect(sketchSvgToReact('<path stroke-width="1"></path>;')).toBe(
      reactWrapper('<path strokeWidth="1" />;'),
    );
  });
  it('should remove xml meta tags', () => {
    expect(
      sketchSvgToReact(`<svg><?xml version="1.0" encoding="UTF-8"?>\n</svg>`),
    ).toBe(reactWrapper('<svg />;'));
  });
});
