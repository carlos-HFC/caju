module.exports = (plop) => {
  plop.setGenerator('component', {
    description: "Criar componente",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Digite o nome do seu componente"
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: "templates/Component.tsx.hbs"
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/_style.scss'
      },
    ]
  });

  plop.setGenerator('page', {
    description: "Criar página",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Digite o nome da página"
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}/index.tsx',
        templateFile: "templates/Page.tsx.hbs"
      },
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}/_style.scss'
      },
    ]
  })
};