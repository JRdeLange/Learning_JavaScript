export class Mover {
    move(thing) {
        thing.style.transform = 'rotate(${angle}deg)';
    }
}

export default function move2(thing, angle) {
    thing.style.transform = `rotate(${angle}deg)`;
}