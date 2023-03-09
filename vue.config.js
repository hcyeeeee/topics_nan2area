// vue.config.js
const Version = new Date().getTime();
const path = require("path");
module.exports = {
  publicPath: "./", // 預設為/ 所有html下的js css 連結都會是/js/xx,在輸出到web server 路徑會有問題,需用./
  outputDir: "Nan2area", // 輸出路徑
  assetsDir: "./", // 要輸出的asset目錄,設定hello,則會輸出成 hello/js/xxx,
  devServer: {
    port: 1991,
    open: true,
  },

  chainWebpack: (config) => {
    // 加入版號
    if (process.env.NODE_ENV === "production") {
      // 给js和css配置版本號
      config.output.filename("js/[name]." + Version + ".js").end();
      config.output.chunkFilename("js/[name]." + Version + ".js").end();
      config.plugin("extract-css").tap(() => [
        {
          filename: `css/[name].${Version}.css`,
          chunkFilename: `css/[name].${Version}.css`,
        },
      ]);
    }

    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("js-yaml-loader")
      .loader("js-yaml-loader")
      .end();
    config.resolve.alias.set("@@", path.resolve(__dirname)); // @@ 代替根目錄
    config.plugin("html").tap((args) => {
      args[0].title =
        "【2023立委補選】決戰南投第2選區！即時新聞、選情戰況專區 - 民視數位專題";
      console.log(args[0]);
      return args;
    });
  },
};
