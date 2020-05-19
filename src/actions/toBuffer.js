const _getContentFile = require('./_getContentFile')
const _mergeArgs = require('./_mergeArgs')
const _toBuffer = require('./_toBuffer')


module.exports = async (svgPath, args = {}) => {
    console.log('File:', svgPath)

    const content = await _getContentFile(svgPath)
    const merged = await _mergeArgs(content, args)

    return _toBuffer(merged)
}

