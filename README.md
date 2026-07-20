# VTP-web-client

This VoteTrackerPlus project repository contains the client side html/css/javascript code that the VTP-web-api repo supplies when that repo is wired to the VoteTrackerPlus repo python backend.  By wiring these three repositories together with a VTP ElectionData repository tree one can host and run an election.
 
The VTP project supports several fundementally different election topologies: 

- If the VTP deployment is in a voting center and if VTP is being employed as the UX/UI for voters to use, then this code would be executing on election official owned, opperated, and secured devices.  The devies would be connected via either secured wired or wireless technology, or be all-in-one devices.

- If the VTP deployment is in a voting center and if VTP is deployed as a plugin to existing voting equipment/software, then the interface between that software and VTP would be internal via https, CLI, or some other interface.

- If the VTP deployment is via an intranet or the internet, the client code would be running on the voter's device.  In this general scenario there would also be additional TLS, authentication, and authorization security in play to secure the data communication channels.  This additional securty secures the data in motion piece - VTP natively secures the data at rest piece via the Merkle Tree nature of the public ledger technology of Git.

There are also various different election topologies that can be leveraged to create VTP demonstrations.  These demos typically are not integrated with voter identification and registration technologies and instead are optimized for learning and demonstration purposes.  When wired together, these four repos create a live web based demonstation where participants can join via their own smart devices, cast ballots, verify their ballots, and tally the vote.

With just the VoteTrackerPlus python repo installed, a command line only demonstration is available via the machine with the VoteTrackerPlus repo installed.

Regardless, it is important to note that VoteTrackerPlus technology secures the ElectionData and VTP sofware in a data-at-rest manner and when dealing with data in motion/communication, normal security protocols protect the data-in-motion.

## Useful Links

The general layout and relationship of the various VTP repos is described in the [VTP-dev-env](https://github.com/OpenVotingTechnologyGroup/VTP-dev-env) repository - see the README there first.

See the [VoteTrackerPlus](https://github.com/OpenVotingTechnologyGroup/VoteTrackerPlus) repository for general VTP design and project information - that repo is the primary VTP repo.

See the [developer readme](https://github.com/OpenVotingTechnologyGroup/VoteTrackerPlus/tree/main/src/vtp) in the VoteTrackerPlus repo for more detailed information.
