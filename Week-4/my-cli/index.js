const sharp = require('sharp');
const { program } = require('commander');

program
  .option('-i, --input <path>', 'Path to the input JPEG file')
  .option('-o, --output <path>', 'Path to save the output PNG file');

program.parse();

const options = program.opts();

if (options.input && options.output) {
  sharp(options.input)
    .png()
    .toFile(options.output)
    .then(() => {
      console.log(`Image converted successfully! Saved to ${options.output}`);
    })
    .catch(err => {
      console.error(`Error during conversion: ${err.message}`);
    });
} else {
  console.error('Please provide both input and output file paths using the --input and --output options.');
}
 