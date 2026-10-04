import spec from '../data/performance-review-prompt.json' with { type: 'json' };

export const tones = spec.tones;
export const outputTypes = Object.keys(spec.outputs);
export const contextFields = spec.fields;

export function buildPerformanceReviewPrompt(inputs) {
  const read = (key) => String(inputs[key] ?? '').trim().slice(0, 1200) || '[Not supplied]';
  const tone = tones.includes(inputs.tone) ? inputs.tone : tones[0];
  const output = outputTypes.includes(inputs.outputType) ? inputs.outputType : outputTypes[0];
  const context = contextFields.map(([label, key]) => `${label}: ${read(key)}`).join('\n');
  return `ROLE:\n${spec.role}\n\nTASK:\n${spec.task}\n\nCONTEXT:\n${context}\n\nOUTPUT:\nFormat: ${output}\nTone: ${tone}\n${spec.outputs[output]}\n\nSAFEGUARDS:\n${spec.safeguards}`;
}

// Event names are the entire payload. No fields, prompts, identifiers, URLs or notes.
export function trackReviewEvent(eventName) {
  const allowed = ['free_hr_template_download', 'ai_prompt_builder_used', 'ai_prompt_copied', 'full_hr_toolkit_clicked', 'hr_ai_book_clicked'];
  if (!allowed.includes(eventName)) return;
  try {
    if (localStorage.getItem('mlp-analytics-consent') === 'granted' && typeof window.gtag === 'function') {
      window.gtag('event', eventName);
    }
  } catch { /* The tool still works when browser storage is blocked. */ }
}
