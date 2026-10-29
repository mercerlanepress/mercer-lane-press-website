---
title: "Home Assistant Thread Troubleshooting: Missing Router or Unreachable Device"
description: "Thread border router missing or Matter device unreachable? Check Home Assistant discovery, phone credentials, IPv6 and mesh coverage before resetting devices."
published: 2026-09-23
summary: "A Border Router connects Thread to the home IP network. Reliability depends on the intended Thread network, shared credentials, physical mesh coverage, and a working local path to the Matter controller."
order: 3
related:
  - matter-over-wifi-vs-thread
  - home-assistant-matter-commissioning-troubleshooting
  - home-assistant-matter-ipv6-multicast
---

## Thread border router missing or devices unreachable? Start here

**First identify the Thread network, its border router and the commissioning phone's credentials. Then check the local network path and mesh coverage.** A visible network does not by itself prove that Home Assistant or your phone can commission a device onto it.

| What you see | What to investigate first |
| --- | --- |
| No border router appears | Confirm the router is powered, configured and connected to the LAN; investigate local discovery before resetting endpoints. |
| A network appears but cannot be made preferred | Check whether Home Assistant has that network's credentials. Discovery and possession of credentials are separate. |
| Pairing uses an unexpected network | Check the phone's Thread credentials and the current Companion app commissioning procedure. |
| Devices join but are unreachable | Check the local IPv6 path to the Matter controller, then coverage and powered Thread routers. |
| One device fails after a powered plug moves | Test near known coverage or restore that plug before changing the whole network. |

A Thread Border Router connects the Thread mesh to adjacent IP networks such as Ethernet or Wi-Fi. It is not automatically the Matter controller; one product may provide both roles.

## A visible Thread network can still lack credentials

Home Assistant's [Thread documentation](https://www.home-assistant.io/integrations/thread/) explains that border routers advertise through mDNS/DNS-SD without advertising their network credentials. You can therefore see a network without having the credentials required to make it preferred.

The same documentation notes that Matter commissioning through the Companion apps uses the mobile device's preferred Thread network. Setting a preferred network in Home Assistant is not enough to establish which credentials the phone will use. Follow the current Android or iOS credential-sharing procedure for your existing network, then refresh the Thread view and verify the result.

Do not share Thread credentials in public screenshots or troubleshooting posts.

## Check the network in Home Assistant before changing it

Open **Settings → Connectivity → Thread** in the current Home Assistant interface. If your version groups integrations differently, use **Settings → Devices & services** and look for Thread. Identify the intended network and its border router before importing credentials or selecting a preferred network.

A Thread-capable USB radio is not proof that a Thread border router is running. Check its installed firmware and the applicable hardware setup instructions; a radio configured for Zigbee is not operating as a Thread radio merely because the hardware supports both. Avoid reflashing working hardware as an exploratory troubleshooting step.

## Worked example: a visible network that cannot be made preferred

In this **fictional diagnostic example**, a phone already controls a Matter-over-Thread plug through an existing ecosystem. Home Assistant can see the Thread network, but cannot make it preferred.

| Observation | What it establishes |
| --- | --- |
| The existing ecosystem still controls the plug | That existing control path works; it does not prove Home Assistant has the credentials. |
| Home Assistant lists the network | Discovery is working, but discovery does not supply the network's credentials. |
| The preferred-network option is unavailable | Check credential availability before buying a second border router or resetting the plug. |

