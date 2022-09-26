# Workbench

**Information Architecture and Data Models**

This frontend applications are driven by data models and API and component interfaces. We setup a local database with Docker/Postgres, and design schemas in [Prisma](https://www.prisma.io/), in order generate type definitions and request payload interfaces. This ensures we code with confidence while maintaining the flexibility to swap out and mutate the database schema at will.

**Combined Client / Server Codebase**

We rely heavily on the modern tooling NextJS to build lightweight client/server apps. This allows us to easily design a customized URL pattern for the application, and dynamic RESTful APIs for any type of NodeJS server-side data-fetching, or business logic (eg. authenticated access or long-running processes).

**Design System**

Each application is unique, and requires special attention to detail. The level of detail is most visible in the way we design and build compoents. Designers and developers work together during the development cycle, to standardize [Design Tokens](https://spectrum.adobe.com/page/design-tokens/), using Figma to test and define the tokens, and Tailwind to translate those tokens into CSS classes for components.

---

### [Add multiple environment variables to Vercel](https://blog.doppler.com/how-to-add-multiple-environment-variables-to-vercel)

If you haven’t already, install the Vercel CLI:

```
npm i -g vercel
```

Then link the application codebase on your local machine with your Vercel application by changing into the root directory of your application, then running:

```
vercel link
```

Next, create the environment variables in JSON for a single environment (e.g.Development):

```
// vercel-dev-env-vars.json
{
  "API_SECRET": "d3f5c0a1-2aaf-4e01-b94c-a9a8071896a6",
  "AUTH_TOKEN": "eeb40e34-a9e5-4781-88ef-3a9a63fc3f27"
}
```

In your terminal, define which environment you'll be importing to:

`VERCEL_ENV="development"`

Then run:

```
source <(jq -rj '. | to_entries[] | "echo -n \"\(.value)\" | vercel env add \(.key) $VERCEL_ENV;\n"' vercel-dev-env-vars.json)

```

You'll see the sequential output from the Vercel CLI as each variable is added successfully.
