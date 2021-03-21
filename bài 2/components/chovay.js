const $template = document.createElement('template');
$template.innerHTML = /*html*/`
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div class="container mt-3">
        <div class="row bg-dark">
            <div class="d-inline-flex justify-content-left">
                <nav class="navbar navbar-expand-sm mt-2 text-white">
                    Ngân sách: $200000
                </nav>
            </div>
            <div class="d-inline-flex justify-content-end col mt-3">
                <button type="button" class="btn btn-success mb-3">Đăng kí vay</button>
            </div>
        </div>
    </div>
    <div class="container mt-4 border">
        Danh sách khoản cho vay
        <div class="container mt-3 mb-3 border">
            Họ tên: Nguyễn Văn A <br>
            Số tiền vay: $1203<br>
            Mục đích vay:<br>
                - Mua hạt giống<br>
                - Mua dụng cụ trồng trọt<br>
            Ngày hẹn trả: 2021/05/21<br>
            Ngày trả: 2021/05/03
        </div>
    <div class="container mt-3 mb-3 border">
            Họ tên: Trần Văn B <br>
            Số tiền vay: $2133<br>
            Mục đích vay:<br>
                - Mua hạt giống<br>
                - Mua dụng cụ trồng trọt<br>
            Ngày hẹn trả: 2021/07/11<br>
    </div>
    <div>
    <button type="button" class="btn btn-success mb-3">Xác nhận đã trả</button>
</div>
</div>
`;

export default class ChoVay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('cho-vay', ChoVay);