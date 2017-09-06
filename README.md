# VueJS SPA

## Dependências
Para rodar a aplicação será necessário ter instalado nodejs

## Para testar:
* Clone ou baixe o repositório.
* Navegue até a pasta do projeto e execute `npm install` para instalar as dependências locais do projeto;
* Ainda no terminal execute `npm run dev` ou `npm run build`: o primeiro script executa o projeto local que irá ficar observando alterações nos arquivos e irá reiniciar o servidor automaticamente, o segundo irá fazer o build de todo o projeto para pode ser publicado em produção;
```sh
$ cd api
$ npm install
$ npm run dev
```

a aplicação será iniciada em [http://localhost:8080](http://localhost:8080)

As rotas foram implementadas de forma precária, ou seja a inteligência para checar quando o usuário logou ainda precisa ser melhorada.

> Assim será necessário, recarregar a página ao clicar no botão de login e recarregar novamente após um minuto quando o token expirar.

> Isso acontece pois o token está no localStorage do navegador e a lógica implementada verifica se existe esse token no navegador, após um minuto a API retorna um status 401 em qualquer requisição, neste momento o token é removido do localStorage.
