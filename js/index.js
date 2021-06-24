document.addEventListener("DOMContentLoaded", function() {
    const template = document.createElement('div');
    template.setAttribute("id", "floatingSticky")
    template.setAttribute("class", "floating-sticky")
    template.innerHTML = `
        <div class="menu-list">
            <div class="inner ui-draggable ui-draggable-handle" id="floating_open">
                <a href="#" class="btn-floating" id="to_open"><span></span></a>
                <ul>
                    <li class="menu01"><a href="#">Video llamada con Amigo Samsung</a></li>
                    <iframe src="https://lw.stagecliengo.com/button" id="liveChatCliengo" style="width:100%"></iframe>
                    <li class="menu03"><a href="https://api.whatsapp.com/send?phone=50760082665" target="_blank">Soporte por Whatsapp</a></li>
                </ul>
            </div>
        </div>
    `;
    document.body.appendChild(template);
    document.getElementById("to_open").addEventListener("click", floating_open);
    document.getElementById("cliengoWidgetOpen").addEventListener("click", cliengoWidgetOpen);

    function cliengoWidgetOpen() {
        Cliengo.widgetClose();
    }

    function floating_open() {
        var element = document.getElementById("floating_open");
        document.getElementById("liveChatCliengo").style.display = 'block';
        element.classList.toggle("on");
    }
});