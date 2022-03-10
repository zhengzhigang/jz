var fs = require('fs')
var path = require('path')

var filePath = path.resolve('../images/');
//调用文件遍历方法
fileDisplay(filePath);
//文件遍历方法
function fileDisplay(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror, stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var content = fs.readFileSync(filedir)
                        var base = 'data:image/' + filename.split('.')[1] + ';base64,' + content.toString('base64')
                        fswrite('./json/' + filename.split('.')[0] + '.json', base)
                    }
                })
            });
        }
    });
}


function fswrite(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, {
            flag: 'a',
            encoding: 'utf-8'
        }, function() {

        })
    })
}

function fsReader(path) {
    var imageData = fs.readFileSync(path)
    console.log(imageData)
    var imageBase64 = imageData.toString('base64')
    return imageBase64
}
