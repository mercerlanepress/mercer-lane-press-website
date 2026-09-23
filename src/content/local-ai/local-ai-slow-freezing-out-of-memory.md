---
title: "Local AI Slow, Freezing or Out of Memory? Troubleshoot in This Order"
description: "A step-by-step troubleshooting order for local AI problems on Windows: sluggish PCs, slow answers, crashes, context pressure, GPU errors, and document-chat failures."
published: 2026-09-23
summary: "Change the cheapest variable first. Close heavy apps, start a fresh chat, reduce context, check GPU offload, try a smaller quantisation or model, then consider updates or hardware."
order: 5
related:
  - can-my-pc-run-local-ai
  - set-up-local-ai-with-lm-studio
  - use-local-ai-with-private-documents
---

Most beginner local-AI problems fall into a small number of patterns.

The fastest way to make troubleshooting harder is to change several settings at once.

Use a fixed order, test after each change, and keep a short fault log so you can reverse what did not help.

## First: watch the failure while it happens

Open **Task Manager** beside the AI application.

Watch:

- system RAM used and available;
- dedicated GPU memory, if a discrete GPU is involved;
- CPU activity;
- whether Windows begins heavy paging;
- whether the application appears active or stalled.

Do not diagnose from one number alone.

A local model can use both CPU and GPU, and Windows can use shared system memory for graphics without that being equivalent to additional dedicated VRAM.

## Symptom: the whole PC becomes sluggish

A common cause is that the model plus context is using too much system memory.

When RAM is exhausted, Windows may begin swapping heavily to disk.

### First test

Close memory-heavy applications that are not needed.

If the system becomes usable, you have evidence that the setup needs more headroom.

### Next step

If closing other apps is not enough:

- start a fresh chat;
- reduce context if you increased it;
- try a smaller quantisation;
- try a smaller model.

Do not treat "the model loaded" as proof that it fits comfortably.

## Symptom: the model loads but answers painfully slowly

Possible causes include:

- CPU-only inference;
- a model too large for the available GPU;
- partial GPU offload;
- thermal throttling;
- a model that is simply beyond the computer's comfortable range.

### First test

Run the same prompt with a smaller fallback model.

If the smaller model is dramatically faster, the application may be fine and the larger model may simply be a poor fit.

The decision then becomes whether the larger model produces enough additional value to justify the wait.

## Symptom: the application crashes while loading a model

Do not begin by reinstalling everything.

### First test

Try a known smaller compatible model.

If that loads, memory pressure or the candidate model/file is more likely than a complete application failure.

If no model loads, then check current vendor guidance for:

- hardware requirements;
- runtime status;
- GPU drivers;
- application updates.

A reinstall is a later diagnostic, not the first one.

## Symptom: answers get worse in a long chat

Conversation history consumes context.

As the session grows, older material may be dropped, summarized, or overshadowed.

### First test

Start a fresh chat.

Give it a concise briefing containing the facts and instructions that still matter.

If performance improves, context pressure was part of the problem.

Do not treat one endless conversation as permanent memory.

## Symptom: a GPU error appears while system RAM is still available

The limiting resource may be VRAM rather than total system memory.

### First test

If the application supports it, reduce GPU offload or return to its automatic/recommended setting.

Then retry the same prompt.

If that helps, dedicated GPU memory was probably the immediate constraint.

## Symptom: document chat gives irrelevant or incorrect answers

The problem may not be model size.

Possible causes include:

- poor text extraction;
- OCR errors;
- the wrong chunks being retrieved;
- a vague question;
- a weak model for the synthesis step;
- obsolete or conflicting files in the source set.

### First test

Ask for one distinctive fact you can locate manually.

Then ask the system to identify the supporting section heading.

If it cannot reliably locate known material, fix document ingestion and source-set quality before changing hardware.

See the [private-document workflow guide](/local-ai/use-local-ai-with-private-documents/) for navigation, absence, and conflict tests.

## Symptom: the local session suddenly needs internet access

A cloud or online feature may be active, or the application may still need a runtime/model component that was not downloaded.

### First test

Disconnect the network and retry a basic prompt using an already-downloaded local model.

If that fails, confirm:

- the selected model is local;
- the runtime is installed;
- web search or hosted-model mode is not active;
- all required dependencies were downloaded while connected.

## Use the cheapest troubleshooting order

When the system misbehaves, change variables in this order:

1. close memory-heavy applications you do not need;
2. start a fresh chat;
3. reduce context if it was increased;
4. reduce GPU offload or use the automatic setting if VRAM appears to be the limit;
5. try a smaller quantisation or smaller model;
6. update the application/runtime only when the problem and current vendor guidance point that way;
7. consider hardware last.

This order helps prevent an expensive response to a configuration problem.

## Keep a short fault log

Record:

- date;
- application version;
- model;
- quantisation;
- context setting;
- approximate RAM/VRAM use;
- symptom;
- what you changed;
- whether it helped.

Troubleshooting becomes much faster when you know what the last successful setup was.

## Know when to stop

Sometimes the result is simply that the desired model is too large for the computer.

That is a useful answer.

Use:

- a smaller model;
- a more tightly defined prompt;
- a shorter context;
- a different workflow;
- an approved cloud model for the task that exceeds the local setup.

A stable local model that handles most of your routine work can be more valuable than a larger model that repeatedly freezes the machine.

Before buying hardware, return to the [PC fit and upgrade check](/local-ai/can-my-pc-run-local-ai/) and measure the bottleneck on real tasks.
