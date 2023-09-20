const { trainers, exercisers } = require('../prototypes/datasets/fitnessCenter');

const fitnessCenterPrompts = {
  // Return a list of trainers that are in a given exerciser's budget. Make sure you handle a scenario where an exerciser does not have enough money for a trainer.
  // ex: Passing in 'Ron' should return -> ['Tammy', 'Jean-Ralphio', 'Bobby Newport']
  // ex: Passing in 'Andy' should return -> 'Sorry, no trainers available at this rate!
  findTrainerInBudget(name) {
    const exerciser = exercisers.find(person => {
      return person.name === name
    })

    const affordableTrainers = trainers.filter(trainer => {
      return trainer.rate <= exerciser.budget
      }).map(trainer => {
        return trainer.name
      })

      if (affordableTrainers.length === 0) {
        return 'Sorry, no trainers available at this rate!'
      } else {
        return affordableTrainers
      }
  },

  // Return the first trainer that specializes in all of an exerciser's interest areas. For example, Mark is interested in both 'yoga' and 'cardio' so he would like a trainer that can teach both. 
  // ex: Passing in 'Mark' should return 'Bobby Newport'
  // ex: Passing in 'Jerry' should return 'Donna'
  findTrainerForInterest(name) {
    const interest = exercisers.find(person => {
        return person.name === name
     }).interests

    return trainer = trainers.reduce((acc, trainer) => {
      let count = 0
      interest.forEach(type => {
        if (trainer.teaches.includes(type)) {
          count++
          }
        })
      if (count === interest.length) {
        acc = trainer.name
      }
      return acc
      }, null)
  },

  // Return an object that has all fitness areas as a key with an array of the trainers that teach that type of class.
  // ex: {
  //   strength: ['Tammy', 'Donna', 'Mona-Lisa', 'Bobby Newport'],
  //   cardio: ['Tammy', 'Bobby Newport'],
  //   yoga: ['Chris', 'Jean-Ralphio', 'Donna', 'Mona-Lisa', 'Bobby Newport'],
  //   meditation: ['Chris', 'Mona-Lisa'],
  //   recovery: ['Chris', 'Donna'],
  //   pilates: ['Jean-Ralphio', 'Mona-Lisa', 'Bobby Newport']
  // };
  organizeTrainersBySpecialty() {

  }
};

module.exports = fitnessCenterPrompts;