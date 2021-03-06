let quests = [];
class Quest {
    constructor(questTitle, questSummary) {
        this.questTitle = questTitle;
        this.questSummary = questSummary;

    }
}

const q1 = new Quest("Any Old Port in a Storm",
    `The PCs are seeking shelter from the elements or some other threat, and come across a place to hole up. They find that they have stumbled across something dangerous,secret, or supernatural, and must then deal with it in order to enjoy a little rest. Common Twists & Themes: The shelter contains the cause of the threat the PCs were trying to avoid. The shelter houses a Hidden Base (q.v.). The PCs must not only struggle for shelter, they must struggle to survive. The place is a legitimate shelter of some kind, but the PCs are not welcome, and must win hearts or minds to earn their bed for the night.`);

const q2 = new Quest('Better Late Than Never', `Some bad guys have arrived and done some bad guy things. The PCs were none the
wiser. The bad guys have now made good their escape, and the PCs have caught wind
of it in time to chase them down before they make it back to their lair, their home nation,
behind enemy lines, etc.
Common Twists & Themes: The bad guys escaped by stealing a conveyance that
the PCs know better than they do. The bad guys duck down a metaphorical (or literal)
side-road, trying to hide or blend into an environment (often one hostile to the PCs). If
the bad guys cross the adventure's "finish line" (cross the county line, make the warp
jump, etc.) there's no way to pursue them beyond it.
`);

const q3 = new Quest(`Blackmail`, `Usually through trickery (but sometimes by digging into the PCs' past), an antagonist
has something to hold over the heads of the PCs and make them jump. This could be
any kind of threat from physical to social, but it depends on the villain having something
- even if it's information - that others don't have. Now, he is pulling the strings of the
PCs, telling them to do things they don't want to. The PCs must end the cycle of
blackmail, deprive the villain of his edge, and keep him temporarily satisfied while doing
it.
Common Twists & Themes: The adventure hook involves the PCs doing the villain
a good turn, which allows him to take advantage of them (very cynical!). To succeed,
the PCs must contact other folks that are also being used. The PCs aren't the victims at
all, but somebody they care about/are charged to protect, is.`);

const q4 = new Quest(`Breaking and Entering`, `
Mission objective: enter the dangerous place, and retrieve the vital dingus or valuable
person. Overcome the area's defenses to do so.
Common Twists & Themes: The goal is not to extract a thing, but to destroy a thing
or interfere with a process (kill the force-screen generator, assassinate the evil king,
stop the spell from being cast, wreck the invasion plans, close the portal). The goal has
moved. The goal is information, which must be broadcast or otherwise released fromthe area as soon as it is found. The job must be done without alerting anyone. The PCs
don't know the place is dangerous. The PCs must replace the thing with another thing.`);

const q5 = new Quest(`
Capture the Flag`, `
The PCs must secure a military target for the good guys. There are bad guys there that
prefer not to be secured. The fundamental tactical scenario.
Common Twists & Themes: The PCs must assemble and/or train a force to do the
job with them. The PCs are working with flawed intelligence and the target zone isn't as
described. The PCs must coordinate their own efforts with an ally group (possibly
putting aside rivalries to do so). The target zone includes a population of innocent
people, fragile goods, or some other precious thing that mustn't be harmed in the
crossfire.`);

const q6 = new Quest(`Clearing The Hex`, `There is a place where bad things live. The PCs must make it safe for nice people,
systematically clearing it of danger.
Common Twists & Themes: The bad things can't be beaten with direct conflict. The
PCs must learn more about them to solve the problem. The Haunted House. The Alien
Infestation. The Wild Forest.`);

const q7 = new Quest(`
Delver's Delight`, `
The PCs are treasure-hunters, who have caught wind of a treasure-laden ruin. They go
to explore it, and must deal with its supernatural denizens to win the treasure and get
out alive.
Common Twists & Themes: The treasure itself is something dangerous. The
treasure isn't in a ruin, but in a wilderness or even hidden somewhere "civilized." The
treasure is someone else's rightful property. The treasure turns out to have a will of its
own.`);

const q8 = new Quest(`Don't Eat The Purple Ones`, `
The PCs are stranded in a strange place, and must survive by finding food and shelter,
and then worry about getting back home.
Common Twists & Themes: The PCs must survive only for a short period of time,
until help arrives, the ship and/or radio is repaired, or some such thing (in "repair"
scenarios, sometimes the PCs must discover some fact about the local environment
that will make such repairs possible).`);

