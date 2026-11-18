# Brandon Nova / Internal capability brief

A concise internal brief for the IBM Southwest Gas account team. Built with React, TypeScript, Tailwind CSS, and Vite. No backend, external services, animation, or added dependencies.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`. The page requests no search indexing because this is an internal brief. Hosting access controls should follow the account team's internal sharing requirements.

## Content and contact

Edit `src/content.ts` to change all visible copy and page metadata. Set `contact.email` to a verified email address to show a direct email link. Leave it empty to show only the name and IBM Consulting affiliation. No contact address or URL is invented.

The three examples distinguish working software from current engineering opportunities. They do not claim production adoption, client delivery, revenue, or measured business impact. The Financial Services outcome is described as a meeting invitation.

## Print and PDF

Use the browser's Print command, choose **Save as PDF**, and disable browser headers and footers. The print stylesheet fits on one US Letter or A4 page at 100% scale with its defined margins. Inter is self-hosted, so exporting does not require an external font service.

`Brandon-Nova-Capability-Brief.pdf` is an exported snapshot. Export again after changing the copy.
