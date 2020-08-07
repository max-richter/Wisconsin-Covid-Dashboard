//The `FusionCharts.register()` API is used to register the new theme in the FusionCharts core.

window.FusionCharts.register('theme', {
    name: 'wistheme',
    theme: {
        base: {
            chart: {
                Caption: 'Wisconsin Cases by County !important', //The !important directive is used to ensure that the subcaption cannot be overriden in the theme definition or in the chart data.
                captionFontSize: '18',
                captionFontBold: '1',
                captionFontColor: '#bbbbbb',
                showHoverEffect: '1',
                bgColor: '#202a3b',
                captionFont: 'Montserrat',
                showCanvasBorder: '0',
                paletteColors: '#f'
            },
            geo: {
                chart: {
                    captionFontSize: '20'
                }
            }
        }
    }
});

