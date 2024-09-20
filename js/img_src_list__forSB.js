/*--------------------------------------------
★SquadBeyondの自動Lazyloadへの対応★

ページ読み込み時にdisplay:noneになっている画像を、
イベントで表示する際に表示できないため、
HTML上にソースを書かないことで対策。
--------------------------------------------*/

/* ###########################################
▼ 概要
HTML上のimgタグと、本JSファイル上の情報を紐づけることで、
imgタグのsrcで画像ソースを指定することと同じ状態になる。

▼ 使い方

1) HTML上のimgタグを設定する
　imgタグにカスタムデータ属性「data-img」を追加し、
　その値に任意の文字を入れる。
2) 本JSファイルの「▼ 設定入力 ▼」欄に、データを設定する
　キー'name'の値に、1)で設定した値と同一の値を入力する。
3) 画像のソースを設定する
　キー'src'の値に、画像のソースを入力する。
########################################### */

/* ===========================================
▼ 設定入力 ▼
=========================================== */
(function() {
    'use strict';
    
    // 画像ソースリスト
    const IMG_LIST = [
        /* =========================
        ----------------------------
        ▼ 書き方の例
        ----------------------------
        {
            'name': 'hero',
            'src': 'img/01_img.jpg'
        },
        ----------------------------
        ▼ プロパティのテンプレート
        ----------------------------
        {
            'name': '',
            'src': ''
        },
        ========================= */
        {
            'name': 'hero',
            'src': 'img/01_fv-01_hero.jpg'
        },
        {
            'name': 'enqInfo',
            'src': 'img/01_fv-02_enqInfo.png'
        },
        {
            'name': 'q1_question',
            'src': 'img/02_q1-01_question.png'
        },
        {
            'name': 'q1_column',
            'src': 'img/03_q1-02_q1Column.png'
        },
        {
            'name': 'q2_question',
            'src': 'img/03_q2-02_question.png'
        },
        {
            'name': 'check1_title',
            'src': 'img/04_check1-02_check.png'
        },
        {
            'name': 'check1_vid',
            'src': 'img/04_check1-01_vid.mp4'
        },
        {
            'name': 'check2_title',
            'src': 'img/05_check2-02_check.png'
        },
        {
            'name': 'check2_contents',
            'src': 'img/05_check2-01_column.jpg'
        },
        {
            'name': 'check2_img',
            'src': 'img/05_check2-03_illustration.png'
        },
        {
            'name': 'q3_column1_title',
            'src': 'img/06_q3-01_strategy_title-1.png'
        },
        {
            'name': 'q3_column1_contents',
            'src': 'img/06_q3-02_strategy_vid-1.mp4'
        },
        {
            'name': 'q3_column2_title',
            'src': 'img/06_q3-03_strategy_title-2.png'
        },
        {
            'name': 'q3_column2_contents',
            'src': 'img/06_q3-04_strategy_vid-2.mp4'
        },
        {
            'name': 'q3_question',
            'src': 'img/06_q3-05_question.png'
        },
        {
            'name': 'q4_question_1',
            'src': 'img/07_q4-01_question_upper.png'
        },
        {
            'name': 'q4_question_2',
            'src': 'img/07_q4-02_question_lower.jpg'
        },
        {
            'name': 'cta_thanks',
            'src': 'img/08_cta-01_thanks.png'
        },
        {
            'name': 'cta_offer',
            'src': 'img/08_cta-02_offer.jpg'
        },
        {
            'name': 'btn_cv',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4190509/452a5ef5-8962-4394-9ac2-c70e28da73fe.png'
        },
    ];
/* ===========================================
▲ 設定入力 ▲
=========================================== */

/* ===========================================
▼ 処理コード ▼
=========================================== */
    // 画像ソース置換処理
    const allImgs = Array.from(document.querySelectorAll('IMG, VIDEO'));

    allImgs.forEach(img => {
        if (img.hasAttribute('data-img')) {
            const dataVal = img.dataset.img;
            const matchItem = IMG_LIST.find(obj => obj.name == dataVal);
            img.setAttribute('src', matchItem.src);
        }
    });
/* ===========================================
▲ 処理コード ▲
=========================================== */

})();