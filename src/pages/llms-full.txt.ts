import { llmsFull } from '../lib/llms';
export async function GET() {
  return new Response(await llmsFull(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
