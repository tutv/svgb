# svgb

Generate svg to buffer.

### Installation
```
npm install svgb
```

### Example code
```javascript
const createSVGB = require('svgb')
const svgb = createSVGB()


setImmediate(async () => {
     const svgFile = path.join(__dirname, 'number.svg')
    try {
        const artwork = await svgb.toBuffer(svgFile, {number: 1})
        console.log(artwork)
    } catch (e) {
        console.log("ERROR", e)
    }
})
```