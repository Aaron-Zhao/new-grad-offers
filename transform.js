module.exports.transform = function() {
    console.log('start transformation..');

    let fs = require('fs');
    fileNames = ['2016.json', '2015.json', '2014.json'];
    
    for (let f of fileNames) {
        let _file = JSON.parse(fs.readFileSync('./' + f, 'utf8'));
        for (let i = 1; i < _file.length; i++) {
            let o = {};
            for (let k in _file[0]) {
                o[_file[0][k]] = _file[i][k]
            }
            _file[i] = o;
        }
        fs.writeFile('data_' + f, JSON.stringify(_file), function (err) {
            if (err) return console.log(err);
            console.log('transformation complete ' + f + ' > ' + 'data_' + f);
        });
    }

    console.log('end transformation..');
    
};