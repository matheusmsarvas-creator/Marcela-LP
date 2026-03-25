# Integração com Google Calendar

Este documento explica como integrar o sistema de agendamento da landing page com o Google Calendar da nutricionista.

## Visão Geral

O componente `Booking.tsx` já está preparado com a interface de agendamento. Para integrar com o Google Calendar, você precisará:

1. Criar um projeto no Google Cloud Platform
2. Habilitar a Google Calendar API
3. Configurar OAuth 2.0
4. Implementar a lógica de integração

## Passo a Passo

### 1. Configurar Google Cloud Project

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Vá em "APIs & Services" > "Library"
4. Procure por "Google Calendar API" e habilite

### 2. Configurar Credenciais OAuth 2.0

1. Vá em "APIs & Services" > "Credentials"
2. Clique em "Create Credentials" > "OAuth client ID"
3. Selecione "Web application"
4. Adicione as URLs autorizadas:
   - JavaScript origins: `http://localhost:5173` (desenvolvimento)
   - Redirect URIs: `http://localhost:5173/callback` (desenvolvimento)
5. Salve o Client ID e Client Secret

### 3. Instalar Dependências

```bash
npm install @react-oauth/google gapi-script
```

### 4. Implementar a Integração

Crie um arquivo `src/utils/googleCalendar.ts`:

```typescript
import { gapi } from 'gapi-script';

const CLIENT_ID = 'SEU_CLIENT_ID_AQUI';
const API_KEY = 'SUA_API_KEY_AQUI';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

export const initGoogleCalendar = () => {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });
  });
};

export const createCalendarEvent = async (eventDetails: {
  date: Date;
  time: string;
  name: string;
  email: string;
  phone: string;
  service: string;
}) => {
  const { date, time, name, email, phone, service } = eventDetails;
  
  // Combinar data e hora
  const [hours, minutes] = time.split(':');
  const startDateTime = new Date(date);
  startDateTime.setHours(parseInt(hours), parseInt(minutes), 0);
  
  const endDateTime = new Date(startDateTime);
  endDateTime.setHours(startDateTime.getHours() + 1); // Consulta de 1 hora
  
  const event = {
    summary: `Consulta: ${name} - ${service}`,
    description: `
      Cliente: ${name}
      Email: ${email}
      Telefone: ${phone}
      Serviço: ${service}
    `,
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone: 'America/Sao_Paulo',
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'America/Sao_Paulo',
    },
    attendees: [
      { email: email },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 }, // 1 dia antes
        { method: 'popup', minutes: 60 }, // 1 hora antes
      ],
    },
  };

  try {
    const response = await gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      sendUpdates: 'all', // Envia convite por email
    });
    
    return response.result;
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    throw error;
  }
};
```

### 5. Atualizar o Componente Booking

No arquivo `src/app/components/Booking.tsx`, atualize a função `handleSubmit`:

```typescript
import { createCalendarEvent } from '../../utils/googleCalendar';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone) {
    alert("Por favor, preencha todos os campos");
    return;
  }

  try {
    // Criar evento no Google Calendar
    await createCalendarEvent({
      date: selectedDate,
      time: selectedTime,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
    });

    // Enviar email de confirmação (opcional)
    // await sendConfirmationEmail(formData);

    setIsSubmitted(true);
  } catch (error) {
    alert("Erro ao criar agendamento. Tente novamente.");
    console.error(error);
  }
};
```

### 6. Inicializar no App

No `src/app/App.tsx`, adicione a inicialização:

```typescript
import { useEffect } from 'react';
import { initGoogleCalendar } from '../utils/googleCalendar';

function App() {
  useEffect(() => {
    initGoogleCalendar();
  }, []);
  
  // ... resto do código
}
```

## Alternativas

### Usar Backend (Recomendado para produção)

Para maior segurança, é recomendado criar um backend que gerencie as chamadas à API do Google Calendar:

1. **Node.js + Express**: Criar um endpoint que recebe os dados do agendamento
2. **Usar Service Account**: Mais seguro que OAuth no frontend
3. **Adicionar validações**: Verificar horários disponíveis, evitar duplicatas

### Serviços Terceiros

Você também pode usar serviços como:
- **Calendly**: Integração mais simples
- **Cal.com**: Open source e self-hosted
- **Acuity Scheduling**: Pago mas completo

## Notificações

### Email
Você pode usar serviços como:
- **SendGrid**
- **Mailgun**
- **AWS SES**

### WhatsApp
Para automação de WhatsApp:
- **Twilio API**
- **WhatsApp Business API**

## Exemplo de Fluxo Completo

1. Cliente preenche formulário
2. Sistema verifica disponibilidade no Google Calendar
3. Evento é criado no calendário da nutricionista
4. Email de confirmação é enviado ao cliente
5. Mensagem de WhatsApp é enviada (opcional)
6. Lembrete automático 24h antes
7. Lembrete automático 1h antes

## Variáveis de Ambiente

Crie um arquivo `.env`:

```
VITE_GOOGLE_CLIENT_ID=seu_client_id
VITE_GOOGLE_API_KEY=sua_api_key
VITE_CALENDAR_ID=email_do_calendario
```

## Segurança

⚠️ **IMPORTANTE**:
- Nunca exponha credenciais no frontend
- Use backend para chamadas sensíveis à API
- Implemente rate limiting
- Valide todos os dados no servidor

## Suporte

Para mais informações:
- [Documentação Google Calendar API](https://developers.google.com/calendar/api/v3/reference)
- [React OAuth Google](https://www.npmjs.com/package/@react-oauth/google)
