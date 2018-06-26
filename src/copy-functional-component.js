import sketch, { Document, Group, Page, Artboard, Rectangle } from 'sketch/dom';
import UI from 'sketch/ui';
import fs from '@skpm/fs';
import { sketchSvgToReact } from './svgToReact';

export default function() {
  const document = Document.getSelectedDocument();
  const selection = document.selectedLayers;
  const page = document.selectedPage;
  const { isEmpty } = selection;

  if (isEmpty) {
    UI.message('No layers selected');
    return;
  }

  UI.message('Copying component');

  const newLayers = [];
  selection.forEach(layer => {
    const duplicatedLayer = layer.duplicate();
    newLayers.push(duplicatedLayer);
  });

  const name = 'react-copy-component';

  const group = new Group({
    name,
    layers: newLayers,
    parent: page,
  });

  group.adjustToFit();

  const targetFolder = '/tmp/react-components';

  sketch.export(group, {
    output: targetFolder,
    formats: 'svg',
    compact: true,
  });

  group.remove();

  const fileName = `${targetFolder}/${name}.svg`;
  const svgString = fs.readFileSync(fileName, { encoding: 'utf8' });

  // Delete the file
  try {
    fs.unlinkSync(fileName);
  } catch (e) {
    UI.message('There was an error copying the React component');
  }

  const result = sketchSvgToReact(svgString);

  // Copy to clipboard
  const pasteboard = NSPasteboard.generalPasteboard();
  pasteboard.clearContents();
  pasteboard.writeObjects([result]);

  UI.message('React component copied to clipboard');
}
