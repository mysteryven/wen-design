module.exports = {
    base: '/ui-wheels/',
    title: 'ZUI',
    description: '专为 Vue 的 UI 框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: 'github', link: 'https://github.com/mysteryven/ui-wheels'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/button/',
                ]
            },
        ]
    }
}
