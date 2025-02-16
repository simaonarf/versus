document.getElementById('add-car-btn').addEventListener('click', async function () {
    const select = document.getElementById('car-select');
    const selectedOption = select.options[select.selectedIndex];

    // Verifica se um carro foi selecionado
    if (!selectedOption.value) return;

    const modelId = selectedOption.value;
    const brand = selectedOption.dataset.brand;
    const year = selectedOption.dataset.year;
    const carName = selectedOption.textContent.trim();
    const imageURL = selectedOption.dataset.image;

    // Verifica se o carro já foi adicionado
    const cards = document.querySelectorAll('.card');
    let alreadyAdded = false;
    cards.forEach(card => {
        const nameElement = card.querySelector('.car-name');
        if (nameElement.textContent === carName) {
            alreadyAdded = true;
        }
    });
    if (alreadyAdded) {
        alert("Carro já adicionado!");
        return;
    }

    // Procura card “vazio”
    let emptyCard = null;
    for (let i = 1; i <= 3; i++) {
        const card = document.getElementById(`card-${i}`);
        const nameElement = card.querySelector('.car-name');
        if (nameElement.textContent.startsWith("Carro")) {
            emptyCard = card;
            break;
        }
    }
    if (!emptyCard) {
        alert("Limite de carros atingido!");
        return;
    }

    // rapidapi
    const url = `https://tabela-fipe-api1.p.rapidapi.com/types/1/brands/${brand}/models/${modelId}/years/${year}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9be815408cmsh1d04a42150584d2p1ea370jsn6d6ad93164ab',
            'x-rapidapi-host': 'tabela-fipe-api1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }
        const result = await response.json();

        // Formatação do preço
        const formattedPrice = Number(result.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        // Atualiza o card com nome, preço e imagem do carro
        emptyCard.querySelector('.car-name').textContent = carName;
        emptyCard.querySelector('.price-panel').textContent = formattedPrice;
        emptyCard.querySelector('.car-image').src = imageURL;
        emptyCard.querySelector('.car-image').alt = `Imagem do ${carName}`;
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
});