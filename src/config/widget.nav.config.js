/*
 * @Author: hejp
 * @Date:   14:13
 * @Last Modified by:   hejp
 * @Last Modified time: 14:13
 */
// 所有组件菜单列表
const WIDGETNAV = [
    {
        checked: false,
        name: '图表',
        icon: '&#xe708;',
        data: [
            {
                type: 'line',
                name: '折线图',
                image: 'http://widget.daqsoft.com/widget/widgets-files/20190904215932-1521/1AS6Z33794504//images/thumbnail.png',
                component: 'PhoneLine',
                api: '',
                mock: {},
                config: {}
            }
        ]
    },
    {
        checked: false,
        name: '表格',
        icon: '&#xe609;',
        data: [
            {
                type: 'table',
                name: '表格',
                image: 'http://widget.daqsoft.com/widget/widgets-files/20190904215932-1521/1AS6Z33794504//images/thumbnail.png',
                component: 'PhoneLine',
                api: '',
                mock: {},
                config: {}
            }
        ]
    },
    {
        checked: false,
        name: '区域',
        icon: '&#xe604;',
        data: [
            {
                type: 'blocks',
                name: '区域',
                image: 'http://widget.daqsoft.com/widget/widgets-files/20190904215932-1521/1AS6Z33794504//images/thumbnail.png',
                component: 'PhoneLine',
                api: '',
                mock: {},
                config: {}
            }
        ]
    }
]
export default WIDGETNAV