const q9 = new Quest(`Elementary, My Dear Watson`, `A crime or atrocity has been committed; the PCs must solve it. They must interview
witnesses (and prevent them from being killed), gather clues (and prevent them from
being stolen or ruined). They must then assemble proof to deliver to the authorities, or
serve as personal ministers of justice.
Common Twists & Themes: The PCs are working to clear an innocent already
accused (possibly themselves). The PCs must work alongside a special investigator or
are otherwise saddled with an unwanted ally. Midway through the adventure, the PCs
are "taken off the case" - their invitation/authority to pursue the matter is closed (often
the result of political maneuvering by an antagonist). The climax is a courtroom scene
or other arena of judgment. The scale is highly variable for this type of adventure, from
a small-town murder to a planetwide pollution scandal.`);

const q10 = new Quest(`Escort Service`, `
The PCs have a valuable object or person, which needs to be taken to a safe place or
to its rightful owner, etc. They must undertake a dangerous journey in which one or
more factions (and chance and misfortune) try to deprive them of the thing in their care.
Common Twists & Themes: The thing or person is troublesome, and tries to escape
or sidetrack the PCs. The destination has been destroyed or suborned by the enemy,
and the PCs must take upon themselves the job that either the destination or their
charge was meant to do when it got there. The person is a person attempting a political
defection. Safe arrival at the destination doesn't end the story; the PCs must then
bargain with their charge as their token (exchanging money for a hostage, for instance).
The PCs must protect the target without the target knowing about it.`);

const q11 = new Quest(`Good Housekeeping`, `The PCs are placed in charge of a large operation (a trading company, a feudal barony,
    the CIA) and must, despite lack of experience in such things, make it work and thrive.
    Common Twists & Themes: The PCs are brought in because something big isabout to happen, and the Old Guard wants a chance to escape. The peasants,
    neighbors, employees, etcetera resent the PCs, because their method of inheritance
    looks outwardly bad and everybody loved the old boss.`);

const q12 = new Quest(`Help is on the Way`, `A person (church group, nation, galaxy) is in a hazardous situation they can't survive
without rescue. The PCs are on the job. In some scenarios, the hook is as simple as a
distant yell or crackly distress signal.
Common Twists & Themes: The victim(s) is (are) a hostage, or under siege from
enemy forces, and the PCs must deal with the captors or break the siege. There is a
danger that any rescue attempts will strand the rescuers in the same soup as the
rescuees, compounding the problem. The rescuees aren't people, but animals, robots,
or something else. The "victim" doesn't realize that he needs rescuing; he thinks he's
doing something reasonable and/or safe. The threat isn't villain-oriented at all; it's a
natural disaster, nuclear meltdown, or disease outbreak. The rescuees can't leave ;
something immobile and vital must be tended to or dealt with at the adventure location.
The PCs begin as part of the rescuees, and must escape and gather forces or
resources to bring back and proceed as above.`);

const q13 = new Quest(`Hidden Base`, `
The PCs, while traveling or exploring, come across a hornet's nest of bad guys,
preparing for Big Badness. They must either find some way to get word to the good
guys, or sneak in and disable the place themselves, or a combination of both.
Common Twists & Themes: The PCs must figure out how to use local resources in
order to defend themselves or have a chance against the inhabitants.`);

const q14 = new Quest(`How Much For Just The Dingus?`, `Within a defined area, something important and valuable exists. The PCs (or their
    employers) want it, but so do one or more other groups. The ones that get it will be the
    ones that can outthink and outrace the others, deal best with the natives of the area,
    and learn the most about their target. Each competing group has its own agenda and
    resources.
    Common Twists & Themes: The natives require the competing factions to gather
    before them as pals to state their cases. The valuable thing was en route somewhere
    when its conveyance or courier wrecked or vanished.`);

const q15 = new Quest(`
I Beg Your Pardon?`, `The PCs are minding their own business when they are attacked or threatened. They
don't know why. They must solve the mystery of their attacker's motives, and in the
meantime fend off more attacks. They must put two and two together to deal with the
problem.
Common Twists & Themes: The PCs have something that the bad guys want - but
they don't necessarily realize it. The bad guys are out for revenge for a dead compatriot
from a previous adventure. The bad guys have mistaken the PCs for somebody else.`);

const q16 = new Quest(`Long Or Short Fork When Dining On Elf?`, `The PCs are a diplomatic vanguard, trying to open up (or shore up) either political or
trade relations with a strange culture. All they have to do is manage for a day or so
among the strange customs without offending anybody . . . and what information they
have is both incomplete and dangerously misleading.
Common Twists & Themes: The PCs were chosen by somebody who knew they
weren't prepared for it - an NPC trying to sabotage the works (pinning this villain might
be necessary to avert disaster).`);

