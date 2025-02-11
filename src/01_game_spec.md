# Thedes - Game Specification

Thedes is a survival game, procedurally generated,
blending fantasy and politics of prehistoric/ancient societies.

Important entities:
- Mennish
- Player
- Thede
- Thede Limb
- Tongue
- Time

## Mennish

A Mennish is a human being.
It has the following attributes:
- health, a **number** from `0` to `K`
- energy, a **number** from `0` to `K`

## Player

The Player is a special Mennish.
It is indeed the representation of a player's character.
The Player has the following additional attributes:
- name, a **string**, non-empty

## Thede

A Thede is a political unit where Limbs (Mennishes) belong to a common
political, ethnic, national identity, and more importantly, respond to the same
leadership. Thedes have a delimited area. It has the following attributes:
- points under control, a **set of 2D coordinates**

Thedes have the following relationships:
- main tongue, `1` **Thede** to `1` **Tongue**
- limbs, `1` **Thede** to `K` **Thede Limbs**

## Thede Limb

A Thede Limb is a Mennish that belongs to a Thede. Limbs have the following attributes:
- name, a **string**, non-empty

Limbs have the following relationships:
- thede, `K` **Thede Limbs** to `1` **Thede**

## Tongue

A tongue is a human language. One tongue belongs to one or more Thedes.

## Time

Time in Thedes Game is a discrete counter
that can be measured through the following ways:
- Linear time of the day
- Part of the day
- Season
- Days since the beginning of the season
- Total days since beginning of the world
