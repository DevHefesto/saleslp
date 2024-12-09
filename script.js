document.addEventListener("DOMContentLoaded", function () {
    const openFormButtons = document.querySelectorAll(".open-form-button");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("close-modal");
  
    // Adicionar evento a todos os botões
    openFormButtons.forEach(button => {
      button.addEventListener("click", function () {
        modal.style.display = "flex";
      });
    });
  
    // Fechar o modal
    closeModalButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Fechar o modal ao clicar fora do conteúdo
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  