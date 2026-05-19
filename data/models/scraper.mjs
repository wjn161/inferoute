// Final scraper v3 - hybrid JSON-LD + RSC payload parser
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://ofox.ai/zh/models';
const OUTPUT_DIR = '/Users/wujiannan/Documents/inferoute/data/models';

const MODELS = [
  { provider: 'deepseek', model: 'deepseek-v4-flash' },
  { provider: 'deepseek', model: 'deepseek-v4-pro' },
  { provider: 'deepseek', model: 'deepseek-v3.2' },
  { provider: 'openai', model: 'gpt-5.5' },
  { provider: 'openai', model: 'gpt-5.4' },
  { provider: 'openai', model: 'gpt-5.4-pro' },
  { provider: 'openai', model: 'gpt-5.4-mini' },
  { provider: 'openai', model: 'gpt-5.4-nano' },
  { provider: 'openai', model: 'gpt-5.3-chat' },
  { provider: 'openai', model: 'gpt-5.3-codex' },
  { provider: 'openai', model: 'gpt-5.2-codex' },
  { provider: 'openai', model: 'gpt-5.2' },
  { provider: 'openai', model: 'gpt-5.1-codex-max' },
  { provider: 'openai', model: 'gpt-5.1-codex-mini' },
  { provider: 'openai', model: 'gpt-5.1' },
  { provider: 'openai', model: 'gpt-5' },
  { provider: 'openai', model: 'gpt-5-mini' },
  { provider: 'openai', model: 'gpt-5-nano' },
  { provider: 'openai', model: 'gpt-4.1' },
  { provider: 'openai', model: 'gpt-4.1-mini' },
  { provider: 'openai', model: 'gpt-4o-mini' },
  { provider: 'openai', model: 'gpt-4o' },
  { provider: 'openai', model: 'gpt-image-2' },
  { provider: 'openai', model: 'gpt-image-1.5' },
  { provider: 'openai', model: 'text-embedding-3-large' },
  { provider: 'openai', model: 'text-embedding-3-small' },
  { provider: 'bailian', model: 'qwen3.6-27b' },
  { provider: 'bailian', model: 'qwen3.6-flash' },
  { provider: 'bailian', model: 'qwen3.6-plus' },
  { provider: 'bailian', model: 'qwen3.6-max-preview' },
  { provider: 'bailian', model: 'qwen3.5-122b-a10b' },
  { provider: 'bailian', model: 'qwen3.5-27b' },
  { provider: 'bailian', model: 'qwen3.5-35b-a3b' },
  { provider: 'bailian', model: 'qwen3.5-397b-a17b' },
  { provider: 'bailian', model: 'qwen3.5-flash' },
  { provider: 'bailian', model: 'qwen3.5-plus' },
  { provider: 'bailian', model: 'qwen3-max' },
  { provider: 'bailian', model: 'qwen3-coder-next' },
  { provider: 'bailian', model: 'qwen3-coder-plus' },
  { provider: 'bailian', model: 'qwen3-coder-flash' },
  { provider: 'bailian', model: 'qwen-plus' },
  { provider: 'bailian', model: 'qwen-flash' },
  { provider: 'bailian', model: 'qwen-turbo' },
  { provider: 'bailian', model: 'qwen-max' },
  { provider: 'bailian', model: 'qwen-vl-max' },
  { provider: 'bailian', model: 'text-embedding-v4' },
  { provider: 'google', model: 'gemini-3.1-pro-preview' },
  { provider: 'google', model: 'gemini-3.1-flash-lite-preview' },
  { provider: 'google', model: 'gemini-3.1-flash-image-preview' },
  { provider: 'google', model: 'gemini-3-pro-preview' },
  { provider: 'google', model: 'gemini-3-pro-image-preview' },
  { provider: 'google', model: 'gemini-3-flash-preview' },
  { provider: 'google', model: 'gemini-2.5-pro' },
  { provider: 'google', model: 'gemini-2.5-flash' },
  { provider: 'google', model: 'gemini-2.5-flash-lite' },
  { provider: 'google', model: 'gemini-2.5-flash-image' },
  { provider: 'google', model: 'gemini-embedding-2-preview' },
  { provider: 'anthropic', model: 'claude-opus-4.7' },
  { provider: 'anthropic', model: 'claude-opus-4.6' },
  { provider: 'anthropic', model: 'claude-opus-4.5' },
  { provider: 'anthropic', model: 'claude-sonnet-4.6' },
  { provider: 'anthropic', model: 'claude-sonnet-4.5' },
  { provider: 'anthropic', model: 'claude-haiku-4.5' },
  { provider: 'volcengine', model: 'doubao-seed-2.0-code' },
  { provider: 'volcengine', model: 'doubao-seed-2.0-lite' },
  { provider: 'volcengine', model: 'doubao-seed-2.0-mini' },
  { provider: 'volcengine', model: 'doubao-seed-2.0-pro' },
  { provider: 'volcengine', model: 'doubao-seed-1-8' },
  { provider: 'volcengine', model: 'doubao-seed-1-6' },
  { provider: 'volcengine', model: 'doubao-seed-1-6-flash' },
  { provider: 'volcengine', model: 'doubao-seed-1-6-vision' },
  { provider: 'volcengine', model: 'doubao-seedream-5.0-lite' },
  { provider: 'volcengine', model: 'doubao-seedream-4.5' },
  { provider: 'z-ai', model: 'glm-5.1' },
  { provider: 'z-ai', model: 'glm-5' },
  { provider: 'z-ai', model: 'glm-5-turbo' },
  { provider: 'z-ai', model: 'glm-5v-turbo' },
  { provider: 'z-ai', model: 'glm-4.7-flashx' },
  { provider: 'z-ai', model: 'glm-4.7-flash:free' },
  { provider: 'z-ai', model: 'glm-4.7' },
  { provider: 'z-ai', model: 'glm-4.6' },
  { provider: 'minimax', model: 'minimax-m2.7' },
  { provider: 'minimax', model: 'minimax-m2.7-highspeed' },
  { provider: 'minimax', model: 'minimax-m2.5' },
  { provider: 'minimax', model: 'minimax-m2.5-lightning' },
  { provider: 'minimax', model: 'm2-her' },
  { provider: 'minimax', model: 'minimax-m2.1' },
  { provider: 'minimax', model: 'minimax-m2.1-lightning' },
  { provider: 'minimax', model: 'minimax-m2' },
  { provider: 'moonshotai', model: 'kimi-k2.6' },
  { provider: 'moonshotai', model: 'kimi-k2.5' },
  { provider: 'x-ai', model: 'grok-4.20' },
  { provider: 'x-ai', model: 'grok-4.1-fast' },
];

