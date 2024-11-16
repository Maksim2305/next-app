export const API = {
  topPage: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    byAlias: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias',
  },
  product: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
  },
  preview: {
    createDemo: process.env.NEXT_PUBLIC_DOMAIN + '/api/preview/create-demo',
  },
};
