interface _SVGB {
    toBuffer(svgPath: String, args?: Object): Promise<Buffer>
}

declare function SVGB(): _SVGB

export default SVGB