const q17 = new Quest(`Look, Don't Touch`, `The PCs are working surveillance - spying on a person, gathering information on a
beast in the wild, scouting a new sector. Regardless of the scale, the primary conflict (at
least at the start) is the rule that they are only to watch, listen and learn. They are not to
make contact or let themselves be known.
Common Twists & Themes: The target gets itself in trouble and the PCs must
decide whether to break the no-contact rule in order to mount a rescue.`);

const q18 = new Quest(`Manhunt`, `Someone is gone: they've run away, gotten lost, or simply haven't called home in a
while. Somebody misses them or needs them returned. The PCs are called in to find
them and bring them back.Common Twists & Themes: The target has been kidnapped (possibly to specifically
lure the PCs). The target is dangerous and escaped from a facility designed to protect
the public. The target is valuable and escaped from a place designed to keep him safe,
cozy, and conveniently handy. The target has a reason for leaving that the PCs will
sympathize with. The target has stumbled across another adventure (either as
protagonist or victim), which the PCs must then undertake themselves. The missing
"person" is an entire expedition or pilgrimage of some kind. The target isn't a runaway or
missing/lost - they're just someone that the PCs have been hired to track down
(possibly under false pretenses).`);

const q19 = new Quest(`Missing Memories`, `One or more of the PCs wakes up with no memory of the recent past, and now they find
themselves in some kind of trouble they don't understand. The PCs must find the
reason for the memory lapse, and solve any problems they uncover in the meantime.
Common Twists & Themes: The forgetful PCs voluntarily suppressed or erased the
memories, and they find themselves undoing their own work.`);

const q20 = new Quest(`Most Peculiar, Momma`, `Something both bad and inexplicable is happening (racial tension is being fired up in
    town, all the power is out, the beer supply is drained, it's snowing in July, Voyager still
    has fans, hordes of aliens are eating all the cheese), and a lot of people are very
    troubled by it. The PCs must track the phenomenon to its source, and stop it.
    Common Twists & Themes: The PCs are somehow unwittingly responsible for the
    whole thing. What seems to be a problem of one nature (technological, personal,
    biological, chemical, magical, political, etc) is actually a problem of an alternate one.`);

const q21 = new Quest(`
No One Has Soiled The Bridge`, `The PCs are assigned to guard a single vital spot (anything from a mountain pass to a
    solar system) from impending or possible attack. They must plan their defensive
    strategy, set up watches, set traps, and so on, and then deal with the enemy when it
    arrives.
    Common Twists & Themes: The intelligence the PCs was given turns out to be
    faulty, but acting on the new information could result in greater danger - but so could
    not acting on it, and the PCs must choose or create a compromise. The PCs learn that
    the enemy has good and sympathetic reason for wanting to destroy the protected spot.`);

const q22 = new Quest(`
Not In Kansas`, `
The PCs are minding their own business and find themselves transported to a strange
place. They must figure out where they are, why they are there and how to escape.
Common Twists & Themes: They were brought there specifically to help someone
in trouble. They were brought there by accident, as a by-product of something strange
and secret. Some of the PCs' enemies were transported along with them (or
separately), and now they have a new battleground, and innocents to convince which
guys are the good guys.`);


const q23 = new Quest(`Ounces of Prevention`, `
A villain or organization is getting ready to do something bad, and the PCs have
received a tip-off of some sort. They must investigate to find out more about the caper,
and then act to prevent it.
Common Twists & Themes: The initial tip-off was a red herring meant to distract the
PCs from the actual caper. There are two simultaneous Bad Things on the way, and no
apparent way to both of them - how to choose?`);

const q24 = new Quest(`Pandora's Box`, `
Somebody has tinkered with Things Man Ought Not, or opened a portal to the Mean
People Dimension, cracked a wall at the state prison, or summoned an ancient
Babylonian god into a penthouse. Before the PCs can even think of confronting the
source of the trouble, they must deal with the waves of trouble already released by it:
monsters, old foes out for vengeance, curious aliens who think cars/citizens/McDonald's
hamburgers resemble food, and so forth.
Common Twists & Themes: The PCs can't simply take the released badness to the
mat; they have to collect it and shove it back into the source before it the adventure can
really end. The PCs are drawn in to the source and must solve problems on the other
side before returning to this one. A secret book, code, or other rare element is
necessary to plug the breach (maybe just the fellow who opened it). A close cousin to
this plot is the basic "somebody has traveled into the past and messed with our reality"
story.`);

