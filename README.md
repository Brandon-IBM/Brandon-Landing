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

The static site is generated in `dist/`. Asset URLs are relative, so the same build works at a domain root or a repository path such as `https://username.github.io/repository/`.

## Host on GitHub Pages

1. Create a GitHub repository and push this project's source to its `main` or `master` branch. Include the `.github/workflows/deploy-pages.yml` file and `package-lock.json`. The `.gitignore` excludes generated files and dependencies.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages → Run workflow**, or push another commit to the default branch.
4. Once the workflow completes, open the site URL shown under **Settings → Pages** or in the deployment.

The workflow builds and deploys the site automatically on future pushes to `main` or `master`. No deployment tokens, repository-name configuration, or extra packages are needed. For a different default branch, update the workflow's `branches` list.

The page requests no search indexing. GitHub Pages is normally publicly accessible; a private repository and the `Internal` label do not restrict site access. GitHub Enterprise Cloud supports privately published project sites when configured for eligible organization repositories.

## Content

Edit `src/content.ts` to change all visible copy and page metadata.

The three examples distinguish working software from current engineering opportunities. They do not claim production adoption, client delivery, revenue, or measured business impact. The Financial Services outcome is described as a meeting invitation.

## Print and PDF

Use the browser's Print command, choose **Save as PDF**, and disable browser headers and footers. The print stylesheet fits on one US Letter or A4 page at 100% scale with its defined margins. Inter is self-hosted, so exporting does not require an external font service.

`Brandon-Nova-Capability-Brief.pdf` is an exported snapshot. Export again after changing the copy.
