var thumb = require('node-thumbnail').thumb;
const makeDir = require('make-dir');

var year = 2016; // THE FIRST YEAR FROM WHICH THINGS SHOULD BE GENERATED
var shouldRun = true;
function thumbGenerator() {
  return new Promise(function(resolve) {
    const importFolder = 'src/assets/images/archive';
    const exportFolder = 'src/assets/images/archive/thumbnails';

    const subfolder =  year + '-' + (year + 1) + '/images';

    const exportDir = exportFolder + '/' + subfolder;

    thumb({
      prefix: '',
      suffix: '',
      source: importFolder + '/' + subfolder,
      destination: exportDir,
      width: 600,
      overwrite: true
    }, function(files, err, stdout, stderr) {
      if(err === null) {
        console.log("Success for images in: ", exportDir);
      }
      resolve();
    })
    .catch(function(err) {
      var n = err.toString().search("Source");
      if(n !== -1) {
        shouldRun = false;
      }
      n = err.toString().search("Destination");
      if(n !== -1) {
        console.log("Generating folder:", exportDir);
        makeDir(exportDir);
      }
    });
  });
}

function recThumbGen() {
  thumbGenerator().then(
    function(){
      if(shouldRun){
        year++;
        recThumbGen();
      } else {
        console.info("Thumbnails generating until year:", year-1, '-', year);
      }
    }
  );
}

recThumbGen();

// by Szoke Lorand =)


