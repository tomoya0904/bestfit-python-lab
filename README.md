# 情報Ⅰ Python LAB：修正版（2026-10）

## まず Windows で試す方法

1. このZIPを右クリックして「すべて展開」してください。**ZIPの中のindex.htmlを直接開かない**でください。
2. 展開したフォルダの中の **`Windowsでプレビュー開始.bat`** をダブルクリックします。
3. PowerShellのウィンドウが開き、ブラウザで `http://127.0.0.1:8765/index.html` が表示されます。ウィンドウは開いたままにしてください。
4. 変数・条件分岐・繰り返しなどのカードを選び、Pythonの実行を試します。
5. 終了時はPowerShellウィンドウを閉じます。

Windows側のポリシーでPowerShellの起動やスクリプトが制限されている場合は、この方法は使えないことがあります。その場合はGitHub Pagesへの公開を行うか、PythonがインストールされているPCで同じフォルダ内で `python -m http.server 8765` を実行してください。

## 今回の修正

- `.html` 各ファイルにCSSとサイトの問題・画面用JavaScriptを内蔵しました。ZIP内でHTMLだけ開いても**見た目や問題一覧が欠けにくい**構成です（ただし、ZIPの中から他のページへ正常に移動できる保証はありません）。
- `file://` のページでは、Pythonの実行がWebサーバを必要とすることを画面に表示します。
- Windowsの標準PowerShellだけで動く、**PC内限定**の簡易Webサーバ起動ファイルを同梱しました。学内PCの設定によっては実行が制限される場合があります。
- 7分野36問・各分野を別ページにする構成は変えていません。

## GitHub Pagesへの公開

展開した**フォルダ内の `.html` などのファイルすべてを**新規GitHubリポジトリのルートにアップロードして、`Settings > Pages > Deploy from a branch > main > /(root)` を有効化してください。生徒には公開されたHTTPS URLを配布します。

## Pythonの実行について

- PythonはPyodide（https://pyodide.org）を使って**生徒のブラウザで実行**します。初回は `cdn.jsdelivr.net` からPython本体を読み込むためインターネット接続が必要です。
- `file://`で直接開くとWeb Workerが制限されるため、**HTTP/HTTPS環境（付属のローカルサーバ、GitHub Pagesなど）で実行**してください。
- 5秒を超える実行は停止します。学校のフィルタや低メモリ端末ではPythonが起動しないことがあります。
- 学習の進捗や編集したコードはその端末のブラウザに保存されます。生徒の解答は自動的に教師へ送信されません。

## 重要なファイル

- `index.html`：トップページ
- `basic.html`、`branch.html`、`loop.html`、`array.html`、`matrix.html`、`function.html`、`integrated.html`：分野別ページ
- `python-worker.mjs`：Python実行用（Webサーバから読み込み）
- `Windowsでプレビュー開始.bat`、`start-local-server.ps1`：Windowsでローカルプレビュー
- `styles.css`、`lessons.js`、`app.js`：元の編集用ファイル（HTML内にもコピーして内蔵）
