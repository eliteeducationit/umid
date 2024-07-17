const xususiyatlar = [
    {
        emoji: "🖥️",
        sarlavha: "Highly compatible",
        malumot: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. play, no installation or driver needed."
    },

    {
        emoji: "💎",
        sarlavha: "Wireless withbluetooth",
        malumot: "Powerful2.4g RF technology allows you to connect the cordless keyboard from up to 30ft away.Simply plug the unifying receiver into your computer."
    },
    {
        emoji: "🔋",
        sarlavha: "High capatiy battarey",
        malumot: "Equipped with a long-lasting built-in battery, you'll never have to spend a dime on replaceable ones.Enjoy 40 hours of usage time between charges.",
    },
    {
        emoji: "💡",
        sarlavha: "Rgb backlit modes",
        malumot: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intesensely inthe dark and helps you type in low light conditions.",
    },
]

const xususiyatlarHTML = document.getElementById("xusisiyatlar");

document.addEventListener("DOMContentLoaded", () => {
    let natija = "";
    for (let i = 0; i < xususiyatlar.length; i++) {
        let shablon = `<article>
    <div class="icon">${xususiyatlar[i].emoji}</div>
    <h3>${xususiyatlar[i].sarlavha}</h3>
    <p>${xususiyatlar[i].malumot}</p>
</article>`;

        natija += shablon;
    }
    xususiyatlarHTML.innerHTML = natija;
});
