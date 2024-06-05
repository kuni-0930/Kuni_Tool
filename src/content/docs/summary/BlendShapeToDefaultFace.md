---
title: BlendshapeToDefaultFace
description: BlendshapeToDefaultFaceの概要
---

:::caution
このツールはご利用前に注意事項をよく読んでください。
:::

## 使い方

Hierarchy からデフォルトにしたい BlendShape があるオブジェクトをセットしてください。
Inspector 上での BlendShape の値をデフォルトにします。
Start ボタンを押すと処理が実行されます。

![unity vroid](../../../assets/images/unity-vroid.png)
上画像の VRoid アバターでのサンプルは[Fcl_EYE_Joy][Fcl_MTH_Down][Fcl_MTH_SkinFung]をデフォルトの顔にしようとしている図です。
(一部のアバターでは顔と身体のメッシュが同じの場合があり、変換をすると身体の変更もデフォルトにしてしまいます。
その場合のデフォルト変換する時は身体の BlendShape は全て 0 にしておいた方が良いと思います。)

## 注意事項

このツールはセットされている BlendShape をデフォルトにすると共に、**全 BlendShape に差分を取ります**。

例えば「Joy(楽しい目)」をデフォルトにした場合、元の「まばたき」をした時にメッシュが破綻してしまいます。
![unity vroid dif](../../../assets/images/unity-vroid-blink-dif.png)

これを防ぐ為に「Joy」をデフォルトにした場合は「まばたき」の BlendShape を編集して「Joy」分をマイナスします。
`code`

```言語名

```

'''
デフォルト顔　＋　まばたき　＝　正規まばたき
デフォルト顔　＋　 Joy 　＋　まばたき　＝　破綻まばたき
デフォルト顔（＋ Joy）　＋　まばたき（ー Joy）　＝　正規まばたき
'''
