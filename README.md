<div align="center">
  <a href="https://www.monocloud.com?utm_source=github&utm_medium=express_backend_quickstart" target="_blank" rel="noopener noreferrer">
    <picture>
      <img src="https://raw.githubusercontent.com/monocloud/express-backend-quickstart/refs/heads/main/banner.svg" alt="MonoCloud Banner">
    </picture>
  </a>
  <div align="right">
    <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/:license-MIT-blue.svg?style=flat" alt="License: MIT" />
    </a>
  </div>
</div>

<br />

## Express Backend Quickstart

A **minimal Express example** showing how to protect API routes with access token validation using MonoCloud.

## What this repo shows

- MonoCloud access token validation with Express
- Global route protection via middleware
- Accessing the authenticated user's claims

Built with [**`@monocloud/backend-node`**](https://www.npmjs.com/package/@monocloud/backend-node).

## Prerequisites

Before you begin:

1. In the [MonoCloud Dashboard](https://dashboard.monocloud.com/), create a new **API**
2. Set the **Audience** (for example `https://api.example.com`) — this uniquely identifies your API
3. Add a scope named `example-api` and mark the scope as a default scope

## Configure environment variables

This repo includes a `.env` template. Replace the placeholders with values from your API:

```bash
MONOCLOUD_BACKEND_TENANT_DOMAIN=https://<your-domain>
MONOCLOUD_BACKEND_AUDIENCE=https://<your-api-identifier>
```

> Do not commit real secrets. This file is for local development only.

## Run locally

```bash
npm install
npm start
```

The server starts on `http://localhost:3000`.

## Test

```bash
curl -H "Authorization: Bearer <your-access-token>" http://localhost:3000/api/protected
```

## 📘 Learn more

- **Express Quickstart:** [https://www.monocloud.com/docs/quickstarts/express-backend](https://www.monocloud.com/docs/quickstarts/express-backend?utm_source=github&utm_medium=express_backend_quickstart)
- **Express SDK Docs:** [https://www.monocloud.com/docs/sdks/express-backend](https://www.monocloud.com/docs/sdks/express-backend/index?utm_source=github&utm_medium=express_backend_quickstart)
- **API Reference:** [https://monocloud.github.io/auth-js](https://monocloud.github.io/auth-js/modules/_monocloud_backend-node.html?utm_source=github&utm_medium=express_backend_quickstart)

## 🤝 Contributing & Support

### Issues & Feedback

- Use **GitHub Issues** for bug reports and feature requests.
- For tenant or account-specific help, contact MonoCloud Support through your dashboard.

### Security

Do **not** report security issues publicly. Please follow the contact instructions at: [https://www.monocloud.com/contact](https://www.monocloud.com/contact?utm_source=github&utm_medium=express_backend_quickstart)

## License

Licensed under the **MIT License**. See the included [`LICENSE`](./LICENSE) file.
