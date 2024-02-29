class Player {
  constructor(name) {
    this.name = name;
    this.attackedPlaces = [];
  }

  attackCoordinates(hitX, hitY) {
    const hitCoordinates = `${hitX},${hitY}`;
    if (this.hasAttacked(hitCoordinates)) {
      return false;
    } else {
      this.attackedPlaces.push(hitCoordinates);
      return true;
    }
  }

  aiMove() {
    let hitCoordinates;
    do {
      hitCoordinates = this.generateRandomCoordinates();
    } while (this.hasAttacked(hitCoordinates));

    this.attackedPlaces.push(hitCoordinates);
    return hitCoordinates;
  }

  generateRandomCoordinates() {
    const randomAttackX = Math.floor(Math.random() * 10) + 1;
    const randomAttackY = Math.floor(Math.random() * 10) + 1;
    return `${randomAttackX},${randomAttackY}`;
  }

  hasAttacked(coordinates) {
    return this.attackedPlaces.includes(coordinates);
  }
}

export default Player;
