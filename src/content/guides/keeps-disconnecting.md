---
title: Why Does My 5G Home Internet Keep Disconnecting?
description: Troubleshoot 5G home internet that keeps disconnecting, dropping out or turning off, with a controlled test sequence for gateway, signal and network causes.
published: 2026-09-19
summary: Separate a true internet outage from a gateway, Wi-Fi, or single-device interruption.
order: 1
related: [slow-speeds, weak-signal, gateway-placement]
---
A disconnect can begin upstream at the provider, on the cellular link, inside the gateway, over local Wi-Fi, or on one device. **First determine whether every device loses service at the same time.** If only one device fails, the 5G connection may still be healthy.

## 5G keeps dropping out: choose the first check

During the next dropout, compare a second device before restarting anything. If possible, compare Ethernet with Wi-Fi at the same time. This gives you a useful starting point even when the connection returns before support can investigate.

| What you observe | First check | Next step |
| --- | --- | --- |
| One device disconnects; another stays online | The affected device and its Wi-Fi connection | Compare it close to the gateway before changing gateway settings. |
| Wi-Fi drops but Ethernet stays online | Local Wi-Fi coverage or added networking equipment | Test close to the gateway, then compare with the mesh system temporarily bypassed if supported. |
| Wi-Fi and Ethernet both lose internet | Gateway status and the provider's outage channel | Record whether the gateway rebooted or lost its cellular connection. |
| Gateway turns off or restarts | Approved power supply, cable and clear ventilation | Record the lights and restart time for provider support. |
| Internet stays connected but becomes slow each evening | Matched daytime and evening tests | Use the [slow-at-night comparison](/5g-home-internet/slow-at-night/) rather than treating every slowdown as a dropout. |

**5G home internet and 5 GHz Wi-Fi are different.** The first is the gateway's cellular connection to the provider; the second is a local Wi-Fi band. A phone losing its 5 GHz Wi-Fi connection does not by itself show that the provider's 5G service has failed.

## Before changing anything

Note the time, duration, gateway status lights or app status, devices affected, and whether service returns without intervention. Do not factory-reset the gateway at the beginning: a reset can erase useful configuration and evidence. Follow the provider's instructions when its status indicators or app identify a fault.

## An ordered diagnostic procedure

1. **Define the scope.** During the next interruption, check a second device. If one works, focus on the failing device or its Wi-Fi connection.
2. **Check provider status.** Look for an outage notice in the provider's official app or status page. A neighborhood outage is not fixed by a new router.
3. **Compare Wi-Fi with Ethernet, if supported.** Connect a computer directly to the gateway using the manufacturer-approved port and cable. If Ethernet remains online while Wi-Fi fails, the cellular link probably is not the immediate cause.
4. **Record gateway behavior.** A reboot, unusual warmth, or changing status light points toward power, ventilation, firmware, or cellular reconnection. Keep the gateway on a stable surface with its vents clear.
5. **Look for a pattern.** Drops at similar busy hours can suggest provider-side congestion or load. Drops when the gateway is moved, heated by sunlight, or connected through a questionable power strip suggest different tests.
6. **Make one controlled change.** For example, use the original power adapter, test a provider-approved placement, or temporarily disconnect an added mesh system. Then observe long enough to compare.
7. **Restart only as directed.** A restart can clear a temporary state. Repeatedly restarting may hide the pattern; a factory reset should wait until provider guidance or evidence justifies it.

## What the observations mean

- **All devices fail, including Ethernet:** investigate the provider network, cellular link, gateway, and power first.
- **Wi-Fi devices fail but Ethernet works:** inspect Wi-Fi coverage, interference, bands, or added networking gear.
- **One device fails:** update and restart that device, forget and rejoin the network if its maker recommends it, and check VPN or power-saving settings.
- **The gateway itself reboots:** verify its approved power supply and ventilation; document the event for support.
- **Drops cluster with weak signal readings:** use the [weak-signal procedure](/5g-home-internet/weak-signal/) and evaluate [gateway placement](/5g-home-internet/gateway-placement/).

## When hardware is unlikely to help

A mesh kit or extender cannot repair a provider outage, a weak cellular link feeding the gateway, a gateway that loses power, or capacity problems upstream. Extra Wi-Fi hardware is relevant only after testing shows that internet reaches the gateway reliably but does not reach parts of the home.

## Sensible next steps

Keep a log for several days with times, affected devices, status indicators, weather or placement changes, and recovery action. Give provider support specific examples rather than saying service is “always down.” If the gateway is damaged, smells unusual, becomes excessively hot, or has a damaged cable, unplug it only if safe and follow provider safety guidance.

For speed variation rather than a complete loss, use the [slow-speed guide](/5g-home-internet/slow-speeds/). The book's seven-day stability test and symptom matrices provide a deeper way to investigate intermittent faults.

## Copy this dropout log for provider support

Copy this template for each interruption. Leave unavailable readings blank rather than guessing. Keep the log on your own device; it does not need account credentials or passwords.

| Field | Your observation |
| --- | --- |
| Date and time | |
| Duration | |
| Devices affected | |
| Ethernet online? | |
| Gateway lights or app status | Record the actual status shown. |
| Recovery action | For example: returned without restart. |

After several observations, tell support whether all devices fail together, whether Ethernet also fails, and whether the gateway restarts. For a repeatable seven-day investigation with symptom matrices and placement scoring, [explore The 5G Home Internet Troubleshooting Manual](/books/the-5g-home-internet-troubleshooting-manual/).
