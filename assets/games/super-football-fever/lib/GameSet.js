window.GameSet = {
    movement: {
        maxSpeed: 4.4,
        maxSpeedWithBall: 3.6,
        angularSpeedMin: 10,
        angularSpeedMax: 30,
        angularSpeedWithBall: 20,
        deceleration: 1,
        acceleration: 1.8,
        accelerationWithBall: 1,
        rogdollSpeed: 5,
        rogdollAcceleration: 5,
        ballSpeed: 4,
        ballAcceleration: 5
    },
    bump: {
        lightBumpStrength: 3,
        strongBumpStrength: 6
    },
    duration: {
        bumpDuration: .2,
        ragDollDuration: 3,
        dodgeDuration: 1
    },
    transition: {
        sprintSpeed: 4,
        idleSpeed: 0
    },
    bumpBooster: {
        speed: 9,
        active: !0
    },
    behaviour: {
        defendRestrictedArea: {
            reactionTime: [ .2, 1 ],
            ballOffSetMin: [ 0, 2 ],
            ballOffSetMax: [ 2, 4 ],
            touchDownOffsetMin: [ 0, 4 ],
            touchDownOffsetMax: [ 4, 10 ]
        },
        straightToBall: {
            reactionTime: [ .2, 1 ]
        },
        bumpNearestToBall: {
            reactionTime: [ .2, 1 ]
        },
        predictRushBallHolder: {
            rushStopDistance: [ 2, 6 ]
        },
        dodgeNearestToSelf: {
            reactionTime: [ .3, 1 ],
            detectionDistance: [ 3, 6 ]
        },
        celebrationGoal: {
            reactionTime: [ .3, 1 ],
            detectionDistance: [ 3, 6 ]
        }
    },
    camera: {
        default: {
            x: 0,
            y: 6,
            z: 6,
            offsetZ: .5
        },
        shootA: {
            x: 0,
            y: 1,
            z: 2.5,
            offsetZ: 0
        },
        shootB: {
            x: 0,
            y: 1,
            z: -2.5,
            offsetZ: 0
        },
        celebration: {
            x: 0,
            y: 3,
            z: 5,
            offsetZ: .5
        }
    }
};