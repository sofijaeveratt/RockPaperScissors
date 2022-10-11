function getComputerChoice() {
    const list =['Rock', 'Paper', 'Scissors'];
    const randomIndex= Math.floor(Math.random()*list.length);
    return list[randomIndex]; 
}