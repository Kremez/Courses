const data = [
    {
        'folder': true,
        'title': 'Grow',
        'children': [
            {
                'title': 'logo.png'
            },
            {
                'folder': true,
                'title': 'English',
                'children': [
                    {
                        'title': 'Present_Perfect.txt'
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Soft',
        'children': [
            {
                'folder': true,
                'title': 'NVIDIA',
                'children': null
            },
            {
                'title': 'nvm-setup.exe'
            },
            {
                'title': 'node.exe'
            }
        ]
    },
    {
        'folder': true,
        'title': 'Doc',
        'children': [
            {
                'title': 'project_info.txt'
            }
        ]
    },
    {
        'title': 'credentials.txt'
    }
];

const rootNode = document.getElementById('root');


const createTree = ar => {
    let html = `<ul>`;
    for (let {folder, title, children} of ar) {
        children = Array.isArray(children) ? createTree(children) : '';
        folder = folder ? 'folder' : 'file';
        html += `<li class="${folder}">${title}${children}</li>`;
    }
    html += `</ul>`;
    return html
}
document.body.insertAdjacentHTML('beforeend', createTree(data));

let fold = document.querySelector('ul');
console.log(fold);
fold.prepend.innerHTML = '<span class="material-icons">folder</span>';