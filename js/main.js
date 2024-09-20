(function() {
    'use strict';

    // 選択肢クリック時の処理
    const options_uls = document.querySelectorAll('ul.answer__options');

    options_uls.forEach(options_ul => {
        options_ul.addEventListener('click', (e)=> {
            // クリック対象がulであれば無視
            if (e.target === e.currentTarget) {return false;}

            // 親ulのクラス
            const parentClass = e.currentTarget.classList;

            // 子要素(span等)がクリック対象の場合は親liをターゲットに設定
            const target_li = (()=>{
                if (e.target.tagName !== 'LI') {
                    return e.target.closest('li');
                } else {
                    return e.target;
                }
            })();
            
            // 単一選択
            if (parentClass.contains('js-single')) {
                const current_lis = Array.from(e.currentTarget.children);

                current_lis.forEach(current_li => {
                    current_li.classList.remove('is-active');
                });
            }

            // スタイル変更
            change_options_style(target_li);

        });
    });

    function change_options_style(target_li) {
        target_li.classList.toggle('is-active');
    }

    // 次へ進むボタンクリック時の処理
    const nextBtns = document.querySelectorAll('.js-showNext');
    
    nextBtns.forEach(nextBtn => {
        nextBtn.addEventListener('click', (e)=> {
            const thisSect = e.target.closest('section');
            const nextSect = thisSect.nextElementSibling;
            
            // クリックされたボタンの次のsectionを表示
            nextSect.classList.add('is-show');
        });
    });

})();