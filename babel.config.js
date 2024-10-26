module.exports = {
    presets: [
        'react-app'
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@components': './src/components',
                    '@utils': './src/utils',
                    '@assets': './src/assets',
                }
            }
        ]
    ]
};