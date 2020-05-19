module.exports = async (content, args) => {
    const object = Object.assign({}, args)

    let template = content + ''

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key]
            const regex = new RegExp(`\{${key}\}`, 'gi')

            template = template.replace(regex, value)
        }
    }

    return template
}

