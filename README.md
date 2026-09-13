# Ignite Gym

Projeto React Native (Expo) desenvolvido para praticar a construção de telas visuais.

## Pré-requisitos

Antes de começar, você precisa ter instalado no seu computador:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)
- App **Expo Go** instalado no seu celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))

## Instalação

1. Clone o repositório ou baixe os arquivos do projeto:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Entre na pasta do projeto:
```bash
cd nome-da-pasta
```

3. Instale as dependências:
```bash
npm install
```

Esse comando vai ler o `package.json` e baixar tudo que o projeto precisa (Expo, React, React Native) para dentro da pasta `node_modules`.

## Como rodar no Expo Go

1. Inicie o servidor de desenvolvimento:
```bash
npx expo start
```

2. Um QR Code vai aparecer no terminal (e também abrir uma aba no navegador).

3. Abra o app **Expo Go** no seu celular:
   - **Android**: use a opção "Scan QR Code" dentro do próprio app Expo Go.
   - **iOS**: use a câmera nativa do iPhone para escanear o QR Code — ela vai reconhecer e abrir automaticamente no Expo Go.

4. Certifique-se de que o celular e o computador estão conectados na **mesma rede Wi-Fi**. Sem isso, o Expo Go não consegue encontrar o servidor.

5. Aguarde o app carregar (pode levar alguns segundos na primeira vez) e pronto — a tela vai aparecer no celular.

## Problemas comuns

- **QR Code não conecta**: confirme que celular e computador estão na mesma rede Wi-Fi, ou tente rodar `npx expo start --tunnel` (mais lento, mas funciona mesmo em redes diferentes).
- **Erro ao instalar dependências**: apague a pasta `node_modules` e o arquivo `package-lock.json`, depois rode `npm install` novamente.
