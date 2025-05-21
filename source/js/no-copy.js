// 禁止右键菜单
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// 禁止文字选中
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

// 禁止复制
document.addEventListener('copy', function (e) {
    e.preventDefault();
    // Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'Sorry. Copy is not allowed!'
    // });
    showTopTip('Sorry. Copy is not allowed!');
});

// 禁止打印
(function () {
    // 1. 覆盖window.print方法
    window.print = function () {
        // alert('Sorry. Print is not allowed!');
        showTopTip('Sorry. Print is not allowed!');
        return false;
    };
    // 2. 添加CSS隐藏内容
    var style = document.createElement('style');
    style.media = 'print';
    style.appendChild(document.createTextNode('body { display: none !important; }'));
    document.head.appendChild(style);
})();