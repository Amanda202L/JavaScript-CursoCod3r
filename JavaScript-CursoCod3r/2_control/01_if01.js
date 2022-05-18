function GoodNewsOnly (note) {
    if(note >= 7) {
        console.log('Approved with: ', + note)
    }
};

GoodNewsOnly(8.1);
GoodNewsOnly(6.1);

function ifTrueISpeak(value) {
    if(value) {
        console.log('It is true... ' + value)
    }
};

ifTrueISpeak();
ifTrueISpeak(null);
ifTrueISpeak(undefined);
ifTrueISpeak(NaN);
ifTrueISpeak('');
ifTrueISpeak(0);
ifTrueISpeak(-1);
ifTrueISpeak(' ');
ifTrueISpeak('?');
ifTrueISpeak([]);
ifTrueISpeak([1, 2]);
ifTrueISpeak({});