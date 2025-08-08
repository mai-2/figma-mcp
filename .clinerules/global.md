このファイルが読み込まれたら必ず「global.mdを読み込みました！」と作業着手前にユーザーに伝えてください。

## チャットのルール

- 常に日本語で返答してください。

## ディレクトリ階層

/components # HTMLコンポーネント格納用
/sass
  /global # 変数、ミキシン、関数
  /base # リセットCSS、基本スタイル
  /components # コンポーネント別Sassファイル
  /page # ページ固有のスタイル
  /style.scss # コンパイル用のSassファイル
/css # sass/style.scssのコンパイル後のファイルを格納する用
/js # JavaScriptのファイル格納用
/img # 画像格納用
/index.html # LP表示用のページ

## コーディング依頼時のルール

「コンポーネントを実装してください」と依頼を受けた時のルールです。

1. HTMLは /components/[コンポーネント名].html に作成。_base.htmlを参考にheadも含めて作成してください。
2. SCSSは /sass/components/_[コンポーネント名].scss に作成してください。コンポーネントのdisplayは基本的にはinlineでお願いします。例）inline-block,inline-flex
3. 共通変数とミキシンを活用してください。sass/components/_base.scssを参考にglobalをインポートしてください。
4. BEM命名規則に従ってください。
5. sass/components.scssでインポートしてください。

### セクションの作成を依頼した時のルール

「セクションを実装してください」と依頼を受けた時のルールです。

1. HTMLはindex.htmlに作成してください。componentsで使い回しできるコンポーネントがあれば活用してください。
2. SCSSは /sass/page/_index.scss に作成してください。
3. 共通変数とミキシンを活用してください。ページの先頭でglobalをインポートしてください。
4. コンポーネントを活用する際は、ページの先頭で必要なコンポーネントだけインポートしてください。
5. BEM命名規則に従ってください。
6. pageの各ファイルはsass/style.scssでインポートしてください。
