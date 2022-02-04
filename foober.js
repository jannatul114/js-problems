for (var i = 1; i <= 20; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foober', i);
    }

    else if (i % 3 == 0) {
        console.log('foo', i);
    }

    else if (i % 5 == 0) {
        console.log('ber', i);
    }
}