// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {

    // すべての画像カード要素を取得
    const cards = document.querySelectorAll('.card');
    
    // コピー通知用の要素を取得
    const notification = document.getElementById('copy-notification');

    // 各カードにクリックイベントを設定
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // カード内のimg要素を取得
            const img = card.querySelector('img');
            // img要素のsrc属性（画像のURL）を取得
            const imageUrl = img.src;

            // クリップボードに画像のURLをコピー
            navigator.clipboard.writeText(imageUrl).then(() => {
                // コピー成功時の処理
                showNotification();
            }).catch(err => {
                // コピー失敗時の処理
                console.error('URLのコピーに失敗しました', err);
                alert('URLのコピーに失敗しました。');
            });
        });
    });

    // 通知を表示する関数
    function showNotification() {
        // 'show'クラスを追加して通知を表示
        notification.classList.add('show');

        // 2秒後に'show'クラスを削除して通知を非表示にする
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
});