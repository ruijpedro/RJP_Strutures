# SmartStruct_RJP — Publicar WebApp no GitHub Pages

Este patch publica automaticamente a WebApp no GitHub Pages.

## Como aplicar

1. Extrair o ZIP.
2. Copiar `.github/workflows/build-webapp.yml` para a raiz do repositório.
3. Copiar `vite.config.ts` para a raiz do repositório e substituir o existente.
4. Fazer commit e push.
5. No GitHub: `Settings` → `Pages` → `Build and deployment` → escolher `GitHub Actions`.
6. Ir a `Actions` → correr `Build WebApp`.

## Link esperado

https://ruijpedro.github.io/RJP_Strutures/

> Nota: o nome do repositório visto no print é `RJP_Strutures`. Se alterares o nome do repositório, também tens de alterar o `base` no `vite.config.ts`.
