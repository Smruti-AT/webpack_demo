import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  experiments: {
    outputModule: true
  },
  entry: './index.js', 
  output: {
    filename: 'sdk.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: "module"
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
            {
              loader:'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
        ]
      },
     ]
    },
  mode: 'development',
};
