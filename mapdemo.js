let teamMap = new Map();

teamMap.set(1, 'Falcons');
teamMap.set(2, 'Falcons');
teamMap.set(3, 'Falcons');
teamMap.set(4, 'Falcons');

for (let [a, b] of teamMap) {
    document.write("<br/>Team: " + a + "<br/>Atlanta " + b + "<br/>");
}