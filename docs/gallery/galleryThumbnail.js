window.onload = function () {
    // var scrollPosition;
    $('.js-modal-open').each(function () {
        $(this).on('click', function () {
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            // ArtistPage(_data[target]);
            // メモ
            // https://imasashi.net/modal-window_bg-fixed.html
            $(modal).fadeIn();
            // モーダルウィンドウスクロール位置リセット
            $('.modal-content').scrollTop(0);
            return false;
        });
    });

    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });
}

//データオブジェクト
let _data = {
    shows: [
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-s1.jpg",
            description: "JINEN　個展",//画像の説明、展示の名前
            caption: "JINEN gallery",
            tag: "show1",
            m_image: "./imgs/shows/2020/20-s1.jpg",
            m_title: "JINEN gallery | 2020",//モーダルで右端に出る文字
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2020/t-s2.jpg",
            description: "MAKII MASARU FINE ARTS展示風景_2 ",
            caption: "MAKII MASARU FINE ARTS",
            tag: "show2",
            m_image: "./imgs/shows/2020/20-s4.jpg",
            m_title: "MAKII MASARU FINE ARTS | 2020",
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2020/t-s3.jpg",
            description: "ヨロコビto個展展示風景",
            caption: "ヨロコビto個展",
            tag: "show3",
            m_image: "./imgs/shows/2020/20-s5.jpg",
            m_title: "ヨロコビto個展 | 2020",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-s1.jpg",
            description: "藝祭 geisai",
            caption: "藝祭 geisai",
            tag: "show4",
            m_image: "./imgs/shows/2019/19-s1.jpg",
            m_title: "藝祭 | geisai | 2019",
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2019/t-s2.jpg",
            description: "二人展　hutariten",
            caption: "二人展 | hutariten",
            tag: "show5",
            m_image: "./imgs/shows/2019/19-s4.jpg",
            m_title: "二人展 | hutariten | 2019",
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2019/t-s3.jpg",
            description: "卒展内部",
            caption: "卒業制作学内展",
            tag: "show6",
            m_image: "./imgs/shows/2019/19-s6.jpg",
            m_title: "東京芸術大学油画専攻卒業制作学内展 | 2019",
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2019/t-s4.jpg",
            description: "ヨロコビto個展展示風景",
            caption: "卒業制作展",
            tag: "show7",
            m_image: "./imgs/shows/2019/19-s7.jpg",
            m_title: "東京芸術大学油画専攻卒業制作展　| 東京都美術館 | 2019",
        },

    ],
    works: [
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w1.jpg",
            description: "美瑛2020_1",
            caption: "美瑛 | Biei",
            tag: "works1",
            m_image: "./imgs/works/2020/20-w20.jpg",
            m_title: "美瑛 | Biei  1 | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w2.jpg",
            description: "美瑛2020_2",
            caption: "美瑛 | Biei",
            tag: "works2",
            m_image: "./imgs/works/2020/20-w21.jpg",
            m_title: "美瑛 | Biei  2 | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w3.jpg",
            description: "Tree2020",
            caption: "Tree",
            tag: "works3",
            m_image: "./imgs/works/2020/20-w5.jpg",
            m_title: "Tree | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w4.jpg",
            description: "室咲2020_1",
            caption: "室咲 | Murozaki",
            tag: "works4",
            m_image: "./imgs/works/2020/20-w8.jpg",
            m_title: "室咲 | Murozaki  1 | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w5.jpg",
            description: "室咲2020_2",
            caption: "室咲 | Murozaki",
            tag: "works5",
            m_image: "./imgs/works/2020/20-w9.jpg",
            m_title: "室咲 | Murozaki  2 | 2020",
        },
         {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w6.jpg",
            description: "秋の暮2020",
            caption: "秋の暮 | Aki no kure ",
            tag: "works6",
            m_image: "./imgs/works/2020/20-w10.jpg",
            m_title: "秋の暮  |  Aki no kure | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w7.jpg",
            description: "秋霜2020_1",
            caption: "秋霜 | Syuso",
            tag: "works7",
            m_image: "./imgs/works/2020/20-w11.jpg",
            m_title: "秋霜 | Syuso | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w8.jpg",
            description: "秋模様2020_",
            caption: "秋模様 | Akimoyou",
            tag: "works8",
            m_image: "./imgs/works/2020/20-w12.jpg",
            m_title: "秋模様 | Akimoyou | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w9.jpg",
            description: "秋麗2020_1",
            caption: "秋麗 | Syurei",
            tag: "works9",
            m_image: "./imgs/works/2020/20-w13.jpg",
            m_title: "秋麗 | Syurei | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w10.jpg",
            description: "水の風2020_1",
            caption: "水の風 | Mizu no kaze",
            tag: "works10",
            m_image: "./imgs/works/2020/20-w14.jpg",
            m_title: "水の風 | Mizu no kaze | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w11.jpg",
            description: "青の風2020_1",
            caption: "青の風 | Ao no kaze",
            tag: "works11",
            m_image: "./imgs/works/2020/20-w15.jpg",
            m_title: "青の風 | Ao no kaze | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w12.jpg",
            description: "霜夜2020_1",
            caption: "霜夜 | Shimoyo",
            tag: "works12",
            m_image: "./imgs/works/2020/20-w16.jpg",
            m_title: "霜夜 | Shimoyo | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w14.jpg",
            description: "美唄 | Bibai",
            caption: "美唄 | Bibai",
            tag: "works14",
            m_image: "./imgs/works2020/20-w18.jpg",
            m_title: "美唄 | Bibai  1 | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w13.jpg",
            description: "美唄2 2020_2",
            caption: "美唄 | Bibai",
            tag: "works13",
            m_image: "./imgs/works2020/20-w17.jpg",
            m_title: "美唄 | Bibai  2 | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w15.jpg",
            description: "美唄の山道から2020_1",
            caption: "美唄の山道から",
            tag: "works15",
            m_image: "./imgs/works/2020/20-w19.jpg",
            m_title: "美唄の山道から | Bibai no sandoukara | 2020",
        },
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w17.jpg",
            description: "六月風2020_1",
            caption: "六月風 | Rokugatukaze",
            tag: "works17",
            m_image: "./imgs/works/2020/20-w23.jpg",
            m_title: "六月風 | Rokugatukaze | 2020",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w1.jpg",
            description: "Cafe2019",
            caption: "Cafe",
            tag: "works18",
            m_image: "./imgs/works/2019/19-w1.jpg",
            m_title: "Cafe | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w2.jpg",
            description: "Park2019",
            caption: "Park",
            tag: "works19",
            m_image: "./imgs/works/2019/19-w2.jpg",
            m_title: "Park  1 | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w3.jpg",
            description: "Park2019_2",
            caption: "Park",
            tag: "works20",
            m_image: "./imgs/works/2019/19-w3.jpg",
            m_title: "Park  2 | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w4.jpg",
            description: "TheSongofTrees12019_1",
            caption: "The Song of Trees",
            tag: "works21",
            m_image: "./imgs/works/2019/19-w4.jpg",
            m_title: "The Song of Trees 1 | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w5.jpg",
            description: "Tree2019",
            caption: "Tree",
            tag: "works22",
            m_image: "./imgs/works/2019/19-w5.jpg",
            m_title: "Tree 1 | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w6.jpg",
            description: "Tree2019_2",
            caption: "Tree",
            tag: "works23",
            m_image: "./imgs/works/2019/19-w6.jpg",
            m_title: "Tree  2 | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w7.jpg",
            description: "自画像2019_1",
            caption: "自画像 | Self-portrait",
            tag: "works24",
            m_image: "./imgs/works/2019/19-w7.jpg",
            m_title: "自画像 | Self-portrait | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w8.jpg",
            description: "夜ニ寄添2019_1",
            caption: "夜ニ寄添",
            tag: "works25",
            m_image: "./imgs/works/2019/19-w8.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w9.jpg",
            description: "夜ニ寄添2019_2",
            caption: "夜ニ寄添",
            tag: "works26",
            m_image: "./imgs/works/2019/19-w9.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w10.jpg",
            description: "夜ニ寄添2019_3",
            caption: "夜ニ寄添",
            tag: "works27",
            m_image: "./imgs/works/2019/19-w10.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w11.jpg",
            description: "夜ニ寄添2019_4",
            caption: "夜ニ寄添",
            tag: "works28",
            m_image: "./imgs/works/2019/19-w11.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w12.jpg",
            description: "夜ニ寄添2019_5",
            caption: "夜ニ寄添",
            tag: "works29",
            m_image: "./imgs/works/2019/19-w12.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w13.jpg",
            description: "夜ニ寄添2019_6",
            caption: "夜ニ寄添",
            tag: "works30",
            m_image: "./imgs/works/2019/19-w13.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w14.jpg",
            description: "夜ニ寄添2019_7",
            caption: "夜ニ寄添",
            tag: "works31",
            m_image: "./imgs/works/2019/19-w14.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },






    ]
};

