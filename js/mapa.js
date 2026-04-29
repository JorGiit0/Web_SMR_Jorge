document.addEventListener('DOMContentLoaded', () => {
  const basePath = document.body.dataset.base || '';
  const animalButtons = document.querySelectorAll('.animal-button');
  const animalTitle = document.getElementById('animal-title');
  const animalDescription = document.getElementById('animal-description');
  const animalImage = document.getElementById('animal-image');
  const animalInfoContainer = document.querySelector('.text-container');

  if (!animalButtons.length || !animalTitle || !animalDescription || !animalImage || !animalInfoContainer) {
    return;
  }

  const animals = {
    'tortuga-boba': {
      title: 'Tortuga Boba',
      description: 'La tortuga boba sufre por la pérdida de hábitat, la contaminación por plásticos, la pesca incidental y el cambio climático. Aqua Tracker trabaja en el seguimiento de nidos y en la reducción de riesgos en zonas costeras.',
      image: `${basePath}assets/images/Tortuga-Boba.jpg`,
    },
    'tortuga-verde': {
      title: 'Tortuga Verde',
      description: 'La tortuga verde se observa de forma ocasional en Canarias. La protección de sus hábitats y la reducción de residuos marinos ayudan a mejorar su conservación.',
      image: `${basePath}assets/images/tortuga verde.jfif`,
    },
    'tiburon-azul': {
      title: 'Tiburón Azul',
      description: 'El tiburón azul frecuenta aguas profundas alrededor de Canarias. Su presencia es un indicador relevante del estado del ecosistema marino.',
      image: `${basePath}assets/images/tiburon _azul_UB.jfif`,
    },
    'delfin-listado': {
      title: 'Delfín Listado',
      description: 'El delfín listado es una especie social y activa que puede observarse en aguas de Tenerife, especialmente en zonas ricas en vida marina.',
      image: `${basePath}assets/images/delfines_listados.jpeg`,
    },
  };

  animalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const animal = animals[button.dataset.animal];
      if (!animal) return;

      animalTitle.textContent = animal.title;
      animalDescription.textContent = animal.description;
      animalImage.src = animal.image;
      animalImage.alt = animal.title;

      animalInfoContainer.classList.remove('show');
      void animalInfoContainer.offsetWidth;
      animalInfoContainer.classList.add('show');
    });
  });
});
