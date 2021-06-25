var volume = {
    cylinder1: { r: 10, h: 5 },
    cylinder2: { r: 7, h: 3 },
    cylinder3: { r: 9, h: 4 },
    cylinder4: { r: 15, h: 8 }
}

for (let v in volume) {
    r = volume[v].r;
    h = volume[v].h;
    console.log(((22 / 7) * r * r * h).toFixed(4));
}