function Thumbnail(data, target) {
    var parent = document.createElement("div");
    parent.className = "gallery-thumbnail";
    var img = document.createElement("img");
    img.src = data.img;
    img.alt = data.description;
    parent.appendChild(img);
    var div = document.createElement("div");
    div.className = "gallery-thumcaption";
    div.textContent = data.caption;
    parent.appendChild(div);
    var a = document.createElement("a");
    a.setAttribute("data-target", data.tag);
    a.className = "js-modal-open";
    a.appendChild(parent);
    target.appendChild(a);
}

function ShowsThumbnails(target) {
    var showscount = _data.shows.length;
    for (let i = 0; i < showscount; i++) {
        Thumbnail(_data.shows[i], target);
    }
}

function WorksThumbnails(target) {
    var workscount = _data.works.length;
    for (let i = 0; i < workscount; i++) {
        Thumbnail(_data.works[i], target);
    }
}

function ShowInfo(data) {
    var root = document.createElement("div");
    root.className = "showbox";
    var img = document.createElement("img");
    img.src = data.m_image;
    root.appendChild(img);
    var textbox = document.createElement("div");
    textbox.className = "showtextbox";
    var div = document.createElement("div");
    div.className = "m-caption";
    div.textContent = data.m_title;
    textbox.appendChild(div);
    root.appendChild(textbox);
    var textbox = document.createElement("div");
    return root;
}
function WorkInfo(data) {
    var root = document.createElement("div");
    root.className = "workbox";
    var img = document.createElement("img");
    img.src = data.m_image;
    root.appendChild(img);
    var textbox = document.createElement("div");
    textbox.className = "worktextbox";
    var div = document.createElement("div");
    div.className = "m-caption";
    div.textContent = data.m_title;
    textbox.appendChild(div);
    root.appendChild(textbox);
    var textbox = document.createElement("div");
    return root;
}
function ModalWindow(data, target) {
    var root = document.createElement("div");
    root.id = data.tag;
    root.className = "modal js-modal";
    var div = document.createElement("div");
    div.className = "modal-bg js-modal-close";
    root.appendChild(div);
    var parent = document.createElement("div");
    parent.className = "modal-content";
    parent.appendChild(ShowInfo(data));
    root.appendChild(parent);
    target.appendChild(root);
}
function ShowsModalWindows(target) {
    var showscount = _data.shows.length;
    for (let i = 0; i < showscount; i++) {
        ModalWindow(_data.shows[i], target);
    }
}
function WorksModalWindows(target) {
    var workscount = _data.works.length;
    for (let i = 0; i < workscount; i++) {
        ModalWindow(_data.works[i], target);
    }
}