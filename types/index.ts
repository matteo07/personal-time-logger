export type Hour = 0 | 1 |  2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23

export type Activity = 'work' | 'home' | 'exercise' | 'out'

export type Day = {
  end: Hour
  hours: Partial<Record<Hour, Activity>>
  id: Number
  start: Hour
}
