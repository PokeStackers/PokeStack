#!/bin/bash
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackBots.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackCommunities.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackDating.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackMaps.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackMarketplaces.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackMobileApps.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackOpenSource.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackServerStatus.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackTools.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackTwitch.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackYoutube.json"; echo
curl -s -XPOST http://pokestack-paschalis.rhcloud.com/_bulk --data-binary "@PokestackMiscellaneous.json"; echo