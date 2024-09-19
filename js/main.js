(function() {
    'use strict';

    // 選択肢クリック時の処理
    const options_uls = document.querySelectorAll('ul.answer__options');

    options_uls.forEach(options_ul => {
        options_ul.addEventListener('click', (e)=> {
            // クリック対象がulであれば無視
            if (e.target === e.currentTarget) {return false;}

            // 子要素(span等)がクリック対象の場合は親liをターゲットに設定
            const target_li = (()=>{
                if (e.target.tagName !== 'LI') {
                    return e.target.closest('li');
                } else {
                    return e.target;
                }
            })();
            // スタイル変更
            change_options_style(target_li);
        });
    });

    function change_options_style(target_li) {
        target_li.classList.toggle('is-active');
    }
})();