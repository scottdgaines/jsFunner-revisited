const { slackChannels } = require('../prototypes/datasets/slackChannels');

const slackChannelPrompts = {
  // Return the total number of pinned posts across the Slack community
  // Return -> 70
  findTotalNumberPins() {
    return slackChannels.reduce((acc, chan) => {
      return acc = chan.numPins + acc
    }, 0)
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
    let oldestDate = 31

    slackChannels.forEach(chan => {
      const date = chan.latestPost.split('').slice(3, 5).join('')
      
      if (date < oldestDate) {
        oldestDate = date
      }
    })
    
    return slackChannels.find(chan => {
      return chan.latestPost.slice(3, 5) === oldestDate
    })
  },

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

  // Return the name of the largest Slack channel. Remember to parse out the octothorpe!
  // Return -> 'health-wellness'
  findLargestChannel() {
    const sortedArr = slackChannels.sort((chan1, chan2) => {
      return chan2.memberCount - chan1.memberCount
    })

    return sortedArr[0].title.slice(1)
  }
};

module.exports = slackChannelPrompts;
