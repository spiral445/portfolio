// おみくじプログラム
$(function () {

  $('input[type="button"]').click(function () {

    var result = [
      '「ここ本物じゃないの？？」' + '<br>' +'ラッキーアイテム/魔除け',
      '「泣くほど怖い」' + '<br>' +'ラッキーアイテム/ティッシュとタオル',
      '「恐怖で大絶叫」' + '<br>' +'ラッキーアイテム/のど飴',
      '「腰が抜ける」' + '<br>' +'ラッキーアイテム/体力のある友人',
      '「怖過ぎて喧嘩」' + '<br>' +'ラッキーアイテム/二人の思い出の品'];
    var rand = Math.floor(Math.random() * 5);
    $('span').html(result[rand]);

  });

});