const fs = require('fs')
const path = require('path')

function generateThemeFileContent(theme) {
    return `const { ${theme}ThemeSingle } = require('./theme');`
}

// We need compile additional content for antd user
function finalizeCompile() {
    // if (fs.existsSync(path.join(__dirname, './lib'))) {
    //     // Build a entry less file to dist/antd.less
    //     const componentsPath = path.join(process.cwd(), 'src')
    //     let componentsLessContent = ''
    //     // Build components in one file: lib/style/components.less
    //     fs.readdir(componentsPath, (err, files) => {
    //         files.forEach(file => {
    //             if (fs.existsSync(path.join(componentsPath, file, 'style', 'index.less'))) {
    //                 componentsLessContent += `@import "../${path.posix.join(file, 'style', 'index.less')}";\n`
    //             }
    //         })
    //         fs.writeFileSync(path.join(process.cwd(), 'lib', 'style', 'components.less'), componentsLessContent)
    //     })
    // }
}

function finalizeDist() {
    if (fs.existsSync(path.join(__dirname, './dist'))) {
        // Build less entry file: dist/antd.less
        fs.writeFileSync(path.join(process.cwd(), 'dist', 'jxt.less'), '@import "../lib/style/index.less";')
    }
}

module.exports = {
    compile: {
        finalize: finalizeCompile,
    },
    dist: {
        finalize: finalizeDist,
    },
    generateThemeFileContent,
}
