# Time

Time flows tick-by-tick in Thedes. It can be understood by views:
- Linear time of the day
- Part of the day
- Day within the current season
- Season
- Day within the current year
- Year
- Days since the player entered the world
- Lunar phase
- Month

## End of the World

After the player enters in a world, such world will end in 270 days
and the player will die with it, unless the player jumps into a no-return door.
If the door is crossed, the player enters in a new world reseting the counter,
being able to bring only the items in the player's inventory.

## Lunar Phases

There are eight lunar phases:
- New (first phase)
- Waxing crescent
- First quarter
- Waxing gibbous
- Full
- Waning gibbous
- Last quarter
- Waning crescent

Each lunar phase lasts only one day.
A month starts at the day whose lunar phase is "new",
and ends at the day whose lunar phase is "waxing crescent";
thus, a month lasts 8 days.

## Seasons

There are four seasons:
- Ware (14 days, first season)
- Summer (13 days)
- Harvest (14 days)
- Winter (13 days)

## Parts of the Day

There are four parts of the day:
- Sunrise (first part)
- Daylight
- Sunset
- Night

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
- Ware:
    - Sunrise: `7/48` (3h30)
    - Daylight: `17/48` (8h30)
    - Sunset: `8/48` (4h)
    - Winter: `16/48` (8h)
- Summer:
    - Sunrise: `4/48` (2h)
    - Daylight: `23/48` (11h30)
    - Sunset: `10/48` (5h)
    - Winter: `11/48` (5h30)
- Harvest:
    - Sunrise: `8/48` (4h)
    - Daylight: `16/48` (8h)
    - Sunset: `7/48` (3h30)
    - Winter: `17/48` (8h30)
- Winter:
    - Sunrise: `9/48` (4h30)
    - Daylight: `10/48` (5h)
    - Sunset: `4/48` (2h)
    - Winter: `25/48` (12h30)
