import { llmsIndex } from '../lib/llms';
export async function GET() {
  return new Response(await llmsIndex(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
