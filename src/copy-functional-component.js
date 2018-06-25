import sketch, { Document, Group, Page, Artboard, Rectangle } from 'sketch/dom';
import UI from 'sketch/ui';
import fs from '@skpm/fs';
import { sketchSvgToReact } from './svgToReact';

var readTextFromFile = function(path) {
  return NSString.stringWithContentsOfFile_encoding_error(
    path,
    NSUTF8StringEncoding,
    null,
  );
};

export function isFileExist(source) {
  const manager = NSFileManager.defaultManager();
  return manager.fileExistsAtPath(source);
}

export function removeFile(path) {
  const manager = NSFileManager.defaultManager();
  manager.removeItemAtPath_error(path, null);
}

export default function(context) {
  // const { document } = context;
  const document = Document.getSelectedDocument();
  const selection = document.selectedLayers;
  const page = document.selectedPage;
  const { layers, isEmpty } = selection;

  if (isEmpty) {
    UI.message('No layers selected.');
    return;
  }

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

  const exported = sketch.export(group, {
    output: targetFolder,
    formats: 'svg',
    compact: true,
  });

  group.remove();
  // const fileName = `~/Documents/Sketch\ Exports/react-components/React\ copy\ component.svg`;
  const fileName = `${targetFolder}/${name}.svg`;
  // const fileExists = isFileExist(fileName);
  // console.log(fileName, fileExists);

  // const file = readTextFromFile(fileName);
  // removeFile(fileName);
  // console.log(file);

  // const resolvedPathname = NSString.stringByResolvingSymlinksInPath(fileName);
  const svgString = fs.readFileSync(fileName, { encoding: 'utf8' });

  // Delete the file
  try {
    fs.unlinkSync(fileName);
  } catch (e) {}

  const result = sketchSvgToReact(svgString);

  const pasteboard = NSPasteboard.generalPasteboard();
  pasteboard.clearContents();
  pasteboard.writeObjects([result]);

  // const artboard = new Artboard({ name: 'test', layers: newLayers });

  // const group = new sketch.Group({
  //   layers,
  //   parent: layers[0].parent,
  // });

  // const svgExporter = SketchSVGExporter.alloc().init();
  // // const layer = context.selection.firstObject();
  // const svgData = svgExporter.exportLayers([group.immutableModelObject()]);

  // // console.log(svgData);
  // const svgString = NSString.alloc().initWithData_encoding(
  //   svgData,
  //   NSUTF8StringEncoding,
  // );
  // console.log(svgString);
  // const result = sketchSvgToReact(svgString);
  // group.sketchObject.ungroup();

  // console.log(result);
}
