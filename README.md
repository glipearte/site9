# 🎉 Glipearte - Site de Locação de Artigos para Festa

## 📋 Descrição do Projeto

O site da **Glipearte** é uma plataforma institucional completa para uma empresa de locação de artigos para festas, desenvolvida com foco no sistema "Pegue e Monte". O site permite que os clientes explorem um catálogo virtual interativo, simulem orçamentos personalizados e entrem em contato com a empresa para eventos.

### 🎯 Objetivos Principais
- Funcionar como um **catálogo virtual interativo**- Facilitar a **simulação de orçamentos** para clientes
- Captar **leads qualificados** para a locadora
- Apresentar o portfólio de artigos de forma **visual e organizada**

## 🚀 Funcionalidades Implementadas

### ✅ Catálogo Virtual Interativo
- **Catálogo completo** com 12 produtos iniciais
- **Filtros por categoria**: Louças, Decoração, Móveis, Iluminação
- **Visualização detalhada** de cada produto
- **Ícones intuitivos** para melhor identificação visual

### ✅ Sistema "Pegue e Monte"
- **Adicionar itens** ao orçamento com quantidade ajustável
- **Remover itens** do orçamento
- **Cálculo automático** do preço total
- **Resumo visual** dos itens selecionados

### ✅ Simulador de Orçamentos
- **Cálculo dinâmico** do subtotal
- **Taxa de entrega** baseada no número de convidados
- **Sistema de desconto** para grandes eventos (acima de 100 convidados)
- **Interface responsiva** para melhor experiência

### ✅ Formulário de Contato
- **Campos obrigatórios**: Nome, Telefone, Email
- **Seleção de tipo de evento**: Casamento, Aniversário, Corporativo, Infantil, Outro
- **Campo de mensagem** para descrição detalhada
- **Validação de formulário** com formatação automática de telefone

### ✅ Design Responsivo
- **Layout adaptável** para desktop, tablet e mobile
- **Animações suaves** e efeitos visuais
- **Navegação intuitiva** com scroll suave
- **Sistema de notificações** para feedback ao usuário

## 📁 Estrutura do Projeto

```
glipearte-site/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos completos
├── js/
│   └── main.js            # JavaScript interativo
└── README.md              # Documentação
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos e responsivos
- **JavaScript ES6+** - Interatividade e lógica
- **Bootstrap 5** - Framework CSS
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia

### Bibliotecas e Frameworks
- **Bootstrap 5.3.0** - Componentes responsivos
- **Inter Font** - Tipografia moderna
- **CSS Custom Properties** - Variáveis CSS
- **ES6 Classes** - Programação orientada a objetos

## 📊 Modelo de Dados

### Produtos
```javascript
{
    id: number,
    name: string,
    category: string,        // 'loucas' | 'decoracao' | 'moveis' | 'iluminacao'
    description: string,
    price: number,           // Preço por unidade
    icon: string,            // Classe Font Awesome
    available: boolean,
    stock: number            // Quantidade disponível
}
```

### Orçamento
```javascript
{
    items: array,          // Itens selecionados
    eventDate: string,       // Data do evento
    guestCount: number,      // Número de convidados
    subtotal: number,        // Subtotal dos produtos
    deliveryFee: number,   // Taxa de entrega
    discount: number,      // Desconto aplicado
    total: number,         // Total final
    timestamp: string      // Data/hora da solicitação
}
```

## 🎯 Público-Alvo

- **Demográfico**: Homens e mulheres, 20-50 anos
- **Comportamental**: Organizadores de eventos, noivos, pais de crianças, profissionais de eventos corporativos
- **Necessidades**: Locação de artigos para festas, organização de eventos, orçamentos personalizados

## 🌟 Seções do Site

1. **Hero Section** - Apresentação impactante com call-to-action
2. **Recursos** - Benefícios da Glipearte
3. **Catálogo** - Exibição de produtos com filtros
4. **Simulador** - Orçamento personalizado
5. **Contato** - Formulário e informações
6. **Footer** - Links úteis e informações de contato

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Até 767px

## 🎨 Design e UX

### Paleta de Cores
- **Primária**: #6f42c1 (Roxo)
- **Secundária**: #e83e8c (Rosa)
- **Acento**: #fd7e14 (Laranja)
- **Claro**: #f8f9fa (Cinza claro)
- **Escuro**: #212529 (Cinza escuro)

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Tamanhos**: Variados de 0.9rem a 3.5rem
- **Pesos**: 300, 400, 500, 600, 700

## 🔧 Configuração e Instalação

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Instalação Rápida
1. Faça download dos arquivos
2. Extraia para um diretório do servidor web
3. Acesse o index.html pelo navegador

### Servidor Local (Opcional)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server
```

## 📈 Funcionalidades Futuras (Não Implementadas)

### Backend Integration
- [ ] Integração com banco de dados real
- [ ] Sistema de autenticação de usuários
- [ ] Painel administrativo para gerenciar produtos
- [ ] Integração com sistema de pagamento
- [ ] Envio de emails automáticos

### Enhanced Features
- [ ] Galeria de fotos real dos produtos
- [ ] Sistema de avaliações e comentários
- [ ] Compartilhamento em redes sociais
- [ ] Chat em tempo real para suporte
- [ ] Sistema de reservas com calendário
- [ ] Notificações push
- [ ] Aplicativo mobile (PWA)

### Business Intelligence
- [ ] Dashboard de analytics
- [ ] Relatórios de vendas
- [ ] Gestão de estoque em tempo real
- [ ] Integração com CRM
- [ ] Marketing automation

## 🐛 Tratamento de Erros

O sistema inclui validação de:
- Campos obrigatórios do formulário
- Formato de email válido
- Quantidade disponível em estoque
- Datas válidas para eventos
- Números de telefone formatados

## 🔒 Segurança

- Validação de entrada de dados
- Sanitização de formulários
- Armazenamento seguro em localStorage
- Proteção contra XSS básica

## 📞 Suporte e Contato

Para suporte técnico ou dúvidas sobre o sistema:
- **Email**: contato@glipearte.com.br
- **Telefone**: (11) 1234-5678
- **Horário**: Seg-Sex: 8h-18h | Sáb: 8h-12h

## 📄 Licença

Este projeto é desenvolvido como um sistema institucional para a Glipearte. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Glipearte - Transformando eventos em momentos inesquecíveis**