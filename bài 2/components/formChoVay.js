const $template = document.createElement('template');
$template.innerHTML = /*html*/`
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<form id="form">
    <div class="container border mt-4">
        <div class="d-flex justify-content-center">Thêm khoản cho vay</div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Họ tên người vay" id="name">
            </div>
            <div class="form-group">
                <input type="number" class="form-control" placeholder="Số tiền vay" id="money">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Ngày hẹn trả" id="date">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Mục đích vay tiền" id="reason">
            </div>
        <button type="submit" class="btn btn-primary mb-3">Cho vay</button>
    </div>
</form>
`;

export default class FormChoVay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('form-cho-vay', FormChoVay);