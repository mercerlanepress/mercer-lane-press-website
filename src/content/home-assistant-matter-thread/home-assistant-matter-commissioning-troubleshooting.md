---
title: "Home Assistant Matter Commissioning Troubleshooting: A Layer-by-Layer Checklist"
description: "Troubleshoot Matter commissioning in Home Assistant without random resets by separating the device, transport, local discovery, controller or fabric, and automation layers."
published: 2026-09-23
summary: "Define the exact symptom, preserve evidence, identify the transport, check local reachability and controller state, and change one layer at a time before destructive resets."
order: 2
related:
  - matter-over-wifi-vs-thread
  - thread-border-router-troubleshooting
  - home-assistant-matter-ipv6-multicast
---

When Matter commissioning fails, it is tempting to reset the endpoint, restart Home Assistant, reboot the router, clear phone settings, and try again.

If the device eventually works, you still do not know which change fixed it.

A better method is to move through the control path in layers.

## 1. Define the exact symptom

"Doesn't work" is too broad.

Choose the narrowest statement you can support:

- the device will not enter commissioning mode;
- the setup code is accepted, then commissioning times out;
- the device appears to join a network but never appears in Home Assistant;
- the device works initially, then becomes unavailable;
- the device works in another ecosystem but not Home Assistant;
- Matter-over-Wi-Fi works while Matter-over-Thread fails;
- commands work but returned state is delayed or stale.

Different symptoms point to different layers.

Write down the symptom before changing anything.

## 2. Check the physical device and firmware

Confirm the basics first:

- power;
- battery;
- documented commissioning or reset state;
- physical distance during initial setup;
- any manufacturer-supported firmware update path.

Do not perform mains electrical work simply to diagnose a smart-home integration.

For in-wall or fixed equipment, follow the manufacturer's procedure and use a qualified person where required.

## 3. Identify the transport

Read the actual product documentation.

Is this endpoint:

- Matter-over-Wi-Fi;
- Matter-over-Ethernet;
- Matter-over-Thread?

Do not troubleshoot a Thread network for a Wi-Fi product.

If it is Thread, identify the intended Thread network and Border Router before moving on.

If it is Wi-Fi, confirm that the device can join the intended home network under the manufacturer's supported settings.

## 4. Check the commissioning phone

The phone often has a temporary but important role during onboarding.

Confirm that:

- the companion app can reach Home Assistant;
- the phone is on the expected home Wi-Fi;
- it is not on an isolated guest network;
- Bluetooth or another onboarding mechanism required by the device is available;
- if Thread is involved, the supported platform process has made the intended Thread credentials available to the phone.

A phone being able to browse the internet does not prove it can reach every local device needed for commissioning.

## 5. Check local IPv6 and multicast

Matter uses local IPv6 communication.

Local discovery also depends on multicast mechanisms.

Review recent network changes before resetting endpoints:

- new VLAN or firewall rules;
- wireless client isolation;
- moving the phone to a guest network;
- new access points;
- router firmware changes;
- multicast or IGMP-related configuration changes;
- changed IPv6 behavior.

If the problem began immediately after a network change, restore or verify the working baseline before deleting devices.

For a focused checklist, see [Home Assistant Matter, IPv6 and multicast](/home-assistant-matter-thread/home-assistant-matter-ipv6-multicast/).

## 6. Inspect Home Assistant's evidence

Open the affected integration and device in Home Assistant.

Use the current platform diagnostics and logs as evidence rather than guessing.

Ask:

- Does Home Assistant see the Matter integration as healthy?
- Are other Matter devices working?
- Is the failure isolated to one endpoint?
- Did all Matter devices fail at once?
- Does the device have useful diagnostics before you remove it?

If many Matter devices fail simultaneously, investigate the shared controller or LAN before resetting individual endpoints.

Preserve diagnostics before destructive changes where practical.

## 7. Separate controller and fabric problems

A Matter device can participate in more than one fabric when supported.

If the endpoint is shared across ecosystems, test which controller path fails.

If it works from one ecosystem but not another, the physical device and transport may be healthy while one controller relationship is not.

Do not remove it from every fabric merely to make the screen look clean.

Simplify one relationship at a time.

## 8. Add the Thread questions only when Thread is involved

For a Matter-over-Thread endpoint, check:

- Is the intended Border Router online?
- Which Thread network did the endpoint actually join?
- Are the expected credentials available?
- Has a powered Thread router been moved or removed?
- Is coverage weak at the device location?
- Did several Thread networks appear after adding another ecosystem?

More Border Routers do not automatically mean one stronger network.

See [Thread Border Router troubleshooting](/home-assistant-matter-thread/thread-border-router-troubleshooting/) for the network-specific path.

## 9. Do not troubleshoot the automation too early

If manual control from Home Assistant fails, leave the automation alone.

First prove that the endpoint can be controlled directly.

Only when manual control is reliable should you inspect:

- triggers;
- conditions;
- target entities;
- run mode;
- automation traces;
- state feedback.

A failed condition is not a failed radio.

## 10. Know when to stop changing things

Gather evidence before another reset when:

- many devices fail at once;
- the problem followed one infrastructure update;
- a safety-related endpoint is involved;
- repeated resets did not change the symptom;
- you are about to remove the only known-good Thread credentials;
- you no longer know which controller owns the device.

The moment the system state becomes unclear is the moment to reduce changes.

The full troubleshooting method in [The Home Assistant & Matter Owner's Manual](/books/the-home-assistant-and-matter-owners-manual/) applies the same layered approach across devices, networks, integrations, automations, updates, and replacement.
