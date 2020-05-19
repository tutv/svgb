const fs = require('fs')


module.exports = async (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, {encoding: 'utf8'}, (error, content) => {
            if (error) return reject(error)

            return resolve(content)
        })
    })
}

