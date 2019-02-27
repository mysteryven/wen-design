const path = require('path')

module.exports = {
    title: 'ZUI',
    logo: '/logo.jpg',
    description: 'Just playing around',
    base: '/wen-design/',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/png", href: `/favicon.png` }]
    ],
    themeConfig: {
        search: false,
        nav: [
            {text: 'Github', link: 'https://github.com/mysteryven/wen-design'},
        ],
        sidebar: [
            {
                title: '前言',
                children: [
                    '/'
                ]
            },
            {
                title: '入门',
                collapsable: true,
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '通用',
                collapsable: false,
                children: [
                    '/components/icon/',
                    '/components/button/',
                ]
            },
            {
                title: '布局',
                collapsable: false,
                children: [
                    '/components/grid/',
                    '/components/layout/'
                ]
            }, {
                title: '导航',
                collapsable: false,
                children: [
                    '/components/button/button-group.md',
                    '/components/menu/',
                    '/components/tab/'
                ]
            }, {
                title: '数据录入',
                collapsable: false,
                children: [
                    '/components/button/button-select.md',
                    '/components/cascader/'
                ]
            },
            {
                title: '数据展示',
                collapsable: false,
                children: [
                    '/components/carousel/',
                    '/components/collapse/',
                    '/components/table/',
                    'components/popover/'
                ]
            },
            {
                title: '反馈',
                collapsable: false,
                children: [
                    '/components/message/'
                ]
            }

        ]
    },
    scss:{
        includePaths: [path.join(__dirname, '../../styles')]
    }
}
