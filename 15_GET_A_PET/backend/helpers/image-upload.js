const multer = require('multer')
const path = require('path')

// destination to store the images
const imageStorage = multer.diskStorage({
    destination: function(req, file, cb){

        let folder = ""

        if(req.baseUrl.includes("users")){//se na minha url tiver "users"
            folder = "users"
        }else if(req.baseUrl.includes("pets")){
            folder = "pets"
        }

        cb(null, `public/img/${folder}`)
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + String(Math.floor(Math.random() * 100)) + path.extname(file.originalname))//números para nomear o documento e não ocorra o risco de repetir, também pega extensão original do doc.
    },
})

const imageUpload = multer({
    storage : imageStorage,
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){//se no final do documento não tiver este extenção
            return cb(new error("Por favor, envie apenas jpg ou png!"))
        }
        cb(undefined, true)
    }
})

module.exports = { imageUpload }