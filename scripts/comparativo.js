document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const cars = urlParams.getAll("cars[]");

    if (cars.length > 0) {
        const container = document.getElementById("carList");
        cars.forEach(car => {
            const carItem = document.createElement("p");
            carItem.textContent = car;
            container.appendChild(carItem);
        });
    }
});
