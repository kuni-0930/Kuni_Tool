---
title: MarsRecal
description: MarsRecall(火星のあれ)の概要
---

## 始めに

このツールはVRChatにてアバターを変形させて遊ぶためのツールです。<br>

ツールを通すだけで基本的な変形動作を行います。<br>

ご使用のアバターによって見え方に差異がある為、より良い見た目にする為にはご自身で調整をお願い致します。<br>

仕様上、顔周辺で掴み動作が必要なのですが、アバターによって髪の毛に掴み判定が吸われて反応しづらい事があります。<br>
顔の位置を中心に顔より大きい丸型の判定コライダーがあるので、<br>
顔の正面で掴んでみる等いろいろな位置で試してみてそのアバターでのやり方を見付けてください。<br>

## 導入・使い方

1.UnityでVRCAvatarのプロジェクトを作成してください。<br>

:::caution
ModularAvatarが必須なのでインポートしておいてください。<br>
:::

2.「MarsRecall_KuniTool.unitypackage」をUnityにインポートしてください。<br>

3.使いたいアバターをインポートしてHierarchyに配置してください。<br>

4.Unity上部のKuni_Toolから「MarsRecall」を選択してください。<br>

5.出てきたウィンドウにて、「Avatar Object」の項目に**Hierarchyから**アバターをドラッグ＆ドロップでセットしてください。<br>

6.「作成」ボタンで変形用prefabを生成し、対象アバターにセットします。<br>

**#別のアバターにセットしたい場合**

7.Kuni_toolから「MarsRecall_PrefabInstaller」を選択してください。<br>

8.「Avatar Object」に設置したいアバターを**Hierarchyから**セットしてください。<br>

9.「MarsRecall Prefab」に(6)で作ったprefabを**projectウィンドウから**ドラッグ＆ドロップしてください。<br>

prefabはprojectウィンドウのAssets/KuniTool/Outputにあるはずです。<br>

10.「Avatarへ設置」ボタンをクリック。<br>

:::caution
プレハブ設置時に対応処理が必要なので必ずMarsRecall_PrefabInstallerで設置するようにしてください。<br>
:::

## 仕様

・Grab(掴み動作)の仕様<br>
初期状態から顔付近でコントローラーでgrab動作をするとprefabの顔が開き始めます。<br>
顔が開いた後、2回目のgrabで顔を掴むと開いた顔が閉じます。<br>
2回目のgrabは握っていると**右手に**追従します。<br>
2回目のgrabを離すと顔が爆発します。<br>
元に戻すにはサークルメニューのアバターリセットをしてください。<br>

1回目のgrabはトリガーから指定秒数後に開き始めます(初期設定5秒)。<br>
2回目のgrabから1秒後に顔が閉じ始めます。<br>
2回目のgrabを離してから指定秒数後に爆発します(初期設定5秒)。<br>

アバター->MarsRecallプレハブ->Armature/・・・/HeadボーンにMarsRecallGrabPhysBoneというオブジェクトを追加し、<br>
Physboneのコライダーでgrab判定を取得しています。<br>

・メッシュカットの仕様<br>
メッシュを複製し、Neckボーンより上にV字でカットします。<br>
対象はSkinnedMeshRendererとMeshRendererです。<br>
V字より下のメッシュを削除します。<br>
Headボーンについている髪等、Neck以降のボーンについているメッシュは残します。<br>
頭についているパーティクル等も残します。<br>
MeshRendererはスライスBlendShapeを作る為にSkinnedMeshRendererに変換します。<br>
対象メッシュはY軸で0.5刻みにスライスするBlendShapeを生成します。<br>

・アニメーションの仕様<br>
アバター->MarsRecallプレハブにてMAMergeAnimatorでパスモード「相対的」でアニメーターをマージしています。<br>
アニメーターの動作パラメーターについてはUnityで現物をご確認ください。<br>

・設置されるアバターの頭を初期状態で隠しておくためのギミック<br>
設置されるアバターは初期状態で頭のボーンのサイズが0.5になっており、<br>
1回目のgrabトリガーで2秒かけて標準のサイズに戻ります。<br>
アバター->MarsRecallプレハブ->Controls->HeadScaleControlにてVRCScaleConstraintで、<br>
TargetのボーンをSourceのサイズに追従させるギミックになります。<br>

・追従(ワールド固定)ギミック
初期状態ではプレハブのArmatureの中のChest、Neck、Head、RightHandにVRCParentConstraintをつけて設置するアバターのボーンに追従させています。<br>
Chestの親であるDummyHeadPositionはVRCParentConstraintでプレハブ->Positions->WorldPositionに追従します。<br>
WorldPositionは右手や頭への追従を切り替え、2回目のgrabを離した時にコンストレイントをオフにしてワールド固定となります。<br>


