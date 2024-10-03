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
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476199/e3670db3-f708-40a6-be05-6698d3e60a7b.jpg'
        },
        {
            'name': 'enqInfo',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476201/6dd351f1-8930-48f4-b79f-2291f2e78ae8.png'
        },
        {
            'name': 'q1_question',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476203/e7e533d7-52bb-4565-b9f4-3b2ae5e87c3d.png'
        },
        {
            'name': 'q1_column',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4494182/8087e9d9-4a30-4b19-86e1-dc3c714bc7ad.png'
        },
        {
            'name': 'q2_question',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476206/88ddf1ef-ceac-4b25-aa7d-ba31a04d19fa.png'
        },
        {
            'name': 'check1_title',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476207/faa4407c-ba74-4210-8173-98fb6b552791.png'
        },
        {
            'name': 'check1_vid',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476227/aac25e19-4895-4c58-900e-9ccf6bef93d5.mp4'
        },
        {
            'name': 'check2_title',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476210/4d450589-f247-43c7-900a-055660ce50d7.png'
        },
        {
            'name': 'check2_contents',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476208/82ab6d64-ef64-4cc8-b3df-3fa31c4dfc47.jpg'
        },
        {
            'name': 'check2_img',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4494183/89f50516-3fee-4dac-b014-200aeebd8716.png'
        },
        {
            'name': 'q3_column1_title',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476213/06890c58-5daa-450c-beb9-8e35ac37ce2a.png'
        },
        {
            'name': 'q3_column1_contents',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476267/bf78ec08-1609-4f9f-baf0-38643dcf46dc.mp4'
        },
        {
            'name': 'q3_column2_title',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476214/a79a822d-470b-46cc-a3f9-30e048ac1310.png'
        },
        {
            'name': 'q3_column2_contents',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476268/f035b834-59d5-4126-85e0-94ee2a26fb55.mp4'
        },
        {
            'name': 'q3_question',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476215/96d77a94-3588-453c-95f0-a70a9c087d96.png'
        },
        {
            'name': 'q4_question_1',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476217/dfc98cfc-5a24-4f84-8a4e-25cdee315b1e.png'
        },
        {
            'name': 'q4_question_2',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476218/fe41aaed-d2b8-4865-978c-285857a1e53e.jpg'
        },
        {
            'name': 'cta_thanks',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476220/e06e5b36-8fd0-46f4-ac10-1842955c243a.png'
        },
        {
            'name': 'cta_offer',
            'src': 'https://file.mysquadbeyond.com/uploads/article_photo/photo/4476223/bfe3aee8-73d2-43fa-b038-1111340d5554.jpg'
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