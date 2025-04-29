変更ファイルの確認
```
git status
```
変更をステージングに上げる
```
git add ファイルパス
```
ローカルの変更を取り消す
```
git restore ファイルパス
```
変更をコミットする
```
git commit -m"コミットメッセージ"
```
コミットを取り消す（ステージング状態となる）
```
git reset --soft HEAD^
```
リモートブランチの変更を取り消す（元に戻す）
```
git revert "コミットハッシュ"
```
リモートブランチにpushする
```
git push origin ブランチ名
```
リモートブランチをpullする
```
git pull origin ブランチ名
```


コンフリクト1
