---
title: PainterWithSkinnedMesh
description: PainterWithSkinnedMeshの概要
---

## 始めに

このツールは簡易ペイントツールです。<br>

導入については[こちら](/Kuni_Tool/common/install/)をご覧ください。<br>

:::caution
Undo（ctrl+z）は使えないので必ずレイヤーを追加して塗ってください。<br>
:::

## 使い方

- Hierarchy から編集したいテクスチャが含まれるオブジェクト(SkinnedMeshRenderer)をセットしてください。<br>

![unity pws](../../../assets/images/unity-pws.png)

- Material の項目から編集したいテクスチャを選んでください。<br>

![unity pws material](../../../assets/images/unity-pws-mat.png)

- PenSize の項目からペンの太さを調整できます。<br>

![unity pws pen size](../../../assets/images/unity-pws-pensize.png)

- PenType の項目からペンの種類を変更できます。<br>

![unity pws pen type](../../../assets/images/unity-pws-pentype.png)

- Pen

標準的な塗りつぶしペンです。<br>

- Brush

ブラシペンです。<br>
ペンの中心から離れるほど透明になります。<br>

- Eraser

消しゴムです。<br>
ベタ消しします。<br>

- Pick

色を抽出します。<br>
全レイヤーの合成結果の色から取得します。<br>

- AlphaPen

色設定のアルファ値で元画像のアルファ値から引き算します。<br>
計算方法の違いなので基本は Pen と同じような塗り方と思ってください。<br>

- AlphaBrush

AlphaPen のブラシ版です。<br>

- Color の項目からペンの色を選択できます。<br>

![unity pws color](../../../assets/images/unity-pws-color.png)

テクスチャを切り替えるとデフォルトの黒に戻るので注意してください。<br>

- Add Layer のボタンでレイヤーを追加できます。<br>

![unity pws layer](../../../assets/images/unity-pws-layer.png)

レイヤーリストはツール下部に表示されます。<br>

左のチェックマークでレイヤーの表示非表示を切り替えます。<br>

右側の上下ボタンでレイヤーの上下移動ができます。<br>

レイヤーは下にいくほど画面は上に表示されます。<br>

一番右のチェックマークは選択中のレイヤーです。<br>

- Delete Layer ボタンは選択中のレイヤーを削除します。<br>

- Export Texture ボタンで表示中のレイヤーを合成してテクスチャを生成します。<br>

生成したテクスチャは元テクスチャの置いてあるフォルダに置かれてあります。<br>
