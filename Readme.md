# PWA Push通知サーバサンプル

## 使い方

以下のようにセットアップを行う
```
npm install

# vapid-keys.jsonというファイルが生成される
# 上記jsonに含まれるpublicKeyが、ブラウザに引き渡す公開鍵である
npm run generate-keys

# ブラウザに公開鍵を渡して、サブスクリプションを登録する
# 登録に成功したら、ブラウザ側のサブスクリプションの内容をメモする

# ブラウザ側のサブスクリプションの内容を「pushSubscription」にセットする
vi app.js
```

上記手順完了後、以下コマンドでブラウザにPush通知ができる

```
npm start
```
