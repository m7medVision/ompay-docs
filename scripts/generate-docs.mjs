import { rm } from 'node:fs/promises';
import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';

const output = './content/docs/api-reference/endpoints';

const openapi = createOpenAPI({
  input: ['./public/openapi.json'],
});

await rm(output, { recursive: true, force: true });

await generateFiles({
  input: openapi,
  output,
  per: 'operation',
  groupBy: 'tag',
  meta: true,
  includeDescription: true,
  addGeneratedComment: true,
});
