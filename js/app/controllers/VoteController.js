function VoteController() {
    this.votes = 5;
    this.toggle = false;

    this.incrementVotes = function () {
      this.toggle ? this.votes-- : this.votes++;
      this.toggle = !this.toggle;
    };

    this.decrementVotes = function () {
      this.toggle ? this.votes++ : this.votes--;
      this.toggle = !this.toggle;
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
