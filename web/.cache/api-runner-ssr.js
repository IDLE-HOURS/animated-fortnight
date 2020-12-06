var plugins = [{
      plugin: require('C:/Sites/idlehoursco/animated-fortnight/web/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Sites/idlehoursco/animated-fortnight/web/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"midway","short_name":"midway","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon/apple-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"6a7d1b1e98fea03b2de4ea155540f8fc"},
    },{
      plugin: require('C:/Sites/idlehoursco/animated-fortnight/web/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"layout":"C:\\Sites\\idlehoursco\\animated-fortnight\\web\\src\\layouts\\index.tsx"},
    },{
      plugin: require('C:/Sites/idlehoursco/animated-fortnight/web/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"k924jh0b","dataset":"production","token":"skjPoOnJzSjzvBxMy5f4oscPrKGfSaAPMSrqwzMW3nM1lpOUNH2QblBRTzoRLVpIsICRD5YcTS39dwMaB4KfXTI6J9eHtSsBZKrAskU4Y0R5XuAKfmGYXvea6BoBS8c1yathhLeAXCLA9O08E1eyGeZNbJIdUxO9TLa05ZgBED9h3O3HcLch","watchMode":true},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
