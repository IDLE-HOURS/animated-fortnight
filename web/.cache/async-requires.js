// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-tsx": () => import("./../../../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-account-tsx": () => import("./../../../src/pages/account.tsx" /* webpackChunkName: "component---src-pages-account-tsx" */),
  "component---src-pages-cart-tsx": () => import("./../../../src/pages/cart.tsx" /* webpackChunkName: "component---src-pages-cart-tsx" */),
  "component---src-pages-docs-tsx": () => import("./../../../src/pages/docs.tsx" /* webpackChunkName: "component---src-pages-docs-tsx" */),
  "component---src-pages-previews-tsx": () => import("./../../../src/pages/previews.tsx" /* webpackChunkName: "component---src-pages-previews-tsx" */),
  "component---src-templates-page-tsx": () => import("./../../../src/templates/page.tsx" /* webpackChunkName: "component---src-templates-page-tsx" */)
}

