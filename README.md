# Subscription-Based SAAS Application Template

A modern web application built with Next.js that provides PDF utilities with a subscription-based access model.

## Tech Stack

- **Frontend**: Next.js
- **Authentication**: Clerk
- **Payments**: Stripe
- **Analytics**: PostHog

## Getting Started

To use this template for your own project, follow these steps:

1. Click "Use this template" > "Create a new repository" button at the top of this repository to make a new repo with this template

1. Clone the repository to your local machine

1. Create a `.env.local` file in the root directory and add the following environment variables:

   ```
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # PostHog Analytics
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_api_key

   # Stripe Payments
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

   To get these keys:

   - **Clerk**: Go to https://dashboard.clerk.com, create a new project, click Configure > API Keys to get the publishable and secret keys
   - **PostHog**: Visit https://us.posthog.com, go to Settings > Project Details to get the project API key
   - **Stripe**: Navigate to https://dashboard.stripe.com/test/apikeys to get the publishable and secret keys

1. Install dependencies:

   ```bash
   npm install
   ```

1. Run the development server:

   ```bash
   npm run dev
   ```

1. Clean up and customize the template:

   - Remove PDF components and pages
   - Run `npx depcheck` to check for unused dependencies and remove them from package.json (except @types/node, autoprefixer, and postcss)
   - Delete the `.next` and `node_modules` directories as well as the `package-lock.json`
   - Run `npm install` to fully remove the unused dependencies
   - Update app name in:
     - package.json
     - layout.tsx
     - not-found.tsx
   - Update navbar links
   - Add terms of use/service, privacy policy, and contact page
   - Set up a new directory named `public` at the root of the project
   - Create and add your logo:
     - Design or obtain your logo in PNG format
     - Add the PNG file to the `public` directory
     - Convert the PNG to ICO format:
       - Visit [cloudconvert.com/png-to-ico](https://cloudconvert.com/png-to-ico) to convert a PNG file to an ico file
     - Replace the existing `favicon.ico` in the `app` directory with your new one
   - Update the icons app metadata in `app/layout.tsx` with the paths to point to your new `.PNG` files in the public directory
     - This is so the icon appears in the dev environment

1. Add features to the app

1. When done adding features, check for build issues:

   ```bash
   npm run build
   ```
1. Add additional private environment variables (not prefixed with NEXT_PUBLIC_) in the build commands section of the amplify.yml file

1. Add, commit, and push the code:

1. Deploy your application:
   - Purchase a custom domain from a service like GoDaddy
   - Create a production instance of your Clerk project by clicking "Development" at the top of the Clerk dashboard and selecting "Create production instance"
   - On the Clerk production instance dashboard, navigate to Configure -> API keys then proceed to next step
   - Deploy app on [AWS Amplify](https://us-east-2.console.aws.amazon.com/amplify/apps) and set Environment Variables to everything from the `.env.local` file
      - Use the public and secret keys from the Clerk production dashboard instead of the development ones in the `.env.local` file
   - Deploy application
   - Use purchased custom domain in deployed Amplify app using this [tutorial](https://www.youtube.com/watch?v=uaG2mMYLI68)
   - On the Clerk production instance dashboard, navigate to Configure -> Domains then proceed to next step
   - Navigate to [AWS Route 53](https://us-east-1.console.aws.amazon.com/route53/v2/) to add the Clerk domain records. From the Route 53 dashboard, navigate to Hosted Zones -> select the app domain -> Create Record -> Simple routing -> Next -> Define simple record
      - Add a simple record for each Clerk record required individually and then click "Create records"
         - Clerk will say: "Add a `CNAME` record for `clerk` pointing to `frontend-api.clerk.services`"
         - In the Route 53 form:
            - `clerk` goes in the `Record name`/`subdomain` field
            - `CNAME` gets selected from the `Record type` dropdown
            - `frontend-api.clerk.services` gets selected from the `Value/Route traffic to` field
      - When done adding records, click "Create records"
   - Click "Verify configuration" on the domains page in Clerk to verify records were found
   - Get the client ID and Client Secret for Google SSO connection by following the steps [here](https://clerk.com/docs/authentication/social-connections/google#create-a-google-developer-project)
      - Paste those values in at the Clerk production dashboard at Configure -> SSO connections and clicking the Google social provider card and click Update
   - Done!

## Features

- User authentication and authorization
- Subscription management
- PDF utilities
- Analytics tracking
- Modern, responsive UI

## License

This project is available as a template for building your own SAAS applications.
