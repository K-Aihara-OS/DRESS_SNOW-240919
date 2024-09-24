(function() {
    'use strict';

    /* 自動生成要素 */
    // 警告文
    const answer_options = document.querySelectorAll('.question__answer > ul');
    answer_options.forEach(option => {
        // .js-showNextクラスが含まれる場合は、無視
        if (!option.classList.contains('js-showNext')) {
            let attention = document.createElement('p');
            attention.setAttribute('class', 'js-attention');
            attention.textContent = ATTENTION_TXT;
            option.parentElement.appendChild(attention);
        }
    });

    // スクロールフェードイン（初回スクロール）
    const fadeIn_target = document.querySelector('.fadeIn_noIntersection');
    let hasScroll = false;

    window.addEventListener('scroll', ()=> {
        if (!hasScroll) {
            fadeIn_target.classList.add('is-visible');
            hasScroll = true;
        }
    });

    // スクロールフェードイン（交差監視）
    const targets = document.querySelectorAll('.fadeIn');
    const fadeIn_effect = function(entries, observer) {
        entries.forEach(entry => {
            // 監視に入った時の処理
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0 // 0～1
    }
    const observer = new IntersectionObserver(fadeIn_effect, options);
    targets.forEach(target => {
        observer.observe(target);
    });

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

            // buttonタグのみの場合の処理
            if (e.target.tagName === 'BUTTON') {
                // スタイル変更（buttonのみ。liは無視）
                e.target.classList.add('is-active');
                
                /* 同section内の選択肢の必須選択警告 */
                const thisAnswer = thisSect.querySelector('.question__answer');
                // .question__answerが存在する場合のみ、警告文の処理
                if (thisAnswer) {
                    const thisAttn = thisAnswer.querySelector('.js-attention');
                    
                    const thisOption = thisAnswer.querySelector('.question__answer > ul');
                    const thisOption_li = Array.from(thisOption.children);
                    let selected_len = 0;
                    
                    // 選択されている数を数える
                    thisOption_li.forEach(thisOpt => {
                        // ボタン形式かチェックボックス形式で分岐
                        if (thisOpt.parentElement.classList.contains('answer__checkboxes')) {
                            let thisCbo = thisOpt.querySelector('input[type="checkbox"]');
                            if (thisCbo.checked) {
                                selected_len++
                            }
                        } else {
                            if (thisOpt.classList.contains('is-active')) {
                                selected_len++;
                            }
                        }

                    });
    
                    // 選択が0だったら警告文を表示
                    if (selected_len < 1) {
                        thisAttn.classList.add('is-show');
                    } else {
                        thisAttn.classList.remove('is-show');
                        go_next(nextSect);
                    }

                } else {
                    go_next(nextSect);
                }
            } else {
                go_next(nextSect);
            }
            
        });
    });

    function go_next(nextSect) {
        // クリックされたボタンの次のsectionを表示
        nextSect.classList.add('is-show');

        // 自動スクロール
        const elementY = window.scrollY + nextSect.getBoundingClientRect().top;
        scrollTo({top: elementY, left:0, behavior: 'smooth'});

        // 遅延表示の要素を表示
        const delay_els = nextSect.querySelectorAll('.visible_delay');

        if (delay_els.length > 0) {
            delay_els.forEach(delay_el => {
                setTimeout(() => {
                    delay_el.classList.add('is-visible');
                }, 500);
            });
        }
    }

})();