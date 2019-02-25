const path = require('path')

module.exports = {
    title: 'ZUI',
    description: 'Just playing around',
    base: '/wen-design/',
    themeConfig: {
        search: false,
        nav: [
            {text: 'Github', link: 'https://github.com/mysteryven/wen-design'},
        ],
        sidebar: [
            '/',
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件库',
                collapsable: false,
                children: [
                    '/components/button/'
                ]
            }
        ]
    },
    scss:{
        includePaths: [path.join(__dirname, '../../styles')]
    }
}
