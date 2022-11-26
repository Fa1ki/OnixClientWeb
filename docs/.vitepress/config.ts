export default {
    base: '/OnixClientWeb/',
    title: 'Onix Client',
    themeConfig: {
        logo: '/Logo.png',
        // siteTitle: false,
        footer: {
            message: '',
            copyright: 'Copyright © 2022 Onix Client'
        },
        localeLinks: {
            text: 'English',
            items: [
              { text: 'German', link: '/' }
            ]
        },
        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/onixclient' }
        ],
        nav: [
            { text: 'Patreon', link: 'https://www.patreon.com/onixclient' },
            { text: 'FAQ', link: '/faq/', activeMatch: '/faq/' },
            { text: 'Scripting', link: '/scripting/', activeMatch: '/scripting/' },
            { text: 'About', link: '/about/', activeMatch: '/about/'},
        ],
        sidebar: [
            {
                text: 'Libaries',
                items: [
                    { text: 'client.setting', link: '/' },
                    { text: 'player', link: '/' },
                    { text: 'network', link: '/' },
                    { text: 'event', link: '/' },
                    { text: 'client', link: '/' },
                    { text: 'gui', link: '/' },
                    { text: 'fs', link: '/' },
                    { text: 'gfx', link: '/' },
                    { text: 'server', link: '/' },
                    { text: 'gfx2', link: '/' },
                    { text: 'dimension', link: '/' }
                ],
            },
            {
                text: 'Classes',
                items: [
                    { text: 'Font', link: '/' },
                    { text: 'iColor', link: '/' },
                    { text: 'Inventory', link: '/' },
                    { text: 'Item', link: '/' },
                    { text: 'Effect', link: '/' },
                    { text: 'AttributeListHolder', link: '/' },
                    { text: 'SelectedEntetyInfo', link: '/' },
                    { text: 'Biome', link: '/' },
                    { text: 'Theme', link: '/' },
                    { text: 'Waypoint', link: '/' },
                    { text: 'InventoryAmor', link: '/' },
                    { text: 'BinaryFile', link: '/' },
                    { text: 'Gfx2Texture', link: '/' },
                    { text: 'Attribute', link: '/' },
                    { text: 'Skin', link: '/' },
                    { text: 'ScriptingModule', link: '/' },
                    { text: 'RaycastInfo', link: '/' },
                    { text: 'Waypoints', link: '/' },
                    { text: 'Vector2', link: '/' },
                    { text: 'ColorSetting', link: '/' },
                    { text: 'VisualModule', link: '/' },
                    { text: 'Setting', link: '/' },
                    { text: 'Module', link: '/' },
                    { text: 'Enchants', link: '/' },
                    { text: 'LightPair', link: '/' },
                    { text: 'Stats', link: '/' },
                    { text: 'Block', link: '/' }
                ],
            },
            {
                text: 'Globals',
                items: [
                    { text: 'Globals', link: '/' }
                ]
            }
        ]
    }
}