Follow the [official credential-import procedure](https://www.home-assistant.io/integrations/thread/#making-a-network-your-preferred-network) in the Companion app, refresh the Thread view, and check whether the network can now be selected. Use the procedure for your phone and existing ecosystem; do not assume every platform shares credentials in the same way.

If that resolves network selection but commissioning still fails, continue with the phone's commissioning path and local IPv6 checks. One resolved credential problem does not prove that every network layer is healthy.

## Separate three Thread roles

At home, think in three broad categories.

### End devices

Battery-powered sensors and locks are often end devices.

They conserve power and should not be assumed to carry traffic for the rest of the mesh.

### Thread routers

Mains-powered Thread devices can often forward traffic for other endpoints.

These can strengthen the mesh in places where battery endpoints alone would leave weak coverage.

### Thread Border Routers

Border Routers provide the route between the Thread network and the rest of the home's IP network.

A Border Router is not automatically the Matter controller.

One physical device may provide both functions, but troubleshoot them as separate roles.

## "I have Thread" is not enough

A home can contain several Border-Router-capable products.

That does not prove they all participate in one Thread network.

If different platforms hold different Thread credentials, several networks can exist at once.

That can create a familiar problem:

- Home Assistant sees multiple Thread networks;
- a commissioning phone has credentials for one of them;
- a new Matter-over-Thread device joins a different one from the network you expected;
- the endpoint then appears unreachable through the intended path.

The first task is not to delete networks.

It is to identify them.

## Build a Thread inventory

Record:

- each detected Thread network name;
- each Border Router you can identify;
- which ecosystem or platform manages it;
- which network you intend to use;
- which phone is used for commissioning;
- which devices are mains-powered Thread routers;
- where those devices are physically located.

The objective is an understandable topology, not the maximum possible number of Border Routers.

## Check credentials before radio strength

When commissioning fails, it is easy to move the device closer to a Border Router and assume the problem is signal.

Signal may be fine while credentials are wrong.

Ask:

1. Which Thread network should this device join?
2. Does the commissioning phone have those credentials through the supported platform process?
3. Does Home Assistant identify that network?
4. Which Border Router connects it to the LAN?
5. Can the Matter controller reach the path through local IPv6 and discovery?

Only after those questions are clear should you focus on mesh coverage.

## Build a mesh, not a collection of battery endpoints

A house full of battery Thread sensors is not automatically a strong Thread network.

Think physically:

- Where is the Border Router?
- Are there powered Thread routers between floors?
- Are thick masonry walls, foil-backed insulation, metal cabinets, or long distances in the path?
- Was a mains-powered Thread plug moved just before another sensor became unreliable?
- Is one edge device depending on a single weak route?

If an endpoint is reliable near known coverage and unreliable at the original location, treat that as topology evidence.

Do not factory-reset the fabric simply because the symptom appears "Matter-related."

## Joined the mesh but still unreachable: check the IPv6 path

A device joining Thread is not proof that traffic can reach Home Assistant. Use the [official IPv6 troubleshooting section](https://www.home-assistant.io/integrations/thread/#ipv6-is-not-working) to check the Home Assistant host and the local network router. For virtual machines or containers, include the relevant virtual-network or container layer.

Record the deployment type and the exact OTBR warning before making changes. A bridged virtual machine and a system routing between networks do not have the same forwarding requirements. Do not copy a command intended for another deployment or disable the firewall to test a guess.

For a guided next step, use the [local IPv6 and multicast checklist](/home-assistant-matter-thread/home-assistant-matter-ipv6-multicast/).

## Watch 2.4 GHz placement

Thread shares the 2.4 GHz band with Zigbee and common Wi-Fi.

You do not need to redesign the whole radio plan every time an endpoint drops.

Start with simple physical checks:

- avoid placing coordinators and radios immediately beside noisy USB hardware;
- avoid burying them behind metal equipment;
- do not stack every radio beside the Wi-Fi access point if separation is practical;
- record existing Wi-Fi, Zigbee, and Thread settings before changing channels.

Change one network at a time so the result remains interpretable.

## Multiple Border Routers can help — when they are on the intended network

Compatible Border Routers on the same intended Thread network can improve resilience and coverage.

The important words are **same intended network**.

If a new ecosystem creates a separate Thread network instead, the extra hardware may increase confusion rather than coverage.

Treat "more Border Routers" and "one stronger Thread mesh" as different claims until you have evidence they are participating together.

## A failure after moving one powered device

Suppose a Matter-over-Thread contact sensor worked for weeks.

Then a powered Thread plug is moved and the sensor becomes unavailable.

Do not immediately:

- delete the sensor;
- reset Home Assistant;
- reset the router;
- remove the Matter fabric.

Instead:

1. confirm Matter-over-Wi-Fi devices still work;
2. confirm the Matter controller is healthy;
3. identify the intended Thread network;
4. confirm its Border Router is online;
5. restore the powered plug or test the sensor near known coverage;
6. observe whether stability returns.

If it does, the evidence points toward topology or placement.

The existing Matter fabric may be perfectly healthy.

## Before adding several Thread devices

Confirm:

- at least one known Border Router;
- the intended Thread network is visible and understood;
- the commissioning phone has the expected credentials;
- local IPv6 and multicast are not blocked between Home Assistant and the Border-Router side of the LAN;
- powered Thread routing coverage exists where needed;
- the product is actually Matter-over-Thread rather than merely Thread-based.

Then commission one reachable device and keep it stable before scaling.

For the broader setup path, start with [Matter-over-Wi-Fi vs Matter-over-Thread](/home-assistant-matter-thread/matter-over-wifi-vs-thread/). If pairing fails, use the [Matter commissioning troubleshooting checklist](/home-assistant-matter-thread/home-assistant-matter-commissioning-troubleshooting/).


If devices join but remain unreachable, continue with the [local IPv6 and multicast checks](/home-assistant-matter-thread/home-assistant-matter-ipv6-multicast/). For the complete setup and maintenance sequence, see [The Home Assistant & Matter Owner's Manual](/books/the-home-assistant-and-matter-owners-manual/).

Vendor reference checked on 29 October 2026. Interface labels and credential-sharing steps can change.
