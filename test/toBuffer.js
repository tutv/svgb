const createSVGB = require('../index')
const path = require('path')

const svgb = createSVGB()

setImmediate(async () => {
    const svgFile = path.join(__dirname, 'number.svg')
    try {
        const artwork = await svgb.toBuffer(svgFile, {number: 1})
        console.log(artwork)
    } catch (e) {

    }
})