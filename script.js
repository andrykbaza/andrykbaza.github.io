document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const confirmationMessage = `Дякуємо, ${name}! Ваш запис на ${date} о ${time} прийнятий. Ми зв'яжемося з вами за номером ${phone}.`;
    document.getElementById("confirmation-message").innerText = confirmationMessage;

    // Очистити форму
    document.getElementById("booking-form").reset();
});