const BRAND_MAP = {
  'deepseek': 'DeepSeek', 'openai': 'OpenAI', 'bailian': 'Qwen',
  'google': 'Google', 'anthropic': 'Anthropic', 'volcengine': 'Doubao',
  'z-ai': 'Zhipu', 'minimax': 'Minimax', 'moonshotai': 'MoonshotAI', 'x-ai': 'Grok',
};

function parseDisplayValue(display) {
  if (!display) return null;
  const m = display.match(/([\d.]+)\s*([KMB]?)/i);
  if (!m) return null;
  const num = parseFloat(m[1]);
  const u = (m[2] || '').toUpperCase();
  if (u === 'K') return num * 1000;
  if (u === 'M') return num * 1000000;
  if (u === 'B') return num * 1000000000;
  return num;
}

function extractData(html, provider, modelName) {
  const modelId = `${provider}/${modelName}`;
  const now = new Date().toISOString();
  const r = {
    model_id: modelId, display_name: null, brand: BRAND_MAP[provider] || provider,
    model_type: null, description: null, release_date: null,
    specifications: { context_window: null, context_window_display: null, max_output_tokens: null, max_output_tokens_display: null },
    capabilities: [], input_modalities: [], output_modalities: [],
    supported_protocols: [], providers: [], pricing: {},
    related_models: { same_brand: [], similar: [] },
    faq: [], code_examples: { python: null, curl: null, nodejs: null },
    scraped_at: now,
  };

  // 1. Parse JSON-LD schemas
  const ldJsons = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const ld of ldJsons) {
    try {
      const data = JSON.parse(ld[1]);
      if (data['@type'] === 'Product') {
        r.display_name = data.name || r.display_name;
        r.description = data.description || r.description;
        if (data.brand?.name) r.brand = BRAND_MAP[data.brand.name] || data.brand.name;
        if (data.category) r.model_type = data.category.toLowerCase();
      }
      if (data['@type'] === 'FAQPage' && data.mainEntity) {
        r.faq = data.mainEntity.map(q => ({
          question: q.name,
          answer: q.acceptedAnswer?.text || ''
        }));
      }
    } catch (e) {}
  }

  // 2. Parse RSC payload for detailed info
  // Pricing - pattern: "children":"TYPE"}]..."children":"$$PRICE/UNIT"}
  const priceTypes = [
    ['输入 Token', 'input_token'], ['输出 Token', 'output_token'],
    ['缓存读取', 'cache_read'], ['缓存写入', 'cache_write'],
    ['图片输入', 'image_input'], ['音频输入', 'audio_input'],
    ['视频输入', 'video_input'],
  ];
  for (const [label, key] of priceTypes) {
    const pat = new RegExp(`"children":"${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]{0,200}?"children":"(\\$\\$[\\d.]+\\/[KMB]|Free|免费)"`, 'i');
    const pm = html.match(pat);
    if (pm) {
      const priceStr = pm[1].replace('$$', '$');
      const numMatch = priceStr.match(/\$([\d.]+)\/([KMB])/);
      if (numMatch) {
        const price = parseFloat(numMatch[1]);
        const unit = numMatch[2] === 'M' ? 'per_million_tokens' : numMatch[2] === 'K' ? 'per_thousand_tokens' : 'per_billion_tokens';
        r.pricing[key] = { price, unit, display: priceStr };
      } else if (/Free|免费/i.test(priceStr)) {
        r.pricing[key] = { price: 0, unit: 'per_million_tokens', display: 'Free' };
      }
    }
  }

  // Context window & max output
  const ctxPat = html.match(/"children":\["([^"]+?)","\s*","上下文窗口"\]/);
  if (ctxPat) {
    r.specifications.context_window_display = ctxPat[1];
    r.specifications.context_window = parseDisplayValue(ctxPat[1]);
  }
  if (!r.specifications.context_window) {
    const ctxAlt = html.match(/"children":"(\d+(?:\.\d+)?[KMB])[\s\\]*上下文/i) || html.match(/(\d+(?:\.\d+)?[KMB])","\\s*","上下文/i);
    if (ctxAlt) { r.specifications.context_window_display = ctxAlt[1]; r.specifications.context_window = parseDisplayValue(ctxAlt[1]); }
  }

  const outPat = html.match(/"children":\["([^"]+?)","\s*","最大输出[^"]*"\]/);
  if (outPat) {
    r.specifications.max_output_tokens_display = outPat[1];
    r.specifications.max_output_tokens = parseDisplayValue(outPat[1]);
  }
  if (!r.specifications.max_output_tokens) {
    const outAlt = html.match(/"children":"(\d+(?:\.\d+)?[KMB])[\s\\]*最大输出/i) || html.match(/(\d+(?:\.\d+)?[KMB])","\\s*","最大输出/i);
    if (outAlt) { r.specifications.max_output_tokens_display = outAlt[1]; r.specifications.max_output_tokens = parseDisplayValue(outAlt[1]); }
  }

  // Release date
  const dateMatch = html.match(/"(\d{4}-\d{2}-\d{2})"[^}]{0,50}?"发布|发布日期[^"]*?"[^"]*?"(\d{4}-\d{2}-\d{2})"/);
  if (dateMatch) r.release_date = dateMatch[1] || dateMatch[2];
  if (!r.release_date) {
    // Look for date near "发布日期" text in RSC payload
    const dateArea = html.match(/发布日期[\s\S]{0,200}/);
    if (dateArea) {
      const d = dateArea[0].match(/(\d{4}-\d{2}-\d{2})/);
      if (d) r.release_date = d[1];
    }
  }

  // Protocols - look for "capitalize" children in protocol section
  const protoSection = html.match(/支持的协议[\s\S]{0,1000}?(?:可用供应商|能力)/);
  if (protoSection) {
    const protos = [...protoSection[0].matchAll(/"capitalize","children":"(\w+)"/g)];
    for (const p of protos) {
      if (!r.supported_protocols.includes(p[1])) r.supported_protocols.push(p[1]);
    }
  }

  // Providers - in vendor section
  const vendorSection = html.match(/可用供应商[\s\S]{0,2000}?(?:能力|lucide-sparkles)/);
  if (vendorSection) {
    // Look for provider names in span children
    const vendors = [...vendorSection[0].matchAll(/"children":"([A-Za-z][A-Za-z0-9 ]+)"/g)];
    const validVendors = new Set(['DeepSeek', 'OpenAI', 'Anthropic', 'Google', 'Azure', 'Bedrock', 'BaiLian', 'Volcengine', 'MoonshotAI', 'Zhipu', 'Minimax', 'GoogleCloud', 'VertexAI', 'Aliyun', 'Moonshot']);
    const typeMap = { 'Azure': 'cloud', 'Bedrock': 'cloud', 'BaiLian': 'cloud', 'Volcengine': 'cloud', 'GoogleCloud': 'cloud', 'VertexAI': 'cloud', 'Aliyun': 'cloud' };
    for (const v of vendors) {
      const name = v[1].trim();
      if (validVendors.has(name) && !r.providers.find(p => p.name === name)) {
        r.providers.push({ name, type: typeMap[name] || 'direct' });
      }
    }
  }

  // Capabilities - look for capability keys in the page
  const capSection = html.match(/lucide-sparkles[\s\S]{0,3000}?(?:<\/script>|\\n"\]\))/);
  const capKeys = ['function_calling', 'prompt_caching', 'web_search', 'reasoning', 'vision', 'audio', 'video', 'pdf', 'streaming'];
  if (capSection) {
    for (const cap of capKeys) {
      if (capSection[0].includes(`"${cap}"`)) r.capabilities.push(cap);
    }
  } else {
    // Fallback: search entire page
    for (const cap of capKeys) {
      // Only count if it appears as a key in the capabilities section
      const capPat = new RegExp(`"${cap}"[^}]*?"(函数调用|提示缓存|网页搜索|推理|视觉|音频|视频|PDF|流式)"`);
      if (capPat.test(html)) r.capabilities.push(cap);
    }
  }
  if (r.model_type === 'chat' && !r.capabilities.includes('chat')) r.capabilities.unshift('chat');

  // Modalities
  if (r.model_type === 'chat') {
    r.input_modalities = ['text']; r.output_modalities = ['text'];
    if (r.capabilities.includes('vision')) r.input_modalities.push('image');
    if (r.capabilities.includes('audio')) r.input_modalities.push('audio');
    if (r.capabilities.includes('video')) r.input_modalities.push('video');
  } else if (r.model_type === 'embedding') {
    r.input_modalities = ['text']; r.output_modalities = ['embedding'];
  } else if (r.model_type === 'image') {
    r.input_modalities = ['text', 'image']; r.output_modalities = ['image'];
  } else {
    r.input_modalities = ['text']; r.output_modalities = ['text'];
  }

  // Related models
  const relSection = html.match(/相关模型[\s\S]*?(?=常见问题|FAQ|$)/);
  if (relSection) {
    // Same brand section
    const sameBrand = relSection[0].match(/更多[\s\S]*?(?=类似模型)/);
    if (sameBrand) {
      const links = [...sameBrand[0].matchAll(/"href":"\/zh\/models\/([^"]+)"[\s\S]*?"text-sm font-medium[^"]*"[^}]*"children":"([^"]+)"/g)];
      for (const l of links) r.related_models.same_brand.push({ model_id: l[1], display_name: l[2] });
    }
    // Similar
    const similar = relSection[0].match(/类似模型[\s\S]*/);
    if (similar) {
      const links = [...similar[0].matchAll(/"href":"\/zh\/models\/([^"]+)"[\s\S]*?"text-sm font-medium[^"]*"[^}]*"children":"([^"]+)"/g)];
      for (const l of links) r.related_models.similar.push({ model_id: l[1], display_name: l[2] });
    }
  }

  // Code examples - from python code pattern in page
  const pyMatch = html.match(/from openai import OpenAI[\s\S]*?print\(response[\s\S]*?\)/);
  if (pyMatch) r.code_examples.python = pyMatch[0].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\t/g, '\t');

  const curlMatch = html.match(/curl[\s\\]+https:\/\/api\.ofox\.ai[\s\S]*?(?=\\n\\n|"\])/);
  if (curlMatch) r.code_examples.curl = curlMatch[0].replace(/\\n/g, '\n').replace(/\\"/g, '"');

  const nodeMatch = html.match(/(?:const|import)[\s\S]*?OpenAI[\s\S]*?console\.log[\s\S]*?(?:\\n\\n|"\])/);
  if (nodeMatch) r.code_examples.nodejs = nodeMatch[0].replace(/\\n/g, '\n').replace(/\\"/g, '"');

  return r;
}

async function fetchModel(provider, model, retries = 3) {
  const url = `${BASE_URL}/${provider}/${model}`;
  for (let i = 0; i < retries; i++) {
    try {
      const resp = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        }
      });
      if (!resp.ok) {
        if (resp.status === 429) { await new Promise(r => setTimeout(r, 5000 * (i + 1))); continue; }
        if (resp.status === 404) return null;
        continue;
      }
      return await resp.text();
    } catch (e) {
      console.error(`  Error: ${e.message}`);
      await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
  }
  return null;
}

async function main() {
  console.log(`Scraping ${MODELS.length} models (v3 - hybrid parser)...`);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const results = [];
  const errors = [];

  for (let i = 0; i < MODELS.length; i++) {
    const { provider, model: modelName } = MODELS[i];
    const modelId = `${provider}/${modelName}`;
    process.stdout.write(`[${i + 1}/${MODELS.length}] ${modelId}...`);

    const html = await fetchModel(provider, modelName);
    if (!html) { errors.push(modelId); console.log(' FAILED'); continue; }

    const data = extractData(html, provider, modelName);
    const filename = `${provider}--${modelName}.json`;
    writeFileSync(join(OUTPUT_DIR, filename), JSON.stringify(data, null, 2));
    
    const priceCount = Object.keys(data.pricing).length;
    const capCount = data.capabilities.length;
    const hasDesc = data.description ? 'D' : '-';
    const hasDate = data.release_date ? 'R' : '-';
    const hasFaq = data.faq.length > 0 ? 'F' : '-';
    console.log(` ${data.display_name || '?'} [P:${priceCount} C:${capCount} ${hasDesc}${hasDate}${hasFaq}]`);
    
    results.push({ model_id: modelId, display_name: data.display_name, brand: data.brand, model_type: data.model_type, file: filename });
    await new Promise(r => setTimeout(r, 500));
  }

  // Generate index
  const providerSet = [...new Set(results.map(r => r.brand))];
  const byProvider = {}; const byType = {};
  for (const r of results) {
    byProvider[r.brand] = (byProvider[r.brand] || 0) + 1;
    if (r.model_type) byType[r.model_type] = (byType[r.model_type] || 0) + 1;
  }
  const index = {
    total_models: results.length,
    scraped_at: new Date().toISOString(),
    models: results,
    providers: providerSet,
    statistics: { by_provider: byProvider, by_type: byType },
  };
  writeFileSync(join(OUTPUT_DIR, '_index.json'), JSON.stringify(index, null, 2));
  console.log(`\nComplete! ${results.length}/${MODELS.length} models. Errors: ${errors.length}`);
  if (errors.length) console.log('Failed:', errors);
}

main().catch(console.error);
