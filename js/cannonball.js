class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
    this.y = y;
    this.x = x;
    this.image = loadImage("assets/cannonball.png")
this.body = Bodies.circle(this.x, this.y, this.r, options)
    World.add(world, this.body);
  }

  shoot() {
    
    //defina o ângulo da bala para o canhão
    //defina valor estático para o corpo
    //defina a velocidade da bala para fazer a bala se mover
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
image(this.image, 0, 0, this.r, this.r)
    pop();

    }
  }

