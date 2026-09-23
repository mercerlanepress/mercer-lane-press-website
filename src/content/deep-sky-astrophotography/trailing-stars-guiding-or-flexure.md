---
title: "Trailing Stars: Is It Guiding, Tracking, Flexure or Optics?"
description: "A symptom-first way to diagnose elongated stars by comparing the whole frame, exposure duration, guide data, axes, and physical movement before changing guiding settings."
published: 2026-09-23
summary: "Do not assume elongated stars are a guiding problem. First decide whether the pattern is movement at all, then use exposure length, frame position, guide data, axis direction, and event timing to isolate the likely failure family."
order: 1
related:
  - plate-solving-fails-astrophotography
  - autofocus-fails-astrophotography
  - meridian-flip-fails-automation
---

Elongated stars are easy to notice and easy to misdiagnose.

A guide graph is visible, so guiding often gets blamed first. But similar-looking defects can come from tracking, wind, cable drag, differential flexure, a mechanical shift, poor settling after a dither, or optical geometry.

The first useful question is not “Which guiding setting should I change?”

It is:

**Does the evidence actually point to movement, and if so, what moved?**

## Inspect the complete frame first

Look at the centre and all four corners.

If stars across the frame are elongated in roughly the same direction, movement becomes a stronger candidate.

If the centre is reasonably sharp while the corners distort differently, ordinary tracking error becomes less convincing. Think about optical geometry such as curvature, corrector spacing, tilt, collimation, or a sensor outside the well-corrected image circle.

If one side is worse than the other, investigate asymmetry before retuning the guider.

A guide correction normally moves the complete field together. Optical problems often change with position in the frame.

## Compare short and long exposures

Take representative exposures at different lengths while keeping the rest of the setup as constant as practical.

Ask what changes as duration increases.

If a short exposure is nearly round but progressively longer exposures show increasing elongation, slow movement becomes more plausible.

If the same corner pattern is already present in a very short exposure, guiding is unlikely to explain it.

This comparison is often more useful than staring at one long sub and guessing.

## Compare the guide record with the main image

The guider measures its own optical path. The imaging camera records the data you care about.

Match a bad main-camera exposure to the guide log covering the same time.

If the guider measured the same movement seen in the image, candidates can still include mount behavior, wind, cable drag, a guide correction, or another shared disturbance.

If the main image drifts but the guide record does not show matching motion, the imaging system moved relative to the guide optical path.

That is strong evidence for a differential-flexure family.

Possible sources include:

- guide-scope rings;
- focuser sag;
- mirror movement;
- a loose adapter;
- camera or filter-wheel movement;
- cable force on the imaging train;
- structural flexure.

A calm guide graph does not prove that the imaging telescope stayed still.

## Work out whether RA or DEC dominates

If your software can display the motion in sky-relevant or angular terms, determine whether the problem is mainly right ascension, mainly declination, or an abrupt event affecting both.

A persistent RA-dominated pattern sends you toward tracking, periodic drive behavior, calibration, correction response, or mechanical loading.

A DEC-dominated pattern sends you toward drift, polar alignment, reversal behavior, backlash, binding, and the reason DEC is changing direction.

A sudden jump in both axes is more suggestive of an external event such as wind, a cable snag, vibration, or mechanical movement.

Do not diagnose an axis from one isolated spike. Look for a persistent or repeatable pattern.

## Check whether the mount is tracking at all

Before tuning guiding, confirm the mount is in the expected operating state.

A mount can be parked, stopped at a limit, left in an unexpected mode, or no longer performing normal sidereal tracking.

Do not try to guide around a basic tracking-state failure.

## Use guided versus unguided behavior as a test

For some failures, temporarily observing the mount without guide output is informative.

The question is not whether the unguided exposure is “good enough” by someone else's standard.

The question is what changes when guide corrections are removed.

If underlying movement is reasonably smooth but the guided system oscillates, the correction system deserves attention.

If unguided behavior is already poor, software tuning has limits.

## Treat event timing as evidence

Double or hooked stars often point to a discrete movement during the exposure.

Match the timestamp to events such as:

- a dither;
- autofocus;
- a filter change;
- a main-camera download;
- a mount movement;
- a wind gust;
- a cable reaching a tight position.

If only the first exposure after a dither is bad, you have a more specific settling problem than “guiding is poor.”

If the failure appears at one mount orientation, inspect cable routing, loading, and mechanical behavior at that position under supervision.

## Make one change, then verify in the image

Once a test identifies a plausible mechanism, correct that mechanism.

Do not change guide exposure, aggression, calibration, cable routing, balance, and settling at the same time. That destroys the comparison.

Then repeat a representative imaging exposure.

The verification target is not merely a smoother graph. It is the actual star shape in the main image.

If the stars remain round across the exposure lengths and mount positions that previously failed, the correction has passed a meaningful test.

For other system-level failures, use the [plate-solving guide](/deep-sky-astrophotography/plate-solving-fails-astrophotography/) or the [autofocus guide](/deep-sky-astrophotography/autofocus-fails-astrophotography/) rather than forcing every symptom into the guiding category.
