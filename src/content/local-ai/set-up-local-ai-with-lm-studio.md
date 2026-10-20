---
title: "How to Set Up Local AI on Windows With LM Studio"
description: "A beginner setup route for local AI on a Windows PC using LM Studio: choose one model, test hardware fit, run a smoke test, and verify offline behaviour."
published: 2026-09-23
summary: "Use one desktop application, one modest model, and one repeatable task. Download, load, test, verify, and record what worked before exploring advanced settings."
order: 2
related:
  - can-my-pc-run-local-ai
  - does-local-ai-keep-data-private
  - local-ai-slow-freezing-out-of-memory
---

## Set up LM Studio on Windows: the short version

**Install LM Studio from its official site, download one model that fits your PC, load it in Chat, then test a simple prompt before using your own documents.** Downloading a model stores the file; loading it makes the model ready to answer.

| Stage | What success looks like |
| --- | --- |
| Check the PC | The application supports your hardware and there is memory left for Windows. |
| Download | One chosen model finishes downloading and appears in your local library. |
| Load | The model loads without making the PC unresponsive. |
| Test | A short prompt produces a usable answer with the requested format. |
| Verify | The downloaded model works in your offline test and you understand the privacy boundary. |

Use the steps below for a first baseline. The [official LM Studio getting-started guide](https://lmstudio.ai/docs/app/basics) covers the current interface.

## Before you install anything

First complete the [PC hardware-fit check](/local-ai/can-my-pc-run-local-ai/).

Record:

- system RAM;
- GPU and dedicated VRAM, if present;
- free storage;
- normal background memory use.

LM Studio's [current Windows requirements](https://lmstudio.ai/docs/app/system-requirements) recommend at least 16 GB RAM and 4 GB dedicated VRAM; x64 CPUs require AVX2 support. Recommendations are not a promise that a particular model will fit. Check application compatibility separately from the memory needed for your chosen model.

## Step 1: install from the official source

Use the [official LM Studio download page](https://lmstudio.ai/download) and choose the Windows build for your system.

If the computer has a small system drive and a larger secondary drive, decide where model files should be stored before downloading several gigabytes of data.

## Step 2: choose one mainstream instruct/chat model

Do not start with the largest model in the catalogue.

Look for a general-purpose instruct or chat model and use the application's device-fit information.

If several quantisations are offered, a 4-bit or 5-bit option that fits comfortably is a practical starting point.

The objective is not to prove that the biggest file can load. The objective is to keep Windows responsive while the model performs a useful task.

## Step 3: download one model completely

Model downloads can be several gigabytes.

Let the download finish before testing. In the current interface, use **Discover** to find and download a model, then **Chat** and the model loader to select the downloaded model. A completed download does not mean the model is already loaded.

Keep Task Manager open while the model loads.

If available memory collapses and the whole PC becomes sluggish, unload the model and step down in size before changing advanced settings.

## Step 4: run a three-prompt smoke test

Use simple prompts that test basic instruction following.

For example:

1. Draft a short professional email declining a meeting and offering two alternatives.
2. Summarize a paragraph you wrote yourself into five factual bullets.
3. Explain RAM versus storage to a non-technical adult.

You are not testing whether the local model is smarter than a leading cloud system.

You are checking whether it is responsive, follows format instructions, and preserves supplied facts closely enough for practical use.

## Step 5: run one factual-preservation test

Give the model a short source block that contains names, dates, and numbers.

Ask it to extract those values without changing them.

If the answer is fluent but alters factual details, do not make that model your default for factual work.

A useful model needs both acceptable quality and acceptable reliability for the tasks you intend to give it.

## Step 6: test the local session offline

After the model and required runtime are downloaded:

1. run a normal prompt while connected;
2. close the application;
3. temporarily disconnect Wi-Fi or Ethernet;
4. reopen the application;
5. select the already-downloaded local model;
6. run the same prompt.

If document chat is part of your intended workflow, attach a small local text document and ask a source-only question while still disconnected.

A successful test is evidence that the tested workflow can run without a live network connection.

It is **not** proof that the whole application makes zero network requests when connected, and it says nothing about other software on the computer.

## Step 7: confirm the active model is actually local

A good answer does not prove that the answer was generated locally.

Applications can add optional hosted models or online features over time.

Before using private material, confirm that:

- the selected model is the downloaded local model;
- web search is not enabled unless you intend to use it;
- cloud or hosted model options are not active for that session;
- you understand where the application stores chats and local data.

Use the [privacy-boundary guide](/local-ai/does-local-ai-keep-data-private/) before treating the setup as private.

## Step 8: record the baseline

Write down:

- application version;
- model name;
- quantisation or file variant;
- context setting;
- a rough speed impression;
- whether the PC remained responsive;
- whether the factual test passed;
- whether the offline test passed.

This baseline becomes useful when a later update, larger model, driver change, or context increase makes the system behave differently.

## Keep the first setup deliberately narrow

The durable sequence is:

**download → load → test → verify → reuse**

Do not install three runtimes and five versions of the same model on day one.

Prove one setup for one task. Save the prompt that worked. Use it for several days. Add another tool only when you can name the feature you actually need.

If the model is slow or unstable, follow the [local AI troubleshooting order](/local-ai/local-ai-slow-freezing-out-of-memory/) before reinstalling software or buying hardware.


## If the first setup does not work

If the model will not load or Windows becomes sluggish, use the [memory and performance troubleshooting guide](/local-ai/local-ai-slow-freezing-out-of-memory/). If it answers but the privacy boundary is unclear, use the [local-AI privacy checks](/local-ai/does-local-ai-keep-data-private/).

[Private AI on Your PC](/books/private-ai-on-your-pc/) connects hardware selection, setup, document workflows and maintenance into the full sequence.

Vendor references checked on 20 October 2026.
