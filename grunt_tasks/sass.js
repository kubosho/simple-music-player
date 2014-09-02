module.exports = {
    development: {
        options: {
            style: 'expanded'
        },
        files: {
            'dist/styles/main.dev.css': 'styles/main.scss'
        }
    },
    production: {
        options: {
            style: 'compressed'
        },
        files: {
            'dist/styles/main.css': 'styles/main.scss'
        }
    }
};
