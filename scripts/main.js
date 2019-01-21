const kzProjectsData = [
    {
        name: 'Lambd-A-Job',
        img: '../assets/images/wdiP4.png',
        host: 'https://rhetorical-rate.surge.sh/',
        repo: 'https://github.com/kennyzhan9/Lambd-a-Job',
        target: '_blank',
        rel: 'noopener noreferrer'
    },
    {
        name: 'MovieGenerator',
        img: '../assets/images/wdiP3.png',
        host: 'https://movie-generator.surge.sh/',
        repo: 'https://github.com/Lukef9/MovieGenerator',
        target: '_blank',
        rel: 'noopener noreferrer'
    },
    {
        name: 'Lambdafy',
        img: '../assets/images/wdiP2.png',
        host: 'https://glacial-tundra-32716.herokuapp.com/',
        repo: 'https://github.com/kennyzhan9/Lambdafy',
        target: '_blank',
        rel: 'noopener noreferrer'
    },
    {
        name: 'Test-Your-MEMEry Game',
        img: '../assets/images/wdiP1.png',
        host: 'https://kennyzhan9.github.io/Test-Your-Memery-Game/',
        repo: 'https://github.com/kennyzhan9/Test-Your-Memery-Game',
        target: '_blank',
        rel: 'noopener noreferrer'
    },
];

const projContainer = document.getElementById('contain-projects');

const renderProjects = (stuff) => {
    stuff.forEach((proj) => {
        const projTile = document.createElement('div');
        projTile.classList.add('proj-tile');

        const projHeader = document.createElement('h2');
        projHeader.innerHTML = `${proj.name}`;

        const projImg = document.createElement('img');
        projImg.setAttribute('src', `${proj.img}`);

        const projBtns = document.createElement('div');
        projBtns.setAttribute('class', 'btn-tabs');

        const projHost = document.createElement('a');
        projHost.classList.add('btn');
        projHost.setAttribute('href', `${proj.host}`);
        projHost.setAttribute('target', `${proj.target}`);
        projHost.setAttribute('rel', `${proj.rel}`);
        projHost.innerHTML = 'View App';

        const projRepo = document.createElement('a');
        projRepo.classList.add('btn');
        projRepo.setAttribute('href', `${proj.repo}`);
        projRepo.setAttribute('target', `${proj.target}`);
        projRepo.setAttribute('rel', `${proj.rel}`);
        projRepo.innerHTML = 'View Code';

        projTile.appendChild(projHeader);
        projTile.appendChild(projImg);
        projTile.appendChild(projBtns);
        projBtns.appendChild(projHost);
        projBtns.appendChild(projRepo);
        

        projContainer.appendChild(projTile);
    });
}

renderProjects(kzProjectsData);

const btnPanel = [
    {
        site: 'github-square',
        href: 'https://github.com/kennyzhan9?tab=repositories',
        target: '_target',
        rel: 'noopener noreferrer',
        fa: '<i class="fab fa-github-square"></i>'
    },
    {
        site: 'linkedin',
        href: 'https://www.linkedin.com/in/kendrickzhang/',
        target: '_target',
        rel: 'noopener noreferrer',
        fa: '<i class="fab fa-linkedin"></i>'
    },
    {
        site: 'copepen',
        href: '',
        target: '_target',
        rel: 'noopener noreferrer',
        fa: '<i class="fab fa-codepen"></i>'
    },
    {
        site: 'envelope-square',
        href: '',
        target: '_target',
        rel: 'noopener noreferrer',
        fa: '<i class="fas fa-envelope-square"></i>'
    },
    {
        site: 'twitter',
        href: '',
        target: '_target',
        rel: 'noopener noreferrer',
        fa: '<i class="fab fa-twitter"></i>'
    },
    {
        site: 'medium',
        href: '',
        target: '_target',
        rel: 'noopener noreferrer',
        fa: '<i class="fab fa-medium"></i>'
    }
];

const btnContainers = document.querySelectorAll('.btn-panel');

const renderBtns = (stuff) => {
    for (let i = 0; i < btnContainers.length; i += 1) {
        stuff.forEach((btn) => {
            const btnAnchor = document.createElement('a');
    
            btnAnchor.setAttribute('href', `${btn.href}`);
            btnAnchor.setAttribute('target', `${btn.target}`);
            btnAnchor.setAttribute('rel', `${btn.rel}`)
            btnAnchor.innerHTML = `${btn.fa}`;
    
            btnContainers[i].appendChild(btnAnchor);
        });
    }
}

renderBtns(btnPanel);
