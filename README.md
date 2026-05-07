# InspireMe - Interface Web (Front-End)

Este é o repositório Front-End do projeto **InspireMe**, uma interface web moderna, minimalista e responsiva projetada para exibir citações inspiradoras.

## 💻 Sobre o Projeto

A aplicação foi construída para consumir a API do InspireMe e apresentar as informações com uma excelente experiência de usuário (UX).

**Tecnologias utilizadas:**

- **HTML5 e CSS3:** Estruturação e estilização da interface.
- **JavaScript (Vanilla):** Lógica de consumo da API externa através de requisições assíncronas (Fetch).
- **FontAwesome:** Implementação de ícones animados (spinner) para feedback visual durante o estado de carregamento das requisições.

## 🚀 Arquitetura de Deploy (CI/CD)

O projeto conta com uma pipeline robusta de CI/CD para automatizar as entregas em produção.

- **Hospedagem:** Vercel.
- **Pipeline:** GitHub Actions via Vercel CLI.
- **Gatilho (Trigger):** Para garantir o controle de versão, a integração Git padrão da Vercel foi desativada. Os deploys ocorrem exclusivamente via GitHub Actions mediante o push de tags semânticas (SemVer) no repositório.
- **Autenticação:** O fluxo utiliza os secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID` configurados no GitHub para autorizar a publicação.
