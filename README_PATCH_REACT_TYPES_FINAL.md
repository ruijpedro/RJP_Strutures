# SmartStruct_RJP — Patch React Types Final

Este patch corrige o erro:

- TS2688: Cannot find type definition file for 'react'
- TS2688: Cannot find type definition file for 'react-dom'

## Como aplicar

1. Copiar todos os ficheiros deste ZIP para a raiz do repositório.
2. Aceitar substituir:
   - package.json
   - tsconfig.json
   - vite.config.ts
   - .github/workflows/build-webapp.yml
3. Fazer commit.
4. Correr o workflow **Build WebApp**.

## O que foi alterado

- `@types/react` e `@types/react-dom` foram colocados em `dependencies` para garantir instalação no GitHub Actions.
- O `tsconfig.json` foi simplificado e deixou de forçar `types` manualmente.
- O workflow limpa `node_modules` e `package-lock.json` antes do install.
