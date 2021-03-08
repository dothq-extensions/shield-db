import { join } from 'path'

export const cachePath = join(__dirname, '..', 'cache')

export const ADS_TRACKERS = [
  'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
  'https://www.github.developerdan.com/hosts/lists/ads-and-tracking-extended.txt',
  'https://blocklistproject.github.io/Lists/malware.txt',
  'https://blocklistproject.github.io/Lists/tracking.txt',
  'https://winhelp2002.mvps.org/hosts.txt',
  'https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt',
  'https://raw.githubusercontent.com/StevenBlack/hosts/master/data/adaway.org/hosts',
  'https://raw.githubusercontent.com/badmojr/1Hosts/master/Pro/hosts.txt',
  'https://block.energized.pro/unified/formats/hosts.txt',
  'https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts;showintro=0',
]

export const FAKE_NEWS = [
  'https://raw.githubusercontent.com/StevenBlack/hosts/master/extensions/fakenews/hosts',
]

export const GAMBLING = [
  'https://raw.githubusercontent.com/StevenBlack/hosts/master/extensions/gambling/hosts',
]

export const SOCIAL = [
  'https://raw.githubusercontent.com/StevenBlack/hosts/master/extensions/social/sinfonietta/hosts',
]
