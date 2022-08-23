let botonProyectos = document.getElementById("btnProyectos");

/* botonProyectos.addEventListener("mousemove", () => {
    alert("eaa");
}) */



botonProyectos.addEventListener("click", () => {
    const modalDeProyectos =  botonProyectos.innerHTML = `
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title" id="exampleModalLabel">Certificado de CoderHouse en
                                            Desarrollo Web</h3>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <img class="w-100" src="./images/certificado-coder-desarrollo-web.png"
                                            alt="santiago ruiz">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cerrar</button>
                                        <a href="https://www.linkedin.com/in/santiago-ruiz-developer/" target="_blank">
                                            <button type="text" class="btn btn-primary">Ver
                                                Linkedin</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    botonProyectos = modalDeProyectos
})                        