const q25 = new Quest(`Quest For the Sparkly Hoozits`, `Somebody needs a dingus (to fulfill a prophecy, heal the monarch, prevent a war, cure
    a disease, or what have you). The PCs must find a dingus. Often an old dingus, a
    mysterious dingus, and a powerful dingus. The PCs must learn more about it to track it
    down, and then deal with taking it from wherever it is.
    Common Twists & Themes: The dingus is incomplete when found (one of the most
    irritating and un-fun plot twists in the universe). Somebody already owns it (or recently
    stole it, sometimes with legitimate claim or cause). The dingus is information, or an
    idea, or a substance, not a specific dingus. The PCs must "go undercover" or otherwise
    infiltrate a group or society, gaining the dingus by guile or stealth.`);

const q26 = new Quest(`Recent Ruins`, `A town, castle, starship, outpost, or other civilized construct is lying in ruins. Very
recently, it was just dandy. The PCs must enter the ruins, explore them, and find out
what happened.
Common Twists & Themes: Whatever ruined the ruins (including mean people,
weird radiation, monsters, a new race, ghosts) is still a threat; the PCs must save the
day. The inhabitants destroyed themselves. The "ruins" are a derelict ship or spaceship,
recently discovered. The "ruin" is a ghost town, stumbled across as the PCs travel - but
the map says the town is alive and well.`);

const q27 = new Quest(`
Running the Gauntlet`, `The PCs must travel through a hazardous area, and get through without being killed,
robbed, humiliated, debased, diseased, or educated by whatever is there. The troubles
they encounter are rarely personal in nature - the place itself is the "villain" of the
adventure.
Common Twists & Themes: The place isn't dangerous at all, and the various
"dangers" are actually attempts to communicate with the party by some agent or
another.`);

const q28 = new Quest(`
Safari`, `
The PCs are on a hunting expedition, to capture or kill and elusive and prized creature.
They must deal with its environment, its own ability to evade them, and possibly its
ability to fight them.
Common Twists & Themes: The creature is immune to their devices and weapons.
There are other people actively protecting the creature. The creature's lair allows the
PCs to stumble onto another adventure.`);

const q29 = new Quest(`Score One for the Home Team`, `
The PCs are participants in a race, contest, tournament, scavenger hunt or other
voluntary bit of sport. They must win.
Common Twists & Themes: The other contestants are less honest, and the PCs
must overcome their attempts to win dishonestly. The PCs are competing for a deeper
purpose than victory, such as to keep another contestant safe, or spy on one, or just to
get into the place where the event goes down. The PCs don't wish to win; they just wish
to prevent the villain from winning. The event is a deliberate test of the PCs abilities (for
entry into an organization, for example). The event becomes more deadly than it's
supposed to.`);

const q30 = new Quest(`Stalag 23`, `
The PCs are imprisoned, and must engineer an escape, overcoming any guards,
automatic measures, and geographic isolation their prison imposes on them.
Common Twists & Themes: Something has happened in the outside world and the
prison security has fallen lax because of it. The PCs have been hired to "test" the
prison - they aren't normal inmates. Other prisoners decide to blow the whistle for spite
or revenge. The PCs are undercover to spy on a prisoner, but are then mistaken for real
inmates and kept incarcerated. The PCs must escape on a tight schedule to get to
another adventure outside the walls.`);

const q31 = new Quest(`Take Us To Memphis And Don't Slow Down`, `
The PCs are on board a populated conveyance (East Indiaman, Cruise Ship, Ferry,
Sleeper Starship), when it is hijacked. The PCs must take action while the normals sit
and twiddle.
Common Twists & Themes: The "hijackers" are government agents pulling a
complicated caper, forcing the PCs to choose sides. The hijackers don't realize there is
a secondary danger that must be dealt with, and any attempt to convince them isviewed as a trick. The normals are unhelpful or even hostile to the PCs because they
think the PCs are just making matters worse.`);

const q32 = new Quest(`Troublemakers`, `A bad guy (or a group of them, or multiple parties) is kicking up a ruckus, upsetting the
neighbors, poisoning the reservoirs, or otherwise causing trouble. The PCs have to go
where the trouble is, locate the bad guys, and stop the party.
Common Twists & Themes: The PCs must not harm the perpetrator(s); they must
be bagged alive and well. The bad guys have prepared something dangerous and
hidden as "insurance" if they are captured. The "bad guy" is a monster or dangerous
animal (or an intelligent creature that everybody thinks is a monster or animal). The
"bad guy" is a respected public figure, superior officer, or someone else abusing their
authority, and the PCs might meet hostility from normally-helpful quarters who don't
accept that the bad guy is bad. A balance of power perpetuates the trouble, and the
PCs must choose sides to tip the balance and fix things. The "trouble" is diplomatic or
political, and the PCs must make peace, not war.`);


quests.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32);