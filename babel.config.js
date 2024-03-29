module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        style: true, //为true，使用antd组件的less样式文件，为css使用antd组件的css文件
      },
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
  ],
};
