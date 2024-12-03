# Instagram DM Automation SaaS

A powerful Software-as-a-Service platform for automating Instagram Direct Messages using modern web technologies. Built with Next.js, Tailwind CSS, and Instagram API integration.

## Features

- **Automated DM Responses**: Set up automated responses for Instagram direct messages
- **Custom Message Templates**: Create and manage message templates
- **Dashboard Analytics**: Track message statistics and engagement metrics
- **Webhook Integration**: Real-time notifications and updates
- **Multi-Account Support**: Manage multiple Instagram accounts
- **User Authentication**: Secure login and account management
- **Responsive Design**: Beautiful UI built with Tailwind CSS and Relume

## Technologies Used

- **Frontend**:

  - Next.js 14+ (App Router)
  - Tailwind CSS
  - Relume UI Components
  - TypeScript

- **Backend**:

  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL Database
  - Instagram Graph API
  - Webhooks

- **Authentication**:
  - NextAuth.js
  - OAuth 2.0 for Instagram

## Prerequisites

- Node.js 18 or later
- PostgreSQL database
- Instagram Business Account
- Meta Developer Account

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/saas-bot-instagram.git
cd saas-bot-instagram
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Configure your `.env` file with:

```
DATABASE_URL=


NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_
CLERK_SECRET_KEY=sk_test_

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard


NEXT_PUBLIC_NGROK_URL=


STRIPE_SUBSCRIPTION_PRICE_ID=
STRIPE_CLIENT_SECRET=
NEXT_PUBLIC_HOST_URL=http://localhost:3000
INSTAGRAM_BASE_URL=https://graph.instagram.com
INSTAGRAM_EMBEDDED_OAUTH_URL=
INSTAGRAM_CLIENT_ID=
INSTAGRAM_CLIENT_SECRET=
INSTAGRAM_TOKEN_URL=https://api.instagram.com/oauth/access_token
OPEN_AI_KEY=
```

5. Run database migrations:

```bash
npx prisma migrate dev
```

6. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
saas-bot-instagram/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (protected)/
│   │   └── api/
│   ├── components/
│   ├── lib/
│   └── utils/
├── prisma/
│   └── schema.prisma
├── public/
└── ...
```

## Instagram API Setup

1. Create a Meta Developer account
2. Set up a Meta App
3. Configure Instagram Graph API
4. Set up webhook subscriptions
5. Generate access tokens

## Usage

1. Log in to the dashboard
2. Connect your Instagram Business account
3. Create message templates
4. Configure automation rules
5. Monitor analytics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@yourdomain.com or create an issue in this repository.

## Acknowledgments

- Instagram Graph API Documentation
- Next.js Documentation
- Tailwind CSS Community
- Prisma Documentation
