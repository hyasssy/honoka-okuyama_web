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
        {
            flag: false,
            img: "./imgs/img1.jpeg",
            description: "画像の説明 展示の名前",
            caption: "caption",
            tag: "title",
            m_image: "./imgs/img1.jpeg",
            m_title: "タイトルSample"
        },
        {
            flag: false,
            img: "",
            description: "",
            caption: "",
            tag: "",
            m_image: "",
            m_title: ""
        }
    ],
    works: [
        {
            flag: false,
            img: "",
            description: "",
            caption: "",
            tag: "",
            m_image: "",
            m_title: ""
        },
        {
            flag: false,
            img: "",
            description: "",
            caption: "",
            tag: "",
            m_image: "",
            m_title: ""
        }
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

function ShowInfo() {
    var root = document.createElement("div");
    root.className = "showbox"
    var img = document.createElement("img");
    img.src = ""
    root.appendChild(img);
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
    parent.appendChild(ShowInfo());
    var div = document.createElement("div");
    div.className = "closebutton";
    var a = document.createElement("a");
    a.className = "js-modal-close";
    a.id = "closebutton-link";
    var img = document.createElement("img");
    img.src = "./imgs/closebutton.svg";
    a.appendChild(img);
    div.appendChild(a);
    parent.appendChild(div);
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