---
title: "Plate Solving Fails: Check the Image Before the Solver"
description: "A practical plate-solving failure sequence: inspect the failed exposure, separate image-quality problems from bad solver assumptions, then test scale, coordinates, filters, and field-specific conditions."
published: 2026-09-23
summary: "A plate solver can fail because the image is not sufficiently solvable or because the solver is working from bad assumptions. Inspect the actual exposure first, then use a blind solve and configuration checks to separate those two families."
order: 2
related:
  - trailing-stars-guiding-or-flexure
  - autofocus-fails-astrophotography
  - meridian-flip-fails-automation
---

When plate solving fails, reinstalling or retuning the solver is rarely the best first move.

Start with the thing the solver was actually asked to analyse: the image.

A useful diagnosis separates two broad failure families.

**Image problem:** the exposure does not contain enough reliable star information.

**Assumption problem:** the image is usable, but the solver is being given the wrong scale, location, or configuration.

The fastest route is to determine which family you are in.

## Step 1: inspect the failed exposure

Open the exact frame that failed.

Check whether it contains multiple identifiable stars.

Look for:

- severe defocus;
- too few stars;
- heavy saturation;
- cloud or haze;
- an exposure that is too short for the field or filter;
- severe trailing;
- an obstruction or closed optical path;
- a background so poor that star detection becomes unreliable.

Do not treat every bright pixel as a usable star.

If the image itself is compromised, solver tuning is downstream of the real problem.

## Step 2: ask whether the failure is filter-specific

Suppose broadband or luminance exposures solve reliably but a narrowband exposure repeatedly fails.

That points away from a completely broken solver installation.

Compare the failed and successful solve frames for:

- exposure length;
- number of stars;
- star signal relative to the background;
- filter transmission;
- focus;
- background level.

A practical workflow may use a filter and exposure combination known to produce a reliable solve rather than demanding identical solve performance through every filter.

The important point is to diagnose why the image changed.

## Step 3: use a blind or fallback solve as evidence

A broader blind solve is valuable because it relies less on the mount's approximate pointing and some other assumptions.

If the primary solve fails but a blind solve succeeds, the image was fundamentally solvable.

Now investigate the assumptions supplied to the primary solver:

- approximate coordinates;
- mount-reported position;
- effective focal length;
- pixel size;
- search radius or equivalent limits;
- profile configuration.

Do not treat the blind solver as magic. Use its success to challenge the inputs given to the faster solver.

If both primary and blind solvers fail, suspicion shifts back toward image quality, the catalogue or solver installation, or a severe scale/configuration error.

## Step 4: verify the effective optical configuration

Plate solving depends on the image scale being at least plausible.

If you changed telescope, reducer, Barlow, camera, or binning, ask whether the software's stored model changed too.

A reducer changes effective focal length. A different camera changes pixel size. Binning or another readout mode can change how the image is presented.

Do not use native focal length when a reducer materially changes the system.

Do not use aperture or focal ratio where focal length is required.

A plausible but wrong number can be particularly confusing because it looks reasonable while steering the search toward the wrong scale.

## Step 5: compare reported and real sky position

A non-blind solver often searches around an approximate location.

If the mount reports one part of the sky while physically pointing somewhere else, the search can fail even though the exposure is otherwise good.

Possible causes include:

- incorrect startup or home state;
- stale alignment or pointing model;
- site or time configuration;
- wrong target coordinates;
- a mount moved manually without the control software knowing;
- a failed prior slew.

A successful blind solve gives you a measured position. Compare it with what the mount and sequence believed.

The discrepancy is diagnostic evidence.

## Keep solve, sync, and recenter separate

These operations are related but not identical.

A solve answers: **Where is the telescope actually pointing?**

A sync or equivalent operation may tell the mount or controller how that measured position relates to its model.

A recenter or correction slew moves the telescope toward the intended target.

If the image solves correctly but the target remains badly placed, the solver may be working perfectly. The fault is now later in the chain.

That is especially important when diagnosing a failed slew-and-centre operation or a meridian flip.

## Test another field before rebuilding the solver

If the same configuration solves another sky region, the failure may be field-specific.

Compare:

- target altitude;
- haze or cloud;
- moonlight and background;
- star density;
- filter;
- focus.

One failed field does not prove that a solver which works elsewhere is broken.

## Verify with the original operation

After correcting the identified cause, repeat the operation that failed.

If you changed the stored focal length, solve a representative frame with the corrected configuration.

If the problem was an unusable narrowband solve exposure, test the revised exposure or solve-filter strategy.

If the mount coordinates were wrong, perform a fresh solve and confirm that subsequent centring moves toward the intended coordinates.

For failures inside a larger automation chain, continue with [the meridian-flip guide](/deep-sky-astrophotography/meridian-flip-fails-automation/) and identify the last successful state before changing unrelated settings.
