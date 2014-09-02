module.exports = {
    strict: {
        options: {
            'box-sizing': false
        },
        src: ['dist/styles/*.css']
    },
    lax: {
        options: {
            'box-sizing': false, // normalize.css
            'unqualified-attributes': false, // normalize.css
            'outline-none': false, // normalize.css
            'compatible-vendor-prefixes': false  // normalize.css
        },
        src: ['dist/styles/*.css']
    }
};
