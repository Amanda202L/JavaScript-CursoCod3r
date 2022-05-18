const person = {
    greetings: 'Good morning!',
    speak() {
        console.log(this.greetings)
    }
};
person.speak();

const speak = person.speak;
speak();

const personSpeaks = person.speak.bind(person);
personSpeaks()