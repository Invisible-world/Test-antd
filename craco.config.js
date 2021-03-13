import CracoLessPlugin from 'craco-less';

export const plugins = [
    {
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: { '@primary-color': '#00A34B' },
                    javascriptEnabled: true,
                },
            },
        },
    },
];