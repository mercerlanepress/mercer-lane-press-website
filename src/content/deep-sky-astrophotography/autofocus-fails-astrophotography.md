---
title: "Autofocus Fails: Diagnose Stars, Focuser Motion and the Focus Curve"
description: "A step-by-step autofocus failure check that separates star-detection problems, focuser motion, sampling range, backlash, unstable measurements, and incorrect final focus."
published: 2026-09-23
summary: "Autofocus is a chain of camera exposures, star measurements, focuser movements, curve fitting, return motion, and verification. Find the first stage that fails instead of assuming the focuser or algorithm is broken."
order: 3
related:
  - trailing-stars-guiding-or-flexure
  - plate-solving-fails-astrophotography
  - meridian-flip-fails-automation
---

A focuser can work normally while an autofocus run fails.

Autofocus depends on several successful operations in sequence:

1. the camera exposes;
2. software detects measurable stars;
3. the focuser moves;
4. another exposure is measured;
5. enough positions are sampled to describe focus behavior;
6. a best position is calculated;
7. the focuser returns to that position;
8. the resulting stars verify the improvement.

A generic “autofocus failed” message does not tell you which stage broke.

Break the chain apart.

## First prove that manual focus is possible

Before debugging the autofocus routine, confirm three basics:

- the camera can capture usable stars;
- the focuser responds to commands;
- the optical system can reach a reasonable manual focus.

If you cannot get recognizable focused stars manually, autofocus is not the right starting point.

A routine designed to refine focus cannot rescue an optical configuration that cannot physically reach the focal plane.

## Check the autofocus frames, not only the curve

If too few stars are being detected, look at the actual exposures.

Possible causes include:

- exposure too short;
- a restrictive filter;
- cloud or haze;
- a sparse field;
- poor starting focus;
- dew;
- obstruction;
- star-detection settings that do not suit the frame.

If autofocus works through one filter but fails through another, compare the images before assuming the focuser behaves differently.

The more restrictive filter may simply provide fewer measurable stars.

## A nearly flat curve: prove that focus really changes

If every sample returns almost the same star-size measurement, ask whether the optical system is actually moving through a useful focus range.

Possible causes include:

- step size too small;
- the motor reports movement but the focuser does not move physically;
- movement is being absorbed by backlash;
- seeing masks small changes;
- measurements are unreliable.

Command a deliberately larger movement and inspect the resulting stars.

If a large change visibly alters focus, the focuser is capable of moving the focal plane and the sampling range deserves attention.

If the reported position changes but the physical focuser does not, investigate the mechanical coupling, slip, binding, or driver path.

## A curve with no clear minimum: check the sampled range

An autofocus run needs enough useful measurements on both sides of best focus.

If every point lies mostly on one side, the software has measured a slope rather than a useful minimum.

Possible reasons include:

- poor starting position;
- insufficient initial offset;
- inappropriate step size or total range;
- backlash moving the true sample positions away from the reported ones.

Get reasonably close to focus manually, then make sure the run genuinely brackets the sharpest region.

## Chaotic measurements: look for unstable inputs

If the measured points jump around with no believable trend, the issue may not be the curve-fitting method.

Investigate:

- cloud;
- changing seeing;
- wind or tracking disturbance;
- low signal-to-noise;
- saturated stars;
- too few usable stars;
- focuser slip or mechanical play.

Repeat under stable conditions while changing as little else as possible.

If the curve becomes normal without changing autofocus parameters, the original failure was a measurement-stability problem.

## Direction reversal can expose backlash

A focuser may move correctly in one direction, then take several commanded steps after reversal before the drawtube or optical position responds.

That means the reported motor position no longer maps cleanly to the optical position during those steps.

Do not hide this by entering an arbitrary large compensation value.

Measure the repeatable behavior, use the focuser or software strategy appropriate to the equipment, and verify that the final position can be reached consistently.

Large or inconsistent mechanical play deserves physical investigation rather than more curve tuning.

## “Autofocus succeeded” is not final verification

A routine can calculate a plausible best position and report success while the first science frame is worse.

Compare the stars before and after.

If the result is worse, inspect:

- the chosen final position;
- whether the focuser actually returned there;
- mechanical repeatability;
- slip;
- backlash;
- curve quality;
- star-detection reliability.

A useful check is to make small manual moves to each side of the reported final position.

If either side improves the stars, the calculated or returned position was not truly best.

The image is the verification.

## Watch for filter and meridian-flip patterns

A sudden focus change immediately after a filter change is different from slow thermal drift.

Filters may not be perfectly parfocal in the actual imaging system.

Likewise, a repeated focus shift after a meridian flip can point toward gravity-dependent mechanical behavior, mirror movement, flexure, or another state change.

Use timing as evidence.

Do not label every focus change “temperature” simply because the night is cooling.

## Run the diagnostic sequence in order

When autofocus fails, work through these questions:

1. Can you reach good manual focus?
2. Do autofocus exposures contain enough measurable stars?
3. Does the focuser physically move through the requested range?
4. Do the samples bracket a credible minimum?
5. Is the curve repeatable under stable conditions?
6. Does the final image actually verify better focus?

That sequence keeps a camera, weather, optical, mechanical, and software problem from being collapsed into one vague autofocus category.

If the stars are elongated rather than simply soft, compare frame position and exposure duration using the [trailing-star diagnostic guide](/deep-sky-astrophotography/trailing-stars-guiding-or-flexure/) before assuming focus is the only problem.
