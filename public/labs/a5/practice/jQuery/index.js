const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */

    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);

    // bindById.remove();
    bindByClass.css('background-color', 'blue').css('color', 'white');


}
$(init);

