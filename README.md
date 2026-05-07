# InspireMe - Interface Web (Front-End)

[cite_start]Este é o repositório Front-End do projeto **InspireMe**, uma interface web moderna, minimalista e responsiva projetada para exibir citações inspiradoras[cite: 11, 39].

## 💻 Sobre o Projeto

A aplicação foi construída para consumir a API do InspireMe e apresentar as informações com uma excelente experiência de usuário (UX).

**Tecnologias utilizadas:**

- [cite_start]**HTML5 e CSS3:** Estruturação e estilização da interface[cite: 39, 309].
- [cite_start]**JavaScript (Vanilla):** Lógica de consumo da API externa através de requisições assíncronas (Fetch)[cite: 309].
- [cite_start]**FontAwesome:** Implementação de ícones animados (spinner) para feedback visual durante o estado de carregamento das requisições[cite: 220, 309].

## 🚀 Arquitetura de Deploy (CI/CD)

[cite_start]O projeto conta com uma pipeline robusta de CI/CD para automatizar as entregas em produção[cite: 10, 309].

- [cite_start]**Hospedagem:** Vercel[cite: 309].
- [cite_start]**Pipeline:** GitHub Actions via Vercel CLI[cite: 202, 309].
- [cite_start]**Gatilho (Trigger):** Para garantir o controle de versão, a integração Git padrão da Vercel foi desativada[cite: 232]. [cite_start]Os deploys ocorrem exclusivamente via GitHub Actions mediante o push de tags semânticas (SemVer) no repositório[cite: 231, 241].
- [cite_start]**Autenticação:** O fluxo utiliza os secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID` configurados no GitHub para autorizar a publicação[cite: 138].
