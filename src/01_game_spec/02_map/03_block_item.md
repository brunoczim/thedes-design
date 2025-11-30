# Block/Item

Each tile has a specific block placed.
"Air" is a special block, acting as an "empty" block,
and the only one that can be "moved around":
any block in movement can "cross" air.

Some blocks have correspondencies to other types of entity:
- items: some items can be placed over the ground (in the block layer).
- living entities:
    living entities have physical representation in the map as blocks.
