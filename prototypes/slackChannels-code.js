const { slackChannels } = require('../prototypes/datasets/slackChannels');

const slackChannelPrompts = {
  // Return the total number of pinned posts across the Slack community
  // Return -> 70
  findTotalNumberPins() {
    const pinnedPosts = slackChannels.reduce((acc, chan) => {
      return acc + chan.numPins
    }, 0)
    return pinnedPosts
  },

  // Return the channel with the oldest post. 
  // Return -> {
  //   title: '#code-fare',
  //   isPrivate: false,
  //   memberCount: 410,
  //   numPins: 5,
  //   latestPost: '05/06/21'
  // }
  // Hint: Think about how you will need to format the dates for this! 
  
  findLeastActiveChannel() {
   
    return slackChannels.forEach(channel => {
      const date1 = new Date(channel.latestPost)

      if (date1 < date2) {
        return elm2.latestPost - elm1.latestPost
      }
    }).pop()
  },

  organizeByPrivacyLevel() {

    return slackChannels.reduce((acc, chan) => {
      if (chan.isPrivate) {
        acc.privateChannels.push(chan.title)
      } else {
        acc.publicChannels.push(chan.title)
      }
      return acc
    }, {privateChannels: [], publicChannels: []})
  },

  //sort the array based on the latest post (format latestPost date to make this doable), then return the object at the first index of the array

  // Return the slack channels organized by privacy level. 
  // Return -> {
  //  privateChannels: ['#instructional-staff', '#turing-jcs', '#staff'],
  //  publicChannels: [
  //    '#health-wellness',
  //    '#unlearning-white-supremacy',
  //    '#code-fare',
  //    '#nature-appreciation',
  //    '#fitness'
  //  ]
  // }

  
  findLargestChannel() {
    return slackChannels.sort((chan1, chan2) => {
      return chan2.memberCount - chan1.memberCount
    })[0].title.slice(1)

  }

  // Return the name of the largest Slack channel. Remember to parse out the octothorpe!
  // Return -> 'health-wellness'
}
module.exports = slackChannelPrompts;
