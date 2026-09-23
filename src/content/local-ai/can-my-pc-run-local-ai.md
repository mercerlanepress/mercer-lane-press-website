---
title: "Can My PC Run Local AI? A Practical RAM, VRAM and Model-Size Check"
description: "A plain-English hardware-fit check for local AI on Windows, including RAM, VRAM, storage, model size, quantisation, context, and when not to upgrade yet."
published: 2026-09-23
summary: "Start with the PC you already own. Record RAM, GPU/VRAM and free storage, then choose a model class that leaves useful headroom instead of loading the largest model that can technically start."
order: 1
related:
  - set-up-local-ai-with-lm-studio
  - local-ai-slow-freezing-out-of-memory
  - does-local-ai-keep-data-private
---

You do not need to buy a new graphics card before trying local AI.

The first job is simpler: find out what your current computer has, choose a modest model that fits comfortably, and test whether the waiting time and answer quality are acceptable for the work you actually want to do.

## Write down four numbers first

On Windows, open **Task Manager → Performance** and record:

- installed system RAM;
- GPU model;
- dedicated GPU memory, if the computer has a discrete GPU;
- free storage on the drive where model files will live.

Also note how much RAM the computer is already using before the AI application starts.

A machine with 16 GB of installed RAM but a large browser session, sync software, virtual machines, and other background applications does not have the same practical headroom as a clean 16 GB system.

## Understand the three memory pools

Local AI uses several different resources.

### Storage

Storage holds model files when they are not running.

A single model can occupy several gigabytes. Keeping multiple models, runtimes, document indexes, and temporary downloads can consume much more space than expected.

If you plan to test several models, leave comfortable free disk space rather than running the system drive close to full.

### System RAM

System RAM is shared by Windows and your applications.

CPU-based inference and hybrid CPU/GPU setups can consume a large amount of system memory. If available RAM approaches zero, Windows may start using disk as emergency memory and the entire computer can feel sluggish.

### VRAM

VRAM is dedicated memory on a discrete graphics card.

When more of a model fits in VRAM, generation can be much faster. But VRAM is not the only limit: system RAM, context length, model format, runtime overhead, and the rest of the workload still matter.

## A conservative starting ladder

These are starting ranges, not guarantees.

Model architecture, quantisation, context length, runtime overhead, and application behaviour all change memory use.

### 8 GB RAM, no dedicated GPU

Start with very small models, roughly in the 1B–3B class, and keep context short.

Avoid beginning with 7B+ models, large document jobs, or heavy multitasking.

### 16 GB RAM, no or low VRAM

A 3B–4B model is a sensible first target.

Some 7B-class models may work in efficient quantisations if the application shows enough headroom, but the test is whether the computer remains usable and the model answers quickly enough for the task.

### 16 GB RAM with roughly 6–8 GB VRAM

A 7B–8B-class model is a reasonable first experiment when the software reports a comfortable fit.

Do not assume a much larger model will stay fully in VRAM just because the application can start it.

### 32 GB RAM with roughly 8–12 GB VRAM

Testing 7B–14B-class models becomes more practical, depending on quantisation and context.

The correct default may still be the smaller model if it is faster and already performs your real tasks well.

### Stronger systems

With more RAM and VRAM, larger quantised models become practical to test.

That does not turn parameter count into a quality score. A larger model that is slow, unstable, or unnecessary for your work is not automatically the better choice.

## Quantisation changes the fit

Quantisation stores model weights with fewer bits so the file and memory demand are lower.

You may see labels such as Q4, Q5, or Q8. For a beginner, a 4-bit or 5-bit build that the application marks as a comfortable fit is often a sensible place to start.

Do not chase higher precision if doing so causes memory pressure or heavy swapping.

## Context is part of the memory budget

A model can fit at a short context and fail at a much larger one.

Context includes the current prompt, conversation history, system instructions, and retrieved document text. Increasing it can be useful for longer jobs, but it also raises memory use.

Use the smallest context that comfortably covers the task. Increase it only when a real test shows that important information is being lost.

## Run a five-task benchmark before spending money

Use tasks that resemble your normal work, for example:

1. rewrite a rough email;
2. summarize a one-page memo;
3. extract dates and actions from notes;
4. turn a short policy paragraph into a checklist;
5. answer a few questions from a local document.

Score:

- factual preservation;
- instruction following;
- usefulness after review;
- speed;
- stability.

If the current PC handles those tasks well enough, you already have useful evidence that an upgrade is unnecessary.

## Do not upgrade until the bottleneck is clear

A hardware purchase makes more sense when all four statements are true:

- the current setup already provides useful value;
- you can name the task that is limited;
- you know which component is actually limiting it;
- the time or capability gain matters enough to justify the cost.

A GPU does not solve a storage shortage. More VRAM does not automatically solve insufficient system RAM. A faster machine does not guarantee better factual accuracy.

Before buying hardware, test cheaper changes first:

- close memory-heavy applications;
- start a fresh chat;
- reduce context;
- try a smaller quantisation;
- try a smaller model;
- test a different model family at a similar size.

Then measure again.

For the next step, use the [beginner LM Studio setup guide](/local-ai/set-up-local-ai-with-lm-studio/) and keep the first installation deliberately small.
