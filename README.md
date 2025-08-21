# WOZ Simulator — Front-end (React)

Interface web do simulador **Wizard of Oz** para ensino clínico: o professor controla um paciente virtual (NPC) e conduz a simulação, observando as ações do aluno e registrando feedbacks e métricas.

> **Objetivo**  
> Fornecer uma UI rápida, acessível e pronta para produção para: seleção de cenário e médico, controle em tempo real das reações do paciente, exibição do diálogo, coleta de feedbacks pós-simulação e histórico de sessões.

---

## ✨ Funcionalidades

- **Home / Get Started** com resumo e atalho para iniciar nova simulação  
- **Seleção de Médico** e **Seleção de Cenário** (ex.: Amigdalite, Dor torácica, TCE, etc.)  
- **Console WOZ**: controle do paciente (sintomas, reações, falas predefinidas)  
- **Timeline da Simulação**: eventos em tempo real e anotações  
- **Histórico de Simulações Recentes**  
- **Formulário de Avaliação/Feedback** ao encerrar a simulação  
- **Autenticação** (professor/aluno)  
- **Métricas**: duração, passos do fluxo, intervenções e resultados  
---

## 🧱 Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [React Router](https://reactrouter.com/)  
- [Zustand](https://zustand-demo.pmnd.rs/) (estado)  
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)  
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)  
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)  
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

---

## 📦 Instalação

### Pré-requisitos
- Node.js LTS (>= 18)  
- PNPM / Yarn / NPM

### Clonar e instalar dependências
```bash
git clone https://github.com/seu-usuario/woz-simulator-web.git
cd woz-simulator-web

yarn install
