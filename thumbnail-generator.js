var thumb = require('node-thumbnail').thumb;
const makeDir = require('make-dir');

const STARTING_YEAR = 2016;

var year = STARTING_YEAR; // THE FIRST YEAR FROM WHICH THINGS SHOULD BE GENERATED
var shouldRun = true;
function thumbGenerator() {
  return new Promise(function(resolve) {
    const importFolder = 'src/assets/images/archive';
    const exportFolder = 'src/assets/images/archive/[thumbnails]';

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
        console.info("THUMBNAILS [BEING] GENERATED FROM YEAR", STARTING_YEAR, '-', STARTING_YEAR+1, "UNTIL YEAR", year-1, '-', year);
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
      }
    }
  );
}

recThumbGen();

// by Szoke Lorand =)


