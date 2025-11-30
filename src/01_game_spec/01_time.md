# Time

Time flows tick-by-tick in Thedes. It can be understood by views:
- linear time of the day
- part of the day
- day within the current season
- season
- day within the current year
- year
- days since the player entered the world
- lunar phase
- month

## End of the World

After the player enters in a world, such world will end in 270 days
and the player will die with it, unless the player jumps into a no-return door.
If the door is crossed, the player enters in a new world reseting the counter,
being able to bring only the items in the player's inventory.

## Lunar Phases

There are eight lunar phases:
- new (first phase)
- waxing crescent
- first quarter
- waxing gibbous
- full
- waning gibbous
- last quarter
- waning crescent

Each lunar phase lasts only one day.
A month starts at the day whose lunar phase is "new",
and ends at the day whose lunar phase is "waxing crescent";
thus, a month lasts 8 days.

## Seasons

There are four seasons:
- ware (14 days, first season)
- summer (13 days)
- harvest (14 days)
- winter (13 days)

## Parts of the Day

There are four parts of the day:
- sunrise (first part)
- daylight
- sunset
- night

### Progression

Intra-day, shifts from one part of the day to another are not linear.
Each part of the day might last a different total time.
In fact, the duration of each part of the day is not constant,
it depends on the day of the year.
For each part of the day, the duration is specified for the first day of each
season.
For the rest of the days, the durations gradually change, in a linear fashion,
so that a transition is completed when the next season starts.

The ratios of parts of day's durations at the start of each season are:
- ware:
    - sunrise: `7/48` (3h30)
    - daylight: `17/48` (8h30)
    - sunset: `8/48` (4h)
    - night: `16/48` (8h)
- summer:
    - sunrise: `4/48` (2h)
    - daylight: `23/48` (11h30)
    - sunset: `10/48` (5h)
    - night: `11/48` (5h30)
- harvest:
    - sunrise: `8/48` (4h)
    - daylight: `16/48` (8h)
    - sunset: `7/48` (3h30)
    - night: `17/48` (8h30)
- winter:
    - sunrise: `9/48` (4h30)
    - daylight: `10/48` (5h)
    - sunset: `4/48` (2h)
    - night: `25/48` (12h30)
