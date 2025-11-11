# Resend Email Setup Guide

## 1. Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up / Login
3. Go to API Keys section
4. Create new API key
5. Copy the API key

## 2. Add Domain (Optional but Recommended)

1. In Resend dashboard, go to Domains
2. Add your domain (e.g., yourdomain.com)
3. Verify domain with DNS records
4. Update the `from` email in `/app/api/send-mail/routes.ts`

```typescript
// Change this line:
from: 'Portfolio Contact <onboarding@resend.dev>',

// To your verified domain:
from: 'Portfolio Contact <noreply@yourdomain.com>',
```

## 3. Environment Variables

Add your Resend API key to `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 4. Test the Setup

1. Start development server: `npm run dev`
2. Go to contact form
3. Submit a test message
4. Check your email inbox

## 5. Production Deployment

When deploying to Vercel/Netlify:

1. Add `RESEND_API_KEY` to environment variables
2. If using custom domain, update the `from` email address
3. Deploy the application

## Email Features

✅ Professional HTML email templates
✅ Automatic reply-to setup
✅ Contact information included
✅ Error handling and validation
✅ Gmail inbox delivery