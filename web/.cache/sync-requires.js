const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": hot(preferDefault(require("C:\\Sites\\idlehoursco\\animated-fortnight\\web\\src\\pages\\404.tsx"))),
  "component---src-pages-account-tsx": hot(preferDefault(require("C:\\Sites\\idlehoursco\\animated-fortnight\\web\\src\\pages\\account.tsx"))),
  "component---src-pages-cart-tsx": hot(preferDefault(require("C:\\Sites\\idlehoursco\\animated-fortnight\\web\\src\\pages\\cart.tsx"))),
  "component---src-pages-docs-tsx": hot(preferDefault(require("C:\\Sites\\idlehoursco\\animated-fortnight\\web\\src\\pages\\docs.tsx"))),
  "component---src-pages-previews-tsx": hot(preferDefault(require("C:\\Sites\\idlehoursco\\animated-fortnight\\web\\src\\pages\\previews.tsx"))),
  "component---src-templates-page-tsx": hot(preferDefault(require("C:\\Sites\\idlehoursco\\animated-fortnight\\web\\src\\templates\\page.tsx")))
}

