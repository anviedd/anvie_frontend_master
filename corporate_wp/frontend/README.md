# Project Name

## Folders

| folder name | purpose |
| --- | --- |
| build | `npm run build` を実行すると書き出される。<br>主に納品・公開用のファイルとして扱う。 |
| dst | `npm start` を実行すると書き出される。<br>開発時にローカルサーバーから参照するファイル。 |
| src | 開発に使用するファイル。 |

## Command

| command name | purpose |
| --- | --- |
| `npm start` | 開発時に実行するコマンド。<br>[Brosersync](https://github.com/browsersync/browser-sync)によってローカルサーバーが起動し、開発用ファイルの更新を監視する。 |
| `npm run build` | 納品・公開用のファイルを生成するコマンド。 |