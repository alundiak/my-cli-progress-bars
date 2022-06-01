function example_progress() {
    var ProgressBar = require('progress');

    var bar = new ProgressBar(':bar', {
        total: 50,
        head: "|",
        incomplete: "°",
        complete: "°",
        clear: true
    });
    var timer = setInterval(function () {
        bar.tick();
        if (bar.complete) {
            console.log('\nвуаля :)\n');
            clearInterval(timer);
        }
    }, 100);
}

function example_clui() {
    var clui = require('clui');

    var Progress = clui.Progress;

    var thisProgressBar = new Progress(20);
    console.log(thisProgressBar.update(10, 30));

    // or

    // var thisPercentBar = new Progress(20);
    // console.log(thisPercentBar.update(0.4));
    //
}


function example_cli_progress() {
    var _progress = require('cli-progress');

    // create a new progress bar instance and use shades_classic theme
    var bar1 = new _progress.Bar({}, _progress.Presets.shades_classic);

    // start the progress bar with a total value of 200 and start value of 0
    bar1.start(200, 0);

    // update the current value in your application..
    bar1.update(100);

    // stop the progress bar
    bar1.stop();
}

function example_single_line_log() {
    // const fs = require('fs');
    // var log = require('single-line-log').stdout;
    // or pass any stream:
    var log = require('single-line-log')(process.stdout);

    var read = 0;
    var size = fs.statSync('super-large-file').size;

    var rs = fs.createReadStream('super-large-file');
    rs.on('data', function (data) {
        read += data.length;
        var percentage = Math.floor(100 * read / size);

        // Keep writing to the same two lines in the console
        log('Writing to super large file\n[' + percentage + '%]', read, 'bytes read');
    });

}

example_progress()
// example_clui()
// example_cli_progress()
// example_single_line_log() // failing
