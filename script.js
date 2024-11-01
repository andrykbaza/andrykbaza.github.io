document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Отримання значень з форми
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const confirmationMessage = document.getElementById("confirmation-message");

    // Перевірка всіх полів
    if (name === "" || email === "" || date === "" || time === "") {
        confirmationMessage.style.color = "red";
        confirmationMessage.innerText = "Будь ласка, заповніть усі поля.";
        return;
    }

    // Перевірка коректності електронної пошти
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        confirmationMessage.style.color = "red";
        confirmationMessage.innerText = "Будь ласка, введіть коректну електронну пошту.";
        return;
    }

    // Відправлення форми
    event.target.submit();

    // Показуємо повідомлення після відправлення
    confirmationMessage.style.color = "#ab47bc"; // Рожево-фіолетовий колір
    confirmationMessage.innerText = `Дякуємо, ${name}! Ваш запис на ${date} о ${time} прийнятий.`;

    // Очистити форму
    document.getElementById("booking-form").reset();
});